const electron = require('electron');
const Menu = electron.remote.Menu;


class NativeMenu {

    run(context: EditorAPISystem) {

        let template = [
            {
                label: "File",
                submenu: [
                    {
                        label: "Save", click: () => {
                            context.executeCommand("Save");
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
                    label: 'Change developer tool',
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
                submenu: []
            }
        ]

        const menu = Menu.buildFromTemplate(template)
        Menu.setApplicationMenu(menu) // Set the Menu part
    }
}

class HierarchyPanel {

    private tree: InspireTree;
    private context: EditorAPISystem;

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
            for (const property of behaviour.properties) {
                obj[property.key] = property.value;
                const controller = behaviourFolder.add(obj, property.key);
                controller.onChange((value) => {
                    // Fires when a controller loses focus.
                    this.context.executeCommand("ModifyBehaviourProperty", {
                        uuid: behaviour.uuid,
                        key: property.key,
                        newValue: value
                    });
                });
            }
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
        const label = document.createElement('p');
        label.innerText = labelName;
        label.style.color = 'white';
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
