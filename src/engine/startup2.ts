declare var isEditorMode: boolean;


function RunningInEditorMode() {
    if (typeof isEditorMode !== 'undefined' && isEditorMode == true) {
        return true
    }
    else {
        return false;
    }
}



if (RunningInEditorMode()) {
    core.registerSystem(new GameEngineRenderSystem()); //After TickerSystem
    core.registerSystem(new EditorAPISystem());
    // core.registerSystem(new GameEngingNetSystem());

} else {
    core.registerSystem(new GameEnginePlayModeLifeCycleSystem());
    core.registerSystem(new GameEngineRenderSystem()); //After TickerSystem
    core.registerSystem(new GameEngineMouseListenerSystem());
    // core.registerSystem(new GameEngingNetSystem());
}


core.registerBehaviourClass(Transform);
core.registerBehaviourClass(TextRenderer);
core.registerBehaviourClass(RectRenderer);
core.registerBehaviourClass(ImageRenderer);


setTimeout(() => {
    core.start(() => {
        core.changeScene("data2.json");
    });
}, 1000);
