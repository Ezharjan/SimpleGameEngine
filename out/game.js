class ClickContainerBehaviour extends Behaviour {
    onStart() {
        this.gameObject.onClick = function () {
        };
    }
}
class KeyContainerBehaviour extends Behaviour {
    constructor() {
        super(...arguments);
        this.currentTime = 0;
    }
    onStart() {
    }
    onUpdate(duringTime) {
        window.onkeydown = function (e) {
            const player = core.getObjectById("warrior");
            switch (e.keyCode) {
                case 38:
                    player.getBehaviour(Transform).y -= 5;
                    break;
                case 40:
                    player.getBehaviour(Transform).y += 5;
                    break;
                case 37:
                    player.getBehaviour(Transform).x -= 5;
                    break;
                case 39:
                    player.getBehaviour(Transform).x += 5;
                    break;
            }
        };
    }
}
core.registerBehaviourClass(KeyContainerBehaviour);
class GameStartupBehaviour extends Behaviour {
    onStart() {
<<<<<<< HEAD
=======
        this.warrior = core.getObjectById('image');
        new Trigger(this.warrior, this.warrior);
    }
    onUpdate() {
        console.log("K: ", this.warrior.getBehaviour(Transform).x);
        if (this.warrior.getBehaviour(Transform).x < 100) {
            this.warrior.getBehaviour(Transform).x += 1;
        }
>>>>>>> fbfca7e5cdb1ae39ff175d4924a82d7de6f568a9
    }
}
core.registerBehaviourClass(ClickContainerBehaviour);
core.registerBehaviourClass(GameStartupBehaviour);
