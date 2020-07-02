//1为路 0为墙 2为门 3为人物 4x为怪物 5x为楼梯 6x为增益道具
var allditu = [
	[
		[1, 1, 1, 42, 0, 0, 1, 1, 1, 0, 51],
		[1, 0, 1, 1, 0, 0, 0, 0, 1, 2, 1],
		[65, 0, 1, 2, 1, 0, 63, 67, 1, 0, 0],
		[1, 0, 1, 0, 1, 0, 65, 68, 1, 0, 1],
		[1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 1],
		[66, 0, 1, 0, 1, 2, 62, 66, 1, 1, 1],
		[1, 0, 1, 1, 2, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 0, 1, 0, 0, 2, 0],
		[0, 0, 0, 0, 0, 0, 1, 0, 1, 48, 1],
		[3, 68, 61, 1, 1, 1, 1, 0, 0, 65, 43],
	],
	[
		[1, 67, 1, 0, 67, 61, 62, 0, 1, 1, 1],
		[66, 1, 68, 0, 66, 1, 66, 0, 67, 1, 65],
		[1, 1, 1, 0, 1, 45, 1, 0, 1, 41, 1],
		[0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0],
		[1, 42, 1, 2, 43, 1, 1, 44, 1, 1, 1],
		[1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
		[45, 1, 46, 1, 1, 1, 1, 1, 1, 1, 1],
		[2, 0, 0, 2, 0, 0, 0, 2, 0, 0, 2],
		[1, 0, 1, 41, 1, 0, 1, 47, 1, 0, 1],
		[1, 0, 49, 1, 63, 0, 64, 1, 65, 0, 3],
		[51, 0, 61, 43, 62, 0, 1, 48, 1, 0, 52],
	],
];
var center = document.querySelector('.center');

var peoplex = 0;
var peopley = 0;
var diyic = 0;

var floor = 0;
var jinkey = 5;
var yinkey = 6;

var hp = 100;
var gjili = 10;
var fangyu = 10;

var arr = allditu[floor];

function xuanran() {
	if (diyic != 0) {
		var oldbox = document.querySelector('.yxibox');
		oldbox.remove();
	}
	var yxibox = document.createElement('div');
	yxibox.className = 'yxibox';
	center.appendChild(yxibox);

	var xingxikuang = document.createElement('div');
	xingxikuang.className = 'xingxikuang';
	yxibox.appendChild(xingxikuang);

	var censhu = document.createElement('div');
	censhu.className = 'censhu';
	censhu.innerHTML = `第${floor+1}层`;
	xingxikuang.appendChild(censhu);

	var keynumber = document.createElement('div');
	keynumber.className = 'keynumber';
    //keynumber.innerHTML = `金钥匙:<br>${jinkey}把<br>银钥匙:<br>${yinkey}把`;
    keynumber.innerHTML = `钥匙:<br>${jinkey}把`;
	xingxikuang.appendChild(keynumber);

	var views = document.createElement('div');
	views.className = 'views';
	views.innerHTML = `生命:${hp}<br><br>攻击:${gjili}<br><br>防御:${fangyu}<br><br>`;
	xingxikuang.appendChild(views);

	var onceaggin = document.createElement('div');
	onceaggin.className = 'onceaggin';
	onceaggin.innerHTML = '重新开始';
	onceaggin.onclick = function () {
		location.href += "?reload=true";
	};
	xingxikuang.appendChild(onceaggin);

	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[i].length; j++) {
			if (arr[i][j] == 1) {
                const lu = core.getObjectById("lu");
				yxibox.appendChild(lu);
			} else if (arr[i][j] == 0) {
                const qiang = core.getObjectById("qiang");
				yxibox.appendChild(qiang);
			} else if (50 <= arr[i][j] && arr[i][j] < 60) {
				if (arr[i][j] == 51) {
                    const loti1 = core.getObjectById("loti1");
                    yxibox.appendChild(loti1);
				} else if (arr[i][j] == 52) {
                    const loti2 = core.getObjectById("loti2");
                    yxibox.appendChild(loti2);
				}
            } else if (arr[i][j] == 2) {
				const men1 = core.getObjectById("men1");
				yxibox.appendChild(men1);
			//} else if (arr[i][j] == 21) {
				//var men1 = document.createElement('div');
				//men1.className = 'gezi men1';
				//yxibox.appendChild(men1);
			//} else if (arr[i][j] == 22) {
				//var men2 = document.createElement('div');
				//men2.className = 'gezi men2';
				//yxibox.appendChild(men2);
			} else if (40 <= arr[i][j] && arr[i][j] < 50) {
				if (arr[i][j] == 41) {
                    const guaiwu1 = core.getObjectById("guaiwu1");
                    yxibox.appendChild(guaiwu1);
				} else if (arr[i][j] == 42) {
					const guaiwu2 = core.getObjectById("guaiwu2");
                    yxibox.appendChild(guaiwu2);
				} else if (arr[i][j] == 43) {
					const guaiwu3 = core.getObjectById("guaiwu3");
                    yxibox.appendChild(guaiwu3);
				} else if (arr[i][j] == 44) {
					const guaiwu4 = core.getObjectById("guaiwu4");
                    yxibox.appendChild(guaiwu4);
				} else if (arr[i][j] == 45) {
					const guaiwu5 = core.getObjectById("guaiwu5");
                    yxibox.appendChild(guaiwu5);
				} else if (arr[i][j] == 46) {
					const guaiwu6 = core.getObjectById("guaiwu6");
                    yxibox.appendChild(guaiwu6);
				} else if (arr[i][j] == 47) {
					const guaiwu7 = core.getObjectById("guaiwu7");
                    yxibox.appendChild(guaiwu7);
				} else if (arr[i][j] == 48) {
					const guaiwu8 = core.getObjectById("guaiwu8");
                    yxibox.appendChild(guaiwu8);
				} else if (arr[i][j] == 49) {
					const guaiwu9 = core.getObjectById("guaiwu9");
                    yxibox.appendChild(guaiwu9);
				}
			} else if (arr[i][j] == 3) {
				peoplex = i;
				peopley = j;
                const renwu = core.getObjectById("renwu");
				yxibox.appendChild(renwu);
			} else if (60 <= arr[i][j] && arr[i][j] < 70) {
				if (arr[i][j] == 61) {
					const daoju1 = core.getObjectById("daoju1");
                    yxibox.appendChild(daoju1);
				} else if (arr[i][j] == 62) {
					const daoju2 = core.getObjectById("daoju2");
                    yxibox.appendChild(daoju2);
				} else if (arr[i][j] == 63) {
					const daoju3 = core.getObjectById("daoju3");
                    yxibox.appendChild(daoju3);
				} else if (arr[i][j] == 64) {
					const daoju4 = core.getObjectById("daoju4");
                    yxibox.appendChild(daoju4);
				} else if (arr[i][j] == 65) {
					const daoju5 = core.getObjectById("daoju5");
                    yxibox.appendChild(daoju5);
				} else if (arr[i][j] == 66) {
					const daoju6 = core.getObjectById("daoju6");
                    yxibox.appendChild(daoju6);
				} else if (arr[i][j] == 67) {
					const daoju7 = core.getObjectById("daoju7");
                    yxibox.appendChild(daoju7);
				} else if (arr[i][j] == 68) {
					const daoju8 = core.getObjectById("daoju8");
                    yxibox.appendChild(daoju8);
				}
			} else if (arr[i][j] == 99) {
				const lu = core.getObjectById("lu");
				yxibox.appendChild(lu);
				var die = document.createElement('div');
				die.className = 'die';
				die.innerHTML = '你死了！';
				yxibox.appendChild(die);
				var agin = document.createElement('div');
				agin.innerHTML = '再来一次';
				agin.className = 'agin';
				agin.onclick = function () {
					location.href += "?reload=true";
				}
				die.appendChild(agin);
				document.onkeydown =function(event){

				}
			}

		}
	}
	diyic = 1;
}
xuanran();


//1为路 0为墙 2x为门 3为人物 4x为怪物 5x为楼梯 6x为增益道具
function yidongguoceng(x, y, x1, y1) {
	if (arr[x1][y1] == 1) {
		arr[x1][y1] = 3;
        arr[x][y] = 1;
    } else if (arr[x1][y1] == 2 && jinkey > 0) {
		arr[x1][y1] = 3;
		arr[x][y] = 1;
		jinkey--;
	//} else if (arr[x1][y1] == 21 && jinkey > 0) {
		//arr[x1][y1] = 3;
		//arr[x][y] = 1;
		//jinkey--;
	//} else if (arr[x1][y1] == 22 && yinkey > 0) {
		//arr[x1][y1] = 3;
		//arr[x][y] = 1;
		//yinkey--;
	} else if (arr[x1][y1] == 51) {
		if (floor >= 0 && floor < allditu.length - 1) {
			floor++;
			arr = allditu[floor];
		}
	} else if (arr[x1][y1] == 52) {
		if (floor >= 1 && floor < allditu.length) {
			floor--;
			arr = allditu[floor];
		}
	} else if (arr[x1][y1] > 40 && arr[x1][y1] < 50 && hp > 0) {
		var shanghai = arr[x1][y1] % 40;
		hp = hp - shanghai * 10;
		if (hp < 0) {
			arr[x][y] = 99;
		} else {
			arr[x1][y1] = 3;
			arr[x][y] = 1;
		}
	} else if (arr[x1][y1] > 60 && arr[x1][y1] < 70) {
		if (arr[x1][y1] == 61) {

		} else if (arr[x1][y1] == 62) {
			fangyu = fangyu + 10;
		} else if (arr[x1][y1] == 63) {
			gjili = gjili + 10;
		} else if (arr[x1][y1] == 64) {
			gjili = gjili + 15;
			fangyu = fangyu + 15;
		} else if (arr[x1][y1] == 65) {
			hp = hp + 100;
		} else if (arr[x1][y1] == 66) {
			hp = hp + 50;
		} else if (arr[x1][y1] == 67) {
			jinkey++;
		} else if (arr[x1][y1] == 68) {
			yinkey++;
		}
		arr[x1][y1] = 3;
		arr[x][y] = 1;
	}
	xuanran();
}

document.onkeydown = function (event) {
	var e = event || window.event || arguments.callee.caller.arguments[0];
	if (e && e.keyCode == 38) {
		if(peoplex>0){
			yidongguoceng(peoplex, peopley, peoplex - 1, peopley);
		}
	} else if (e && e.keyCode == 37) {
		yidongguoceng(peoplex, peopley, peoplex, peopley - 1);
	}

	if (e && e.keyCode == 40) {
		if(peoplex>=0&&peoplex<=9){
			yidongguoceng(peoplex, peopley, peoplex + 1, peopley);
		}
	} else if (e && e.keyCode == 39) {
		yidongguoceng(peoplex, peopley, peoplex, peopley + 1);
	}
};

// class ClickContainerBehaviour extends Behaviour {

//     onStart() {
//         this.gameObject.onClick = function () {

//             const imageRenderer = core.getObjectById('image');
//             const greenRect = core.getObjectById("greenRect");
//             const button = core.getObjectById("button");

//             const movtionA = new MovtionBehaviour();
//             movtionA.time = 1000;
//             movtionA.targetX = 100;
//             imageRenderer.addBehaviour(movtionA);

//             const movtionB = new MovtionBehaviour();
//             movtionB.time = 1000;
//             movtionB.targetX = 0;
//             greenRect.addBehaviour(movtionB);
//             const movtionC = new MovtionBehaviour();
//             movtionC.time = 1000;
//             movtionC.targetX = 0;
//             button.addBehaviour(movtionC);
//         }
//     }
// }


// class KeyContainerBehaviour extends Behaviour {

//     onStart() {
//         const Hero = core.getObjectById("hero");
//         const Monster = core.getObjectById("monster");
//         const Tool = core.getObjectById("tool");

//         const motion = new MovtionBehaviour();
//         motion.time = 1000;
//         motion.targetX = 10;

//         Monster.addBehaviour(motion);

//         const Stairs1 = core.getObjectById("stairs1");
//         const Stairs2 = core.getObjectById("stairs2");

//         window.onkeydown = function (e) {
//             switch (e.keyCode) {
//                 case 38:
//                     Hero.getBehaviour(Transform).y -= 50;
//                     break;
//                 case 40:
//                     Hero.getBehaviour(Transform).y += 50;

//                     break;
//                 case 37:
//                     Hero.getBehaviour(Transform).x -= 50;
//                     break;
//                 case 39:
//                     Hero.getBehaviour(Transform).x += 50;
//                     break;
//             }

//             //判定是否触碰
//             if (
//                 Hero.getBehaviour(Transform).x + 280 <= (Monster.getBehaviour(Transform).x + 390 + 50)
//                 && Monster.getBehaviour(Transform).x + 390 <= (Hero.getBehaviour(Transform).x + 280 + 50)
//                 && Hero.getBehaviour(Transform).y + 670 <= (Monster.getBehaviour(Transform).y + 360 + 50)
//                 && Monster.getBehaviour(Transform).y + 360 <= (Hero.getBehaviour(Transform).y + 670 + 50)
//             ) {
//                 //"弹窗，遭遇怪物"
//                 alert("遭遇怪物！");
//                 //"怪物消失"
//             }

//             if (
//                 Hero.getBehaviour(Transform).x + 280 <= (Tool.getBehaviour(Transform).x + 600 + 50)
//                 && Tool.getBehaviour(Transform).x + 600 <= (Hero.getBehaviour(Transform).x + 280 + 50)
//                 && Hero.getBehaviour(Transform).y + 670 <= (Tool.getBehaviour(Transform).y + 410 + 50)
//                 && Tool.getBehaviour(Transform).y + 410 <= (Hero.getBehaviour(Transform).y + 670 + 50)
//             ) {
//                 //"弹窗，拾取道具"  
//                 alert("拾取道具！");

//             }

//         }

//     }

// }

// core.registerBehaviourClass(KeyContainerBehaviour);

// class MovtionBehaviour extends Behaviour {

//     private currentTime = 0;

//     @SerializedField(1000)
//     time: number; //the time for motion, which shoud be decided outside!

//     private initX = 0;
//     private initY = 0;

//     @SerializedField(0)
//     targetX: number;



//     onStart() {
//         this.initX = this.$getTransform().x;
//     }

//     $getTransform() {
//         return this.gameObject.getBehaviour(Transform);
//     }

//     onUpdate(durate) {
//         /**
//          * Apprent shake can be seen while moving using codes below
//          */
//         const transform = this.$getTransform();
//         this.currentTime += durate;
//         let timeRatio = this.currentTime / this.time;
//         (timeRatio > 1) && (timeRatio = 1);
//         const need2MovX = this.targetX - this.initX;
//         transform.x = this.initX + timeRatio * need2MovX;
//         if (timeRatio == 1) {
//             this.gameObject.removeBehaviour(this);
//         }
//     }

//     onDestroy() { }
// }



class GameStartupBehaviour extends Behaviour {

    onStart() {
        // console.log('gamestartupbehaviour');
        //const button = core.createPrefab('button.json');
        //this.gameObject.addChild(button);
    }
}

// core.registerBehaviourClass(ClickContainerBehaviour);
// core.registerBehaviourClass(MovtionBehaviour);
core.registerBehaviourClass(GameStartupBehaviour);