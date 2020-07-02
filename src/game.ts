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





core.registerBehaviourClass(PlayerManager);
