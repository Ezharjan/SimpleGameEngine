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

    music = new AudioSystem();
    video = new VideoSystem();

    onStart() {

        //示例1
        this.warrior = core.getObjectById('image');
        new Trigger(this.warrior, this.warrior);

        //示例2
        const map = new GameMapDesigner();
        const isMapSet = map.setMap(["warrior", "monster", "tool", "wall"],
            [1, 2, 3, 4],
            ["../images/main***.png",
                "../images/main***.png",
                "../images/main***.png",
                "../images/main***.png"]);
        if (isMapSet) {
            console.log("获取到的指定角色图像为: " + map.getMap("tool"));

            const walls = [];
            const wallImagesNeeded = 34;
            const wallSrc = map.getMap["wall"];
            for (let i = 0; i < wallImagesNeeded; i++) {
                walls.push(wallSrc);
            }
        }

        //示例3
        this.music.audioPath = "./medias/bgMusic.mp3";
        this.music.playAudio(false);
        console.log("is audio ended? " + this.music.isAudioEnded());

        //示例6
        // this.video.videoPath = "./medias/sample_video.mp4";
        // this.video.playVideo(false);
        // console.log("is video ended? " + this.video.isVideoEnded());
    }

    onUpdate() {
        //示例0
        if (this.warrior.getBehaviour(Transform).x < 100) {
            this.warrior.getBehaviour(Transform).x += 1;
        }

        //示例4
        this.interaction();

    }

    interaction() {

        if (GetKeyDown.RightArrow) {
            console.log("Right is pressed");
        }
        if (GetKeyDown.LeftArrow) {
            console.log("Left is pressed");
        }
        if (GetKeyDown.A) {
            console.log("A is pressed");
        }
        if (GetKeyDown.Enter) {
            console.log("Enter is pressed");
        }
        if (GetKeyDown.Six) {
            console.log("6 is pressed");
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





