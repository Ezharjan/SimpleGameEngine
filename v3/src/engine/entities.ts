class GameObject {

    private static allObjects: { [uuid: number]: GameObject } = {};

    private static gameObjectUuidIndex = 1;

    static getGameObject(uuid: number) {
        return this.allObjects[uuid];
    }


    uuid = 0;

    id = "";

    //Parent node
    parent = null;

    $children = [];

    visible = true;

    renderer = null;

    $behaviours: Behaviour[] = [];

    onClick: Function = null;

    prefabUrl: string;



    constructor() {
        this.uuid = GameObject.gameObjectUuidIndex++;
        GameObject.allObjects[this.uuid] = this;
    }


    addBehaviour(behaviour: Behaviour) {
        this.$behaviours.push(behaviour);
        behaviour.gameObject = this;
        behaviour.onAddToGameObject();
    }

    getBehaviour<T extends Behaviour>(behaviourClass: { new(): T }): T {
        const name = behaviourClass.name;
        for (const behaviour of this.$behaviours) {
            if (behaviour.constructor.name == name) {
                return behaviour as T;
            }
        }
        return null;
    }


    removeBehaviour(behaviour) {
        behaviour.$isDestroyed = true;
    }


    addChild(child) {
        const index = this.$children.indexOf(child);
        if (index == -1) {
            this.$children.push(child);
            child.parent = this;
        }
    }

    removeChild(child) {
        const index = this.$children.indexOf(child);
        if (index >= 0) {
            this.$children.splice(index, 1);
            child.parent = null;
        }
    }

    removeAllChildren() {
        for (let child of this.$children) {
            this.removeChild(child);
        }
    }
}