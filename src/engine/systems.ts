class GameEngineSystem {

    onFrame(advancedTime) { }

    onRecieveEvent(eventName: string) { }
}



class GameEngineRenderSystem extends GameEngineSystem {

    onFrame(advancedTime) {
        this.gameEngineDraw(core.root, context);
    }

    gameEngineDraw(gameObject, context) {
        const transform = gameObject.getBehaviour(Transform);
        transform.calculateGlobalProperties();
        context.setTransform(
            transform.$globalMatrix.a,
            transform.$globalMatrix.b,
            transform.$globalMatrix.c,
            transform.$globalMatrix.d,
            transform.$globalMatrix.tx,
            transform.$globalMatrix.ty
        );
        context.globalAlpha = transform.$globalAlpha;

        if (gameObject.visible) {
            if (gameObject.renderer) {
                gameObject.renderer.onDraw(context);
            }
            for (let child of gameObject.$children) {
                this.gameEngineDraw(child, context);
            }
        }
    }
}



class GameEngineTickerUpdateSystem extends GameEngineSystem {


    lastIterationTime = 0;

    lastAdvancedTime = 0;

    $fps = 60;

    onFrame(advancedTime) {
        //duration is the timespan of two frames
        const duration = advancedTime - this.lastAdvancedTime;
        this.lastAdvancedTime = advancedTime;
        this.lastIterationTime += duration;
        const frameTime = 1000 / this.$fps;
        while (this.lastIterationTime >= frameTime) {
            this.lastIterationTime -= frameTime;
            this.gameObjectOnStart(core.root);
            this.gameObjectOnUpdate(core.root, duration);
        }
    }

    gameObjectOnStart(gameObject) {
        for (const behaviour of gameObject.$behaviours) {
            if (!behaviour.$isExcutedOnStart) {
                behaviour.onStart();
                behaviour.$isExcutedOnStart = true;
            }
            for (let child of gameObject.$children) {
                this.gameObjectOnStart(child);
            }
        }
    }

    gameObjectOnUpdate(gameObject, duration) {
        for (const behaviour of gameObject.$behaviours) {
            behaviour.onUpdate(duration);
        }
        gameObject.executeRemoveBehaviour();
        for (let child of gameObject.$children) {
            this.gameObjectOnUpdate(child, duration);
        }
    }
}


class GameEnginePlayModeLifeCycleSystem extends GameEngineSystem {

    lastIterationTime = 0;

    lastAdvancedTime = 0;

    $fps = 60;


    onFrame(advancedTime: number) {
        //duration is the timespan of two frames
        const duration = advancedTime - this.lastAdvancedTime;
        this.lastAdvancedTime = advancedTime;
        this.lastIterationTime += duration;
        const frameTime = 1000 / this.$fps;
        while (this.lastIterationTime >= frameTime) {
            this.lastIterationTime -= frameTime;
            this.gameObjectOnStart(core.root);
            this.gameObjectOnUpdate(core.root, duration);
            this.gameObjectOnDestroy(core.root);
        }
    }

    gameObjectOnStart(gameObject: GameObject) {
        for (const behaviour of gameObject.$behaviours) {
            if (!behaviour.$isExecutedOnStart) {
                behaviour.onStart();
                behaviour.$isExecutedOnStart = true;
            }
            for (let child of gameObject.$children) {
                this.gameObjectOnStart(child);
            }
        }
    }

    gameObjectOnUpdate(gameObject: GameObject, duration: number) {
        for (const behaviour of gameObject.$behaviours) {
            behaviour.onUpdate(duration);
        }
        for (let child of gameObject.$children) {
            this.gameObjectOnUpdate(child, duration);
        }
    }

    gameObjectOnDestroy(gameObject: GameObject) {
        const newBehaviours = [];
        for (const behaviour of gameObject.$behaviours) {
            if (behaviour.$isDestroyed) {
                behaviour.onDestroy();
            }
            else {
                newBehaviours.push(behaviour);
            }
        }
        gameObject.$behaviours = newBehaviours;
    }
}


class GameEngineMouseListenerSystem extends GameEngineSystem {

    $currentEvent = null;

    constructor() {
        super();
        window.addEventListener('click', (e) => {
            this.$currentEvent = e;
        });
    }

    onClick(e) {
        const mouseGlobalX = e.offsetX;
        const mouseGlobalY = e.offsetY;
        const point = { x: mouseGlobalX, y: mouseGlobalY };

        //Do the event-related-bubbling logics here.
        let result = this.hitCheck(core.root, point);
        while (result) {
            if (result.onClick) {
                result.onClick();
            }
            result = result.parent;
        }
    }


    hitCheck(gameObject, point) {

        if (gameObject.renderer) {
            return gameObject.renderer.hitCheck(point);
        } else {
            /**
             * In the canvas, the object rendered latter should be
             * detected earlier than those rendered former.
             */
            for (let i = gameObject.$children.length - 1; i >= 0; i--) {
                const child = gameObject.$children[i];
                const childTransform = child.getBehaviour(Transform);
                const localMatrix = childTransform.$localMatrix;
                const invertLocalMatrix = invertMatrix(localMatrix);
                /**
                 * Formula:
                 * Relative coordinates with respect to the child object 
                 * = Relative coordinates with respect to the current object
                 * TIMES The inverse of the relative matrix of the child object
                 * */
                const childLocalPoint = pointTimesMatrix(point, invertLocalMatrix);
                const result = this.hitCheck(child, childLocalPoint);
                if (result) {
                    return result;
                }
            }
            return null;
        }
    }

    onFrame(advancedTime) {
        //Anti-plug by listening at each of the frame 
        this.$currentEvent && this.onClick(this.$currentEvent), this.$currentEvent = null;
    }

}


class EditorAPISystem extends GameEngineSystem {

    private isFirst: boolean = true;
    private currentSceneUrl = 'data.json';


    onFrame() {
        if (this.isFirst) {
            this.isFirst = false;
            nativeMenu.run(this);
            hierachyPanel.run(this);
            insepectorPanel.run(this);
            resourcePanel.run(this);
            // const hierarchyData = getHierarchyData(core.root);
            // hierachyPanel.update(hierarchyData);
        }
    }

    onRecieveEvent(eventName: string) {
        if (eventName == 'sceneChanged') {
            const hierarchyData = getHierarchyData(core.root);
            hierachyPanel.update(hierarchyData);
            insepectorPanel.clear();
        }
    }
    executeCommand(name: string, param?: any) {
        console.log('Executing command:', name, '; with parameter: ', param);
        switch (name) {
            case "SelectGameObject":
                const gameObject = GameObject.getGameObject(param);
                const gameObjectData = getInspectorData(gameObject);
                insepectorPanel.update(gameObjectData);
                break;
            case "ModifyBehaviourProperty":
                const behaviour = Behaviour.getBehaviour(param.uuid);
                behaviour[param.key] = param.newValue;
                break;
            case "Save":
                const data = core.toData(core.root.$children[0]);
                const content = JSON.stringify(data, null, '\t');
                const fs = require('fs');
                // fs.writeFileSync('data.json', content, 'utf-8');
                fs.writeFileSync(this.currentSceneUrl, content, 'utf-8');
                console.log(data);
                break;
            case "ChangeScene":
                this.currentSceneUrl = param;
                core.changeScene(this.currentSceneUrl);
                break;
            case "AddBehaviourOnGameObject":
                const { uuid, behaviourName } = param;
                const gameObject1 = GameObject.getGameObject(uuid);
                const behaviourClass = core.getBehaviourClass(behaviourName)
                gameObject1.addBehaviour(new behaviourClass());
                insepectorPanel.update(getInspectorData(gameObject1));
                break;
        }
    }
}


class GameEngingNetSystem extends GameEngineSystem {

    $shouldDetect = false;

    //obj: {method:'post/get/put/delete',url:'',dataType:'',data:{}};
    httpRequest(obj, callbackIfSucceed, callbackIfFail) {

        let xmlHttp = null;
        //Create XMLHttpRequest
        if (window.XMLHttpRequest) {
            //Compatible for all new browsers
            xmlHttp = new XMLHttpRequest;
        } else if (window.ActiveXObject) {
            //Compatiblefor IE5 and IE6
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        //Check browser compatibility
        if (xmlHttp == null) {
            alert("Current browser does not support XMLHttp.");
            return;
        }

        let httpMethod = (obj.method || "Get").toUpperCase();
        let httpDataType = obj.dataType || 'json';
        let httpUrl = obj.url || '';
        let requestData = '';

        let async = true;

        switch (httpMethod) {

            case 'GET':
                xmlHttp.open("GET", httpUrl, async);
                xmlHttp.send(null);
                break;

            case 'POST':
                xmlHttp.open("POST", httpUrl, async);
                if (httpDataType == 'json') {
                    //The parameters on body, format like {key1:value1,key2:value2}
                    requestData = obj.data || {};
                    // console.log(requestData); //Request Payload 
                    xmlHttp.setRequestHeader("Content-type", "application/json");
                    xmlHttp.send(JSON.stringify(requestData));
                } else {
                    //The parameters on path, format like key1=value1&key2=value2
                    var data = obj.data || {};
                    for (var key in data) {
                        requestData = requestData + key + "=" + data[key] + "&";
                    }
                    if (requestData == '') {
                        requestData = '';
                    } else {
                        requestData = requestData.substring(0, requestData.length - 1);
                    }
                    // console.log(requestData); //Form Data 
                    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                    xmlHttp.send(requestData);
                }
                break;

            case 'PUT':
                if (obj.dataType == 'json') xmlHttp.setRequestHeader("Content-type", "application/json");
                else xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xmlHttp.send(requestData);
                break;

            case 'DELETE':
                xmlHttp.open('DELETE', httpUrl + '?' + obj.data, true);
                xmlHttp.send(null);
                break;

            default:
                throw new Error("Request method incorrect!");
        }

        //Detect state
        xmlHttp.onreadystatechange = function () {
            //Run when request has been completed(4=completed)
            if (xmlHttp.readyState == 4) {
                if (xmlHttp.status == 200) {
                    callbackIfSucceed(xmlHttp.responseText);
                } else {
                    callbackIfFail();
                }
            }
        }
    }

    detectConnection() { }


    onFrame(advancedTime) {
        // console.log(!this.$isDetecting);
        if (!this.$shouldDetect) {
            this.detectConnection();
            this.$shouldDetect = true;
        }
    }
}


class GameEngineDebugger extends GameEngineSystem {

    debuggingMode: boolean = false;
    $message: string = '';
    consoleType: string = '';

    // constructor(debuggingMode: boolean) {
    //     this.debuggingMode = debuggingMode;
    // }

    exceptionCatcher(callback) {
        try {
            callback();
        }
        catch (e) {
            this.errorer(e);
        }
    }

    printer(info: string) {
        console.log(info);
    }

    warner(info: string) {
        console.warn(info);
    }

    errorer(info: string) {
        console.error(info);
    }

    promiseAssertion(callback1, callback2, callback3) {
        if (this.debuggingMode) {
            try {
                callback1(callback2(callback3));
            } catch (e) {
                console.error(this.$message);
            }
        }
    }
}
