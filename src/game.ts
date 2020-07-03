class ClickContainerBehaviour extends Behaviour {

    onStart() {
        this.gameObject.onClick = function () {
        }
    }
}

class KeyContainerBehaviour extends Behaviour{

    private currentTime = 0;

	onStart(){
            
        }
           
    onUpdate(){
		
		console.log('1');
            
		window.onkeydown = function(e){
            const player = core.getObjectById("warrior");
			switch(e.keyCode){
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
              }
	}
}

core.registerBehaviourClass(KeyContainerBehaviour)


class GameStartupBehaviour extends Behaviour {
    onStart() {
<<<<<<< HEAD
=======
        this.warrior = core.getObjectById('image');
        new Trigger(this.warrior, this.warrior);
    }
>>>>>>> fbfca7e5cdb1ae39ff175d4924a82d7de6f568a9

    }
}


<<<<<<< HEAD
core.registerBehaviourClass(ClickContainerBehaviour);
core.registerBehaviourClass(GameStartupBehaviour);
=======


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
>>>>>>> fbfca7e5cdb1ae39ff175d4924a82d7de6f568a9
