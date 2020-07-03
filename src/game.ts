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

        //示例
        const map = new GameMapDesigner();
        const isMapSet = map.setMap(["warrior", "monster", "tool", "wall"],
            [1, 2, 3, 4],
            ["../images/main***.png", "../images/main***.png", "../images/main***.png"]);
        if (isMapSet) {
            console.log("获取到的指定角色图像为: " + map.getMap("tool"));

            const walls = [];
            const wallImagesNeeded = 34;
            const wallSrc = map.getMap["wall"];
            for (let i = 0; i < wallImagesNeeded; i++) {
                walls.push(wallSrc);
            }
        }
    }

    onUpdate() {
        // console.log("K: ", this.warrior.getBehaviour(Transform).x);
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





