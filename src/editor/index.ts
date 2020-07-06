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
                        componentName: 'HierarchyPanel',
                        width: 17
                    }, {
                        type: 'component',
                        componentName: 'GamePanel'
                    }, {
                        type: 'component',
                        componentName: 'InspectorPanel',
                        width: 17
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



setTimeout(async () => {

    function loadText(url: string) {
        return new Promise<string>((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = () => {
                resolve(xhr.responseText);
            }
            xhr.open('get', url);
            xhr.send();
        });
    }

    const gamePanel = document.getElementById('gamePanel');
    const buttonPlay = document.createElement("button");
    buttonPlay.innerText = "Play";
    buttonPlay.onclick = () => {
        const BrowserWindow = require('electron').remote.BrowserWindow;
        const win = new BrowserWindow({
            width: 800,
            height: 400,
            webPreferences: {
                nodeIntegration: true
            }
        });
        win.on('close', () => { });
        win.loadFile("index.html");//Old page --- main page of the game
        // win.loadFile("firstPage.html");//New page --- 1st page of the game 
        win.maximize();

        //开发者工具
        win.webContents.openDevTools();
    }


    const buttonBuild = document.createElement("button");
    buttonBuild.innerText = "Build";
    buttonBuild.style.margin = "3px";
    buttonBuild.onclick = () => {
        alert("Waiting to be done!");
    }


    const canvas = document.createElement('canvas');
    canvas.id = 'game';
    // canvas.width = 1920;
    // canvas.height = 1280;
    canvas.width = 410;
    canvas.height = 410;
    gamePanel.appendChild(canvas);
    gamePanel.appendChild(buttonPlay);
    gamePanel.appendChild(buttonBuild);


    const content = await loadText('config.json');
    window['configData'] = JSON.parse(content)
    const javascriptFiles = window['configData'].scripts;


    for (let item of javascriptFiles) {
        await loadScript(item);
    }

    const editorJavaScriptFiles = [
        "./libs/dat.gui/dat.gui.min.js",
        "./out/engine/editor-api.js",
        "./out/engine/editor-ui.js"
    ];

    for (let item of editorJavaScriptFiles) {
        await loadScript(item);
    }

}, 1000);


function loadScript(url: string) {
    //async method let it wait 
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.onload = () => resolve();
        script.src = url;
        document.body.appendChild(script);
    });
}

