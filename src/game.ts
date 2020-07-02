class ClickContainerBehaviour extends Behaviour {

    onStart() {
        this.gameObject.onClick = function () {
        }
    }
}


class GameStartupBehaviour extends Behaviour {
    onStart() {
    }
}


core.registerBehaviourClass(ClickContainerBehaviour);
core.registerBehaviourClass(GameStartupBehaviour);


class PlayerManager extends Behaviour {
    warrior;
    onStart() {
        this.warrior = core.getObjectById('image');
        new Trigger(this.warrior, this.warrior);
    }

    onUpdate() {
        console.log("K: ", this.warrior.getBehaviour(Transform).x);
        if (this.warrior.getBehaviour(Transform).x < 100) {
            this.warrior.getBehaviour(Transform).x += 1;
        }
    }
}




/* import { Quadtree } from "@timohausmann/quadtree-js";

const myTree = new Quadtree({
    x: 0,
    y: 0,
    width: 400,
    height: 300
}, 10, 4);


const myObject = {
    x: 200,
    y: 100,
    width: 35,
    height: 70
}

myTree.insert(myObject);

 */
core.registerBehaviourClass(PlayerManager);
