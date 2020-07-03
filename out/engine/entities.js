class GameObject {
    constructor() {
        this.uuid = 0;
        this.id = "";
        //Parent node
        this.parent = null;
        this.$children = [];
        this.visible = true;
        this.renderer = null;
        this.$behaviours = [];
        this.onClick = null;
        this.children = [];
        this.uuid = GameObject.gameObjectUuidIndex++;
        GameObject.allObjects[this.uuid] = this;
    }
    static getGameObject(uuid) {
        return this.allObjects[uuid];
    }
    static findWithUuid(uuid) {
        return this.uuidGameObjectsPair[uuid];
    }
    addBehaviour(behaviour) {
        this.$behaviours.push(behaviour);
        behaviour.gameObject = this;
        behaviour.onAddToGameObject();
    }
    getBehaviour(behaviourClass) {
        const name = behaviourClass.name;
        for (const behaviour of this.$behaviours) {
            if (behaviour.constructor.name == name) {
                return behaviour;
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
GameObject.allObjects = {};
GameObject.gameObjectUuidIndex = 1;
GameObject.uuidGameObjectsPair = {};
