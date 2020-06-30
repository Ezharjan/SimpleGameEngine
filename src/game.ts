class ClickDebugBehaviour extends Behaviour {

    onStart() {
        this.gameObject.onClick = function () {
            console.log('Button clicked');
        }
    }
}



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



class MovtionBehaviour extends Behaviour {

    private currentTime = 0;

    @SerializedField(1000)
    time: number; //the time for motion, which shoud be decided outside!

    private initX = 0;

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
        const button = core.createPrefab('button.json');
        this.gameObject.addChild(button);
    }
}



core.registerBehaviourClass(ClickDebugBehaviour);
core.registerBehaviourClass(ClickContainerBehaviour);
core.registerBehaviourClass(MovtionBehaviour);
core.registerBehaviourClass(GameStartupBehaviour);