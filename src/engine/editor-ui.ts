const electron = require('electron');
const Menu = electron.remote.Menu;

class Utils {
    public static getLocalFilePath() {
        const { dialog } = require('electron').remote

        const localFilePath = dialog.showOpenDialogSync(this, {
            properties: ['openFile', 'openDirectory']
        });
        console.log(localFilePath);
        return localFilePath;
    }
}

class NativeMenu {

    run(context: EditorAPISystem) {

        let template = [
            {
                label: "File",
                submenu: [
                    {
                        label: "Save",
                        accelerator: 'CmdOrCtrl+S',
                        click: () => {
                            context.executeCommand("Save");
                        }
                    },
                    {
                        label: "Import",
                        accelerator: 'CmdOrCtrl+I',
                        click: () => {
                            context.executeCommand("Import");
                        }
                    },
                    {
                        label: "Open",
                        accelerator: 'CmdOrCtrl+O',
                        click: () => {
                            context.executeCommand("Open");
                        }
                    },
                    {
                        label: "Build",
                        accelerator: 'CmdOrCtrl+B',
                        click: () => {
                            context.executeCommand("Build");
                        }
                    }
                ]
            },
            {
                label: 'Edit',
                submenu: [{
                    label: 'Copy ',
                    accelerator: 'CmdOrCtrl+C',
                    role: 'copy'
                }, {
                    label: 'Paste',
                    accelerator: 'CmdOrCtrl+V',
                    role: 'paste'
                }
                ]
            },
            {
                label: 'Window ',
                role: 'window',
                submenu: [{
                    label: 'Minimize',
                    accelerator: 'CmdOrCtrl+M',
                    role: 'minimize'
                }, {
                    label: 'Close',
                    accelerator: 'CmdOrCtrl+W',
                    role: 'close'
                }, {
                    label: 'Refresh',
                    accelerator: 'F5',
                    role: 'reload'
                },
                {
                    label: 'Zoom Out',
                    accelerator: 'CmdOrCtrl+-',
                    role: 'zoomout'
                },
                {
                    label: 'Zoom In',
                    accelerator: 'CmdOrCtrl+=',
                    role: 'zoomin'
                }, {
                    label: 'Dev Tool',
                    accelerator: (function () {
                        if (process.platform === 'darwin') {
                            return 'Alt+Command+I'
                        } else {
                            return 'Ctrl+Shift+I'
                        }
                    })(),
                    click: function (item, focusedWindow) {
                        if (focusedWindow) {
                            focusedWindow.toggleDevTools()
                        }
                    }
                }, {
                    type: 'separator'
                }]
            },
            {
                label: 'Help',
                role: 'help',
                submenu: [
                    {
                        label: 'Documentation',
                        accelerator: 'CmdOrCtrl+H',
                        click: () => {
                            context.executeCommand("Documentation");
                        }
                    },
                    {
                        label: 'Contact',
                        accelerator: 'Shift+CmdOrCtrl+H',
                        click: () => {
                            context.executeCommand("Contact");
                        }
                    }
                ]
            }
        ]

        const menu = Menu.buildFromTemplate(template)
        Menu.setApplicationMenu(menu) // Set the Menu part
    }
}


class HierarchyPanel {

    private tree: InspireTree;
    private context: EditorAPISystem;
    private customContainer: HTMLElement;

    run(context: EditorAPISystem) {
        this.context = context;
        const customContainer = document.getElementById('hierarchyPanel');
        customContainer.style.color = '#fefefe';

        this.tree = new InspireTree({
            data: []
        } as any);
        new InspireTreeDOM(this.tree, {
            target: customContainer
        });
    }

    update(data: HierarchyNode) {

        function buildTreeData(data: HierarchyNode): NodeConfig & { uuid: number } {
            return { text: data.name, children: data.children.map(buildTreeData), uuid: data.uuid }
        }

        const treeData = buildTreeData(data);

        this.tree.load([treeData])
        this.tree.expandDeep();
        this.tree.on('node.selected', (value) => {
            this.context.executeCommand('SelectGameObject', value.uuid);
        })
    }
}


class InspectorPanel {

    private context: EditorAPISystem;

    run(context: EditorAPISystem) {
        this.context = context;
    }

    update(data: InspectorData) {

        this.clear();

        const gui = new dat.GUI({ autoPlace: false });
        const folder = gui.addFolder(data.name);
        folder.open();
        for (const behaviour of data.behaviours) {
            const behaviourFolder = folder.addFolder(behaviour.name);
            behaviourFolder.open();

            const obj: any = {};

            const controllers = [];
            for (const property of behaviour.properties) {

                obj[property.key] = property.value;

                if (property.key == "x") {
                    const controller = behaviourFolder.add(obj, "x", 0, 1920).step(1);
                    controllers.push(controller);
                    controller.onChange((value) => {
                        // Fires when a controller loses focus.
                        this.context.executeCommand("ModifyBehaviourProperty", {
                            uuid: behaviour.uuid,
                            key: property.key,
                            newValue: value
                        });
                    });
                }
                else if (property.key == "y") {
                    const controller = behaviourFolder.add(obj, "y", 0, 1920).step(1)
                    controllers.push(controller);
                    controller.onChange((value) => {
                        // Fires when a controller loses focus.
                        this.context.executeCommand("ModifyBehaviourProperty", {
                            uuid: behaviour.uuid,
                            key: property.key,
                            newValue: value
                        });
                    });
                }
                else if (property.key == "scaleX") {
                    const controller = behaviourFolder.add(obj, "scaleX", 0, 1920).step(0.1);
                    controllers.push(controller);
                    controller.onChange((value) => {
                        // Fires when a controller loses focus.
                        this.context.executeCommand("ModifyBehaviourProperty", {
                            uuid: behaviour.uuid,
                            key: property.key,
                            newValue: value
                        });
                    });
                }
                else if (property.key == "scaleY") {
                    const controller = behaviourFolder.add(obj, "scaleY", 0, 1920).step(0.1);
                    controllers.push(controller);
                    controller.onChange((value) => {
                        // Fires when a controller loses focus.
                        this.context.executeCommand("ModifyBehaviourProperty", {
                            uuid: behaviour.uuid,
                            key: property.key,
                            newValue: value
                        });
                    });
                }
                else if (property.key == "rotation") {
                    const controller = behaviourFolder.add(obj, "rotation", -360, 360).step(1);
                    controllers.push(controller);
                    controller.onChange((value) => {
                        // Fires when a controller loses focus.
                        this.context.executeCommand("ModifyBehaviourProperty", {
                            uuid: behaviour.uuid,
                            key: property.key,
                            newValue: value
                        });
                    });
                }
                else if (property.key == "alpha") {
                    const controller = behaviourFolder.add(obj, "alpha", 0, 1).step(0.1);
                    controllers.push(controller);
                    controller.onChange((value) => {
                        // Fires when a controller loses focus.
                        this.context.executeCommand("ModifyBehaviourProperty", {
                            uuid: behaviour.uuid,
                            key: property.key,
                            newValue: value
                        });
                    });
                }
                else {
                    const controller = behaviourFolder.add(obj, property.key);
                    controllers.push(controller);
                    controller.onChange((value) => {
                        // Fires when a controller loses focus.
                        this.context.executeCommand("ModifyBehaviourProperty", {
                            uuid: behaviour.uuid,
                            key: property.key,
                            newValue: value
                        });
                    });
                }
                // controllers[index].onChange((value) => {
                //     // Fires when a controller loses focus.
                //     this.context.executeCommand("ModifyBehaviourProperty", {
                //         uuid: behaviour.uuid,
                //         key: property.key,
                //         newValue: value
                //     });
                // });

            }
            // for (const property of behaviour.properties) {
            //     const controller = controllers.pop();
            //     controller.onChange((value) => {
            //         this.context.executeCommand("ModifyBehaviourProperty", {
            //             uuid: behaviour.uuid,
            //             key: property.key,
            //             newValue: value
            //         });
            //     });
            // }
        }

        const controller = gui.add({
            addComponent: ""
        }, "addComponent", core.getAllBehaviourClassName());
        controller.onChange((value) => {
            this.context.executeCommand("AddBehaviourOnGameObject", {
                uuid: data.uuid,
                behaviourName: value,
            });
        });

        const customContainer = document.getElementById('inspectorPanel');
        customContainer.appendChild(gui.domElement);
    }

    clear() {
        const customContainer = document.getElementById('inspectorPanel');
        for (const child of customContainer.children) {
            child.remove()
        }
    }
}



class ResourcePanel {

    private context: EditorAPISystem;

    run(context: EditorAPISystem) {
        this.context = context;
        console.log('Resource panel executed!')
        const div = document.getElementById("resourcePanel");

        const scenes = core.configData.scenes;
        for (let scene of scenes) {
            const icon = new FileIcon();
            icon.create(scene);
            const view = icon.getView();
            div.appendChild(view);
            view.onclick = () => {
                context.executeCommand("ChangeScene", scene)
                console.log('Scene changed');
            }
        }

        div.onclick = () => { }
    }
}


class FileIcon {

    private view = document.createElement("div");

    create(labelName: string) {

        const img = document.createElement("img");
        img.src = './editor/ui/scene-icon.png';
        img.style.width = '33px'
        img.style.marginTop = '20px'
        img.style.marginLeft = '20px'
        img.style.marginRight = '20px'
        const label = document.createElement('p');
        label.innerText = labelName;
        label.style.color = 'white';
        label.style.marginTop = '3px';
        label.style.marginLeft = '14px';
        label.style.marginRight = '20px';
        this.view.appendChild(img);
        this.view.appendChild(label);
    }

    getView() {
        return this.view;
    }
}



const nativeMenu = new NativeMenu();
const hierachyPanel = new HierarchyPanel();
const insepectorPanel = new InspectorPanel()
const resourcePanel = new ResourcePanel();
