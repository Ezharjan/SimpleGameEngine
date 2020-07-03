const canvas = document.getElementById('game') as HTMLCanvasElement;
const context = canvas.getContext('2d');

const images = {};
const texts = {};
// var imageList = ['./assests/images/Paris.png', './assests/images/Sydney.png'];

function getImage(url) {
    return images[url];
}

function getText(url) {
    return texts[url];
}

function loadMultiText(list, onSuccess) {
    let current = 0;
    const total = list.length;
    for (const item of list) {
        loadText(item, function () {
            current++;
            if (current === total) {
                onSuccess();
            }
        })
    }
}

function loadMultiImage(list, onSuccess) {
    let current = 0;
    const total = list.length;
    for (const item of list) {
        loadImage(item, function () {
            current++;
            if (current === total) {
                onSuccess();
            }
        });
    }
}

function loadImage(url, callback) {
    const image = new Image();
    image.src = url;
    image.onload = function () {
        images[url] = image;
        callback();
    }
}

function loadText(url: string, onSuccess: Function) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = () => {
        const text = xhr.responseText;
        texts[url] = text;
        onSuccess();
    }
}


function dataToBehaviour(behaviour: Behaviour, data) {
    const properties = behaviour['constructor']['properties'];
    if (properties) {
        for (let p of properties) {
            const key = p.key;
            const defaultValue = p.defaultValue;
            if (data[key]) {
                behaviour[key] = data[key];
            }
            else {
                behaviour[key] = defaultValue;
            }
        }
    }
}


function behaviourToData(behaviour: Behaviour) {
    const name = behaviour['constructor'].name;
    const properties = behaviour['constructor']['properties'];

    const obj: any = {
        name: name
    }
    if (properties) {
        for (let p of properties) {
            const value = behaviour[p.key];
            if (value !== p.defaultValue) {
                obj[p.key] = value;
            }
        }
    }
    return obj;
}


class GameEngineCore {

    root: GameObject;

    $systems: GameEngineSystem[] = [];

    $ids = {};

    $behaviourClasses = {};


    configData: {
        scripts: number[],
        scenes: string[],
        images: string[]
    }


    loadAllResource(callback: Function) {
        loadMultiText(core.configData.scenes, () => {
            loadMultiImage(core.configData.images, callback)
        });
    };


    start(callback: Function) {

        this.configData = window['configData'];

        this.root = new GameObject();
        this.root.id = 'root';
        this.root.addBehaviour(new Transform());
        //Test async loading of the file to find out a significang bug
        this.loadAllResource(() => {
            setTimeout(() => {
                callback();
            }, 1000);
        });
        requestAnimationFrame(this.onFrame.bind(this));
    }


    changeScene(sceneOrPrefabUrl: string) {
        const text = getText(sceneOrPrefabUrl);
        const json = JSON.parse(text);
        this.root.removeAllChildren();
        const container = core.createFromData(json)
        this.root.addChild(container);
        // requestAnimationFrame(this.onFrame.bind(this));
        this.dispatchSystemEvent('sceneChanged')

    }

    dispatchSystemEvent(eventName: string) {
        for (let system of this.$systems) {
            system.onRecieveEvent(eventName);
        }
    }

    toData(gameObject: GameObject) {
        const obj: any = {
        }
        if (gameObject.id) {
            obj.id = gameObject.id;
        }
        if (gameObject.prefabUrl) {
            obj.prefabUrl = gameObject.prefabUrl;
            return obj;
        }
        if (gameObject.$children.length > 0) {
            const children = gameObject.$children.map(child => this.toData(child));
            obj.children = children;
        }

        const behaviours = gameObject.$behaviours.map(behaviour => behaviourToData(behaviour));
        obj.behaviours = behaviours;
        return obj;
    }


    createPrefab(prefabUrl: string) {
        const text = getText(prefabUrl);
        const jsonData = JSON.parse(text);
        const gameObject = this.createFromData(jsonData);
        gameObject.prefabUrl = prefabUrl;
        return gameObject;
    }


    createFromData(data) {

        let obj: GameObject;

        if (data.prefabUrl) {
            obj = core.createPrefab(data.prefabUrl);
        }
        else {
            obj = new GameObject();
            if (data.children) {
                for (let childData of data.children) {
                    const child = core.createFromData(childData);
                    obj.addChild(child);
                }
            }
            if (!data.behaviours) {
                throw new Error('Some object does not carries Behaviour.');
            }
            if (!data.behaviours.some(function (item) {
                return item.name === 'Transform';
            })) {
                throw new Error('There must be at least one Transform.');
            }
            if (data.behaviours) {
                for (let behaviourData of data.behaviours) {
                    const BehaviourClass = core.getBehaviourClass(behaviourData.name);
                    const behaviour = new BehaviourClass();
                    dataToBehaviour(behaviour, behaviourData);
                    obj.addBehaviour(behaviour);
                }
            }
        }
        if (data.id) {
            this.$ids[data.id] = obj;
            obj.id = data.id;
        }

        return obj;
    }

    getObjectById(id) {
        return this.$ids[id];
    }

    registerBehaviourClass(behaviourClass) {
        const name = behaviourClass.name;
        this.$behaviourClasses[name] = behaviourClass;
    }

    getAllBehaviourClassName() {
        const result = [];
        for (let key in this.$behaviourClasses) {
            result.push(key)
        }
        return result;
    }

    getBehaviourClass(behaviourClassName) {
        const behaviourClass = this.$behaviourClasses[behaviourClassName];
        return behaviourClass;
    }

    registerSystem(system) {
        this.$systems.push(system);
    }

    //advancedTime is the time the game has runned
    onFrame(advancedTime) {
        context.save();
        // context.clearRect(0, 0, 400, 400);
        // console.log("%%%%%:  " + resourceManager.getCanvasWidth());
        // console.log("%%%%%:  " + resourceManager.getCanvasHeight());
        // context.clearRect(0, 0, resourceManager.getCanvasWidth(), resourceManager.getCanvasWidth());
        context.clearRect(0, 0, RM.canvasWidth, RM.canvasHeight);

        for (let system of this.$systems) {
            system.onFrame(advancedTime);
        }

        context.restore();
        requestAnimationFrame(this.onFrame.bind(this));
    }
}

const core = new GameEngineCore();
