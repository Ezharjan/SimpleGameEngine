
class ClickDebugBehaviour extends Behaviour {

    onStart() {
        this.gameObject.onClick = function () {
            console.log('Button clicked');
        }
    }
}



class X extends Behaviour {
    onStart() {
        const someObj = core.getObjectById("hero");
        someObj.addBehaviour(someObj);

        console.log("KKKKKKKKKKKKKK");

    }
    onUpdate() {
        console.log("sssssssssss")
    }
}

class XBehaviour extends Behaviour {
    onStart() {
        console.log("$$$$$$$$$$$$$");
    }
    onUpdate() {
        console.log("#######");
    }
}

core.registerBehaviourClass(X);
core.registerBehaviourClass(XBehaviour);



class ClickContainerBehaviour extends Behaviour {

    onStart() {
        this.gameObject.onClick = function () {

            const imageRenderer = core.getObjectById('image');
            const greenRect = core.getObjectById("greenRect");
            const button = core.getObjectById("button");

            const movtionA = new MovtionBehaviour();
            movtionA.time = 1000;
            movtionA.targetX = 100;
            imageRenderer.addBehaviour(movtionA);

            const movtionB = new MovtionBehaviour();
            movtionB.time = 1000;
            movtionB.targetX = 0;
            greenRect.addBehaviour(movtionB);
            const movtionC = new MovtionBehaviour();
            movtionC.time = 1000;
            movtionC.targetX = 0;
            button.addBehaviour(movtionC);
        }
    }
}


class MyGameObject extends Behaviour {

    onStart() {
        const littleObject = core.getObjectById("stairs");
        const motion = new MovtionBehaviour();
        littleObject.addBehaviour(motion);
    }
    onUpdate() {
        console.log("sssssssssssssss");
    }
}



class KeyContainerBehaviour extends Behaviour {

    onStart() {
        const Hero = core.getObjectById("hero");
        const Monster = core.getObjectById("monster");
        const Tool = core.getObjectById("tool");

        const motion = new MovtionBehaviour();
        motion.time = 1000;
        motion.targetX = 10;

        Monster.addBehaviour(motion);

        const Stairs1 = core.getObjectById("stairs1");
        const Stairs2 = core.getObjectById("stairs2");

        window.onkeydown = function (e) {
            switch (e.keyCode) {
                case 38:
                    Hero.getBehaviour(Transform).y -= 50;
                    break;
                case 40:
                    Hero.getBehaviour(Transform).y += 50;

                    break;
                case 37:
                    Hero.getBehaviour(Transform).x -= 50;
                    break;
                case 39:
                    Hero.getBehaviour(Transform).x += 50;
                    break;
            }

            //判定是否触碰
            if (
                Hero.getBehaviour(Transform).x + 280 <= (Monster.getBehaviour(Transform).x + 390 + 50)
                && Monster.getBehaviour(Transform).x + 390 <= (Hero.getBehaviour(Transform).x + 280 + 50)
                && Hero.getBehaviour(Transform).y + 670 <= (Monster.getBehaviour(Transform).y + 360 + 50)
                && Monster.getBehaviour(Transform).y + 360 <= (Hero.getBehaviour(Transform).y + 670 + 50)
            ) {
                //"弹窗，遭遇怪物"
                alert("遭遇怪物！");
                //"怪物消失"
            }

            if (
                Hero.getBehaviour(Transform).x + 280 <= (Tool.getBehaviour(Transform).x + 600 + 50)
                && Tool.getBehaviour(Transform).x + 600 <= (Hero.getBehaviour(Transform).x + 280 + 50)
                && Hero.getBehaviour(Transform).y + 670 <= (Tool.getBehaviour(Transform).y + 410 + 50)
                && Tool.getBehaviour(Transform).y + 410 <= (Hero.getBehaviour(Transform).y + 670 + 50)
            ) {
                //"弹窗，拾取道具"  
                alert("拾取道具！");

            }

        }

    }

}

core.registerBehaviourClass(KeyContainerBehaviour);

class MovtionBehaviour extends Behaviour {

    private currentTime = 0;

    @SerializedField(1000)
    time: number; //the time for motion, which shoud be decided outside!

    private initX = 0;
    private initY = 0;

    @SerializedField(0)
    targetX: number;



    onStart() {
        this.initX = this.$getTransform().x;
    }

    $getTransform() {
        return this.gameObject.getBehaviour(Transform);
    }

    onUpdate(durate) {
        /**
         * Apprent shake can be seen while moving using codes below
         */
        const transform = this.$getTransform();
        this.currentTime += durate;
        let timeRatio = this.currentTime / this.time;
        (timeRatio > 1) && (timeRatio = 1);
        const need2MovX = this.targetX - this.initX;
        transform.x = this.initX + timeRatio * need2MovX;
        if (timeRatio == 1) {
            this.gameObject.removeBehaviour(this);
        }
    }

    onDestroy() { }
}



class GameStartupBehaviour extends Behaviour {

    onStart() {
        // console.log('gamestartupbehaviour');
        //const button = core.createPrefab('button.json');
        //this.gameObject.addChild(button);
    }
}



core.registerBehaviourClass(ClickDebugBehaviour);
core.registerBehaviourClass(ClickContainerBehaviour);
core.registerBehaviourClass(MovtionBehaviour);
core.registerBehaviourClass(GameStartupBehaviour);