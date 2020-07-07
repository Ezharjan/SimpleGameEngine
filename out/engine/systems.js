class GameEngineSystem {
    onFrame(advancedTime) { }
    onRecieveEvent(eventName) { }
}
class GameEngineRenderSystem extends GameEngineSystem {
    onFrame(advancedTime) {
        this.gameEngineDraw(core.root, context);
    }
    gameEngineDraw(gameObject, context) {
        const transform = gameObject.getBehaviour(Transform);
        transform.calculateGlobalProperties();
        context.setTransform(transform.$globalMatrix.a, transform.$globalMatrix.b, transform.$globalMatrix.c, transform.$globalMatrix.d, transform.$globalMatrix.tx, transform.$globalMatrix.ty);
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
    constructor() {
        super(...arguments);
        this.lastIterationTime = 0;
        this.lastAdvancedTime = 0;
        this.$fps = 60;
    }
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
    constructor() {
        super(...arguments);
        this.lastIterationTime = 0;
        this.lastAdvancedTime = 0;
        this.$fps = 60;
    }
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
            this.gameObjectOnDestroy(core.root);
        }
    }
    gameObjectOnStart(gameObject) {
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
    gameObjectOnUpdate(gameObject, duration) {
        for (const behaviour of gameObject.$behaviours) {
            behaviour.onUpdate(duration);
        }
        for (let child of gameObject.$children) {
            this.gameObjectOnUpdate(child, duration);
        }
    }
    gameObjectOnDestroy(gameObject) {
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
    constructor() {
        super();
        this.$currentEvent = null;
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
        }
        else {
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
    constructor() {
        super(...arguments);
        this.isFirst = true;
        this.currentSceneUrl = 'data.json';
    }
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
    onRecieveEvent(eventName) {
        if (eventName == 'sceneChanged') {
            const hierarchyData = getHierarchyData(core.root);
            hierachyPanel.update(hierarchyData);
            insepectorPanel.clear();
        }
    }
    executeCommand(name, param) {
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
                const behaviourClass = core.getBehaviourClass(behaviourName);
                gameObject1.addBehaviour(new behaviourClass());
                insepectorPanel.update(getInspectorData(gameObject1));
                break;
            case "Contact":
                window.alert("    E-mail:    bjutsoft@sina.com");
                break;
            case "Documentation":
                const BrowserWindow = require('electron').remote.BrowserWindow;
                const win = new BrowserWindow({
                    width: 800,
                    height: 400
                });
                win.on('close', () => { });
                win.loadFile("documentation.html");
                break;
            case "Import":
                alert("this function has not yet been done");
                break;
            case "Open":
                Utils.getLocalFilePath();
                //Noe integration here to read the files
                // async function openDialog() {
                //     const result = await require('electron').remote.dialog.showOpenDialog({
                //         properties: ['openFile'],
                //     });
                //     return result;
                // }
                // console.log(openDialog());
                break;
            case "Build":
                //TODO: Build method
                console.log("TODO...");
                break;
            default:
                break;
        }
    }
}
class GameEngingNetSystem extends GameEngineSystem {
    constructor() {
        super(...arguments);
        this.$shouldDetect = false;
    }
    //obj: {method:'post/get/put/delete',url:'',dataType:'',data:{}};
    httpRequest(obj, callbackIfSucceed, callbackIfFail) {
        let xmlHttp = null;
        //Create XMLHttpRequest
        if (window.XMLHttpRequest) {
            //Compatible for all new browsers
            xmlHttp = new XMLHttpRequest;
        }
        else if (window.ActiveXObject) {
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
                }
                else {
                    //The parameters on path, format like key1=value1&key2=value2
                    var data = obj.data || {};
                    for (var key in data) {
                        requestData = requestData + key + "=" + data[key] + "&";
                    }
                    if (requestData == '') {
                        requestData = '';
                    }
                    else {
                        requestData = requestData.substring(0, requestData.length - 1);
                    }
                    // console.log(requestData); //Form Data 
                    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                    xmlHttp.send(requestData);
                }
                break;
            case 'PUT':
                if (obj.dataType == 'json')
                    xmlHttp.setRequestHeader("Content-type", "application/json");
                else
                    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
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
                }
                else {
                    callbackIfFail();
                }
            }
        };
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
    constructor() {
        super(...arguments);
        this.debuggingMode = false;
        this.$message = '';
        this.consoleType = '';
    }
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
    printer(info) {
        console.log(info);
    }
    warner(info) {
        console.warn(info);
    }
    errorer(info) {
        console.error(info);
    }
    promiseAssertion(callback1, callback2, callback3) {
        if (this.debuggingMode) {
            try {
                callback1(callback2(callback3));
            }
            catch (e) {
                console.error(this.$message);
            }
        }
    }
}
class AudioSystem extends GameEngineSystem {
    constructor() {
        super();
        this.audioTag = document.createElement("audio");
        this.audioPath = "";
    }
    playAudio(shouldLoop) {
        try {
            this.audioTag.src = this.audioPath;
            shouldLoop && (this.audioTag.loop = true);
            this.audioTag.play();
            return true;
        }
        catch (err) {
            console.error(err);
            return false;
        }
    }
    reloadAudio() {
        try {
            this.audioTag.src = this.audioPath;
        }
        catch (err) {
            console.error(err);
        }
        this.audioTag.load();
    }
    pauseAudio() {
        try {
            this.audioTag.src = this.audioPath;
        }
        catch (err) {
            console.error(err);
        }
        this.audioTag.pause();
    }
    isAudioEnded(audio = this.audioTag) {
        return audio.ended;
    }
    isAudioPaused(audio = this.audioTag) {
        return audio.paused;
    }
    getAudioState(audio = this.audioTag) {
        return audio.readyState;
    }
}
class VideoSystem extends GameEngineSystem {
    constructor() {
        super();
        this.videoTag = document.createElement("video");
        this.videoPath = "";
    }
    playVideo(shouldLoop) {
        try {
            this.videoTag.src = this.videoPath;
            shouldLoop && (this.videoTag.loop = true);
            this.videoTag.play();
            return true;
        }
        catch (err) {
            console.error(err);
            return false;
        }
    }
    reloadVideo() {
        try {
            this.videoTag.src = this.videoPath;
        }
        catch (err) {
            console.error(err);
        }
        this.videoTag.load();
    }
    pauseVideo() {
        try {
            this.videoTag.src = this.videoPath;
        }
        catch (err) {
            console.error(err);
        }
        this.videoTag.pause();
    }
    isVideoEnded(video = this.videoTag) {
        return video.ended;
    }
    isVideoPaused(video = this.videoTag) {
        return video.paused;
    }
    getVideoState(video = this.videoTag) {
        return video.readyState;
    }
}
class PrefStorageSystem {
    constructor(fileName = '/data/save.db') {
        // 加载模块
        this.nedb = require('nedb');
        // 实例化连接对象（不带参数默认为内存数据库）
        this.db = new this.nedb({
            filename: fileName,
            autoload: true
        });
    }
    insert(info) {
        this.db.insert(info, (err, ret) => {
            console.log(err);
            console.log(ret);
        });
    }
    findOne(info, callback) {
        // 查询单项
        this.db.findOne(info, callback);
    }
    updateOne(oldElement, newElement) {
        // 更新单项
        this.db.update(oldElement, {
            $set: newElement
        }, {}, (err, ret) => {
            err && console.log(err);
            console.log("OK " + ret);
        });
    }
    deleteOne(doc) {
        // 删除单项
        this.db.remove(doc, (err, ret) => {
            err && console.log(err);
            console.log(ret);
        });
    }
    deleteMany(docs) {
        // 删除多项
        this.db.remove(docs, {
            multi: true
        }, (err, ret) => {
            err && console.log(err);
            console.log(ret);
        });
    }
}
function updatePlayerData(key, value) {
    console.log("local-data: " + localStorage.getItem(key));
    localStorage.getItem(key) && localStorage.removeItem(key);
    localStorage.setItem(key, value.toString());
}
function clearPlayerData() {
    localStorage.clear();
}
function getPlayerData(key) {
    const value = localStorage.getItem(key);
    return parseInt(value);
}
