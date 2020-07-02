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