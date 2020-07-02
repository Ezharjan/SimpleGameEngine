var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var config = {
    content: [
        {
            type: 'column',
            content: [
                {
                    type: 'row',
                    height: 70,
                    content: [{
                            type: 'component',
                            componentName: 'HierarchyPanel'
                        }, {
                            type: 'component',
                            componentName: 'GamePanel'
                        }, {
                            type: 'component',
                            componentName: 'InspectorPanel'
                        }]
                },
                {
                    type: 'row',
                    height: 30,
                    content: [
                        {
                            type: 'component',
                            componentName: 'ResourcePanel'
                        }
                    ]
                }
            ]
        }
    ]
};
var myLayout = new GoldenLayout(config);
myLayout.registerComponent('HierarchyPanel', function (container, componentState) {
    container.getElement().html(`<div id="hierarchyPanel"></div>`);
});
myLayout.registerComponent('GamePanel', function (container, componentState) {
    container.getElement().html(`<div id="gamePanel"></div>`);
});
myLayout.registerComponent('InspectorPanel', function (container, componentState) {
    container.getElement().html(`<div id="inspectorPanel"></div>`);
});
myLayout.registerComponent('ResourcePanel', function (container, componentState) {
    container.getElement().html(`<div id="resourcePanel"></div>`);
});
myLayout.init();
setTimeout(() => __awaiter(this, void 0, void 0, function* () {
    function loadText(url) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = () => {
                resolve(xhr.responseText);
            };
            xhr.open('get', url);
            xhr.send();
        });
    }
    const gamePanel = document.getElementById('gamePanel');
    const button = document.createElement("button");
    button.innerText = "Play";
    gamePanel.appendChild(button);
    button.onclick = () => {
        const BrowserWindow = require('electron').remote.BrowserWindow;
        const win = new BrowserWindow({
            width: 800,
            height: 400
        });
        win.on('close', () => { });
        win.loadFile("index.html");
        win.webContents.openDevTools();
    };
    const canvas = document.createElement('canvas');
    canvas.id = 'game';
    canvas.width = 400;
    canvas.height = 400;
    gamePanel.appendChild(canvas);
    const content = yield loadText('config.json');
    window['configData'] = JSON.parse(content);
    const javascriptFiles = window['configData'].scripts;
    for (let item of javascriptFiles) {
        yield loadScript(item);
    }
    const editorJavaScriptFiles = [
        "./libs/dat.gui/dat.gui.min.js",
        "./out/engine/editor-api.js",
        "./out/engine/editor-ui.js"
    ];
    for (let item of editorJavaScriptFiles) {
        yield loadScript(item);
    }
}), 1000);
function loadScript(url) {
    //async method let it wait 
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.onload = () => resolve();
        script.src = url;
        document.body.appendChild(script);
    });
}
