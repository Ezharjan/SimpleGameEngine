// import { GameMap } from './engine/map-enum';

class TextRenderer2 extends TextRenderer {

	prevText = "";

	onDraw(context) {
		if (this.prevText !== this.text) {
			context.font = this.size + 'px Arial';
			context.fillStyle = this.color;

			context.drawImage(images["./img/gamescore_background.png"], 0, 0);
			context.fillText(this.text, this.$textPosX, this.$textPosY, 400);

			this.prevText = this.text;
		}
	}
}


class KeyContainerBehaviour extends Behaviour {

	private currentTime = 0;

	onStart() {

		var allMaps = [
			[//1为路 0为墙 21石堆 22为门 3为人物 4x为怪物 5x为楼梯 6x为增益道具 67炸弹 68钥匙
				[9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
				[9, 1, 1, 1, 1, 0, 1, 68, 68, 21, 1, 1, 1, 0, 51, 9],
				[9, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 22, 1, 9],
				[9, 1, 0, 1, 1, 1, 1, 1, 65, 0, 0, 1, 0, 0, 0, 9],
				[9, 1, 0, 1, 1, 1, 1, 1, 1, 41, 0, 41, 0, 68, 1, 9],
				[9, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 42, 0, 1, 1, 9],
				[9, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 22, 42, 1, 9],
				[9, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 65, 9],
				[9, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 22, 61, 1, 42, 9],
				[9, 1, 0, 1, 1, 0, 0, 41, 1, 1, 1, 0, 1, 1, 1, 9],
				[9, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 9],
				[9, 1, 0, 0, 0, 0, 22, 0, 0, 1, 1, 1, 1, 1, 1, 9],
				[9, 1, 1, 1, 1, 1, 1, 41, 68, 0, 1, 1, 1, 1, 1, 9],
				[9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 9],
				[9, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 67, 1, 9],
				[9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],],
			[
				[9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
				[9, 1, 67, 1, 0, 67, 61, 62, 0, 1, 1, 1, 9],
				[9, 66, 1, 68, 0, 66, 1, 66, 0, 67, 1, 65, 9],
				[9, 1, 1, 1, 0, 1, 45, 1, 0, 1, 41, 1, 9],
				[9, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 9],
				[9, 1, 42, 1, 2, 43, 1, 1, 44, 1, 1, 1, 9],
				[9, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 9],
				[9, 45, 1, 46, 1, 1, 1, 1, 1, 1, 1, 1, 9],
				[9, 2, 0, 0, 2, 0, 0, 0, 2, 0, 0, 2, 9],
				[9, 1, 0, 1, 41, 1, 0, 1, 47, 1, 0, 1, 9],
				[9, 1, 0, 49, 1, 63, 0, 64, 1, 65, 0, 3, 9],
				[9, 51, 0, 61, 43, 62, 0, 1, 48, 1, 0, 52, 9],
				[9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
			],
		];

		var peoplex = 0;
		var peopley = 0;
		var firstFloor = 0;

		var floor = 0;
		var bomb = 3;
		var key = 6;

		var hp = 100;
		var gjili = 10;
		var fangyu = 10;

		var arr = allMaps[floor];
		for (var i = 0; i < arr.length; i++) {
			for (var j = 0; j < arr[i].length; j++) {
				if (arr[i][j] == 1) {


				} else if (50 <= arr[i][j] && arr[i][j] < 60) {
					if (arr[i][j] == 51) {
						const loti1 = core.getObjectById("loti1");
						loti1.getBehaviour(Transform).x = j * 50;
						loti1.getBehaviour(Transform).y = i * 50;
					} else if (arr[i][j] == 52) {
						// const loti2 = core.getObjectById("loti2");
						// loti2.getBehaviour(Transform).x = j * 50;
						// loti2.getBehaviour(Transform).y = i * 50;
					}
				} else if (arr[i][j] == 21) {
					const stone1 = core.getObjectById("stone1");
					stone1.getBehaviour(Transform).x = 500;
					stone1.getBehaviour(Transform).y = 50;
				} else if (arr[i][j] == 22) {
					const door1 = core.getObjectById("door1");
					door1.getBehaviour(Transform).x = 650;
					door1.getBehaviour(Transform).y = 100;
					const door2 = core.getObjectById("door2");
					door2.getBehaviour(Transform).x = 600;
					door2.getBehaviour(Transform).y = 300;
					const door3 = core.getObjectById("door3");
					door3.getBehaviour(Transform).x = 550;
					door3.getBehaviour(Transform).y = 400;
					const door4 = core.getObjectById("door4");
					door4.getBehaviour(Transform).x = 300;
					door4.getBehaviour(Transform).y = 550;
				} else if (40 <= arr[i][j] && arr[i][j] < 50) {
					if (arr[i][j] == 41) {
						const guaiwu1 = core.getObjectById("guaiwu1");
						guaiwu1.getBehaviour(Transform).x = j * 50;
						guaiwu1.getBehaviour(Transform).y = i * 50;
					} else if (arr[i][j] == 42) {
						const guaiwu2 = core.getObjectById("guaiwu2");
						guaiwu2.getBehaviour(Transform).x = j * 50;
						guaiwu2.getBehaviour(Transform).y = i * 50;
					} else if (arr[i][j] == 43) {
						const guaiwu3 = core.getObjectById("guaiwu3");
						guaiwu3.getBehaviour(Transform).x = j * 50;
						guaiwu3.getBehaviour(Transform).y = i * 50;
					} else if (arr[i][j] == 44) {
						const guaiwu4 = core.getObjectById("guaiwu4");
						guaiwu4.getBehaviour(Transform).x = j * 50;
						guaiwu4.getBehaviour(Transform).y = i * 50;
					} else if (arr[i][j] == 45) {
						const guaiwu5 = core.getObjectById("guaiwu5");
						guaiwu5.getBehaviour(Transform).x = j * 50;
						guaiwu5.getBehaviour(Transform).y = i * 50;
					} else if (arr[i][j] == 46) {
						const guaiwu6 = core.getObjectById("guaiwu6");
						guaiwu6.getBehaviour(Transform).x = j * 50;
						guaiwu6.getBehaviour(Transform).y = i * 50;
					} else if (arr[i][j] == 47) {
						const guaiwu7 = core.getObjectById("guaiwu7");
						guaiwu7.getBehaviour(Transform).x = j * 50;
						guaiwu7.getBehaviour(Transform).y = i * 50;
					} else if (arr[i][j] == 48) {
						const guaiwu8 = core.getObjectById("guaiwu8");
						guaiwu8.getBehaviour(Transform).x = j * 50;
						guaiwu8.getBehaviour(Transform).y = i * 50;
					} else if (arr[i][j] == 49) {
						const guaiwu9 = core.getObjectById("guaiwu9");
						guaiwu9.getBehaviour(Transform).x = j * 50;
						guaiwu9.getBehaviour(Transform).y = i * 50;
					}
				} else if (arr[i][j] == 3) {
					peoplex = i;
					peopley = j;
					const player = core.getObjectById("player");
					player.getBehaviour(Transform).x = j * 50;
					player.getBehaviour(Transform).y = i * 50;
					console.log(peoplex);
					console.log(peopley);
				} else if (60 <= arr[i][j] && arr[i][j] < 70) {
					if (arr[i][j] == 61) {
						const weapon1 = core.getObjectById("weapon1");
						weapon1.getBehaviour(Transform).x = j * 50;
						weapon1.getBehaviour(Transform).y = i * 50;
					} else if (arr[i][j] == 62) {
						const daoju2 = core.getObjectById("daoju2");
						daoju2.getBehaviour(Transform).x = j * 50;
						daoju2.getBehaviour(Transform).y = i * 50;
					} else if (arr[i][j] == 63) {
						const daoju3 = core.getObjectById("daoju3");
						daoju3.getBehaviour(Transform).x = j * 50;
						daoju3.getBehaviour(Transform).y = i * 50;
					} else if (arr[i][j] == 64) {
						const daoju4 = core.getObjectById("daoju4");
						daoju4.getBehaviour(Transform).x = j * 50;
						daoju4.getBehaviour(Transform).y = i * 50;
					} else if (arr[i][j] == 65) {
						const ys1 = core.getObjectById("ys1");
						ys1.getBehaviour(Transform).x = j * 50;
						ys1.getBehaviour(Transform).y = i * 50;
					} else if (arr[i][j] == 66) {
						const ys2 = core.getObjectById("ys2");
						ys2.getBehaviour(Transform).x = j * 50;
						ys2.getBehaviour(Transform).y = i * 50;
					} else if (arr[i][j] == 67) {
						const bomb1 = core.getObjectById("bomb1");
						bomb1.getBehaviour(Transform).x = j * 50;
						bomb1.getBehaviour(Transform).y = i * 50;
					} else if (arr[i][j] == 68) {
						const key = core.getObjectById("key");
						key.getBehaviour(Transform).x = j * 50;
						key.getBehaviour(Transform).y = i * 50;
					}
				} else if (arr[i][j] == 99) {
					const lu2 = core.getObjectById("lu");
					lu2.getBehaviour(Transform).x = j * 50;
					lu2.getBehaviour(Transform).y = i * 50;
					var die = document.createElement('div');
					die.className = 'die';
					die.innerHTML = '你死了！';
					var agin = document.createElement('div');
					agin.innerHTML = '再来一次';
					agin.className = 'agin';
					agin.onclick = function () {
						location.href += "?reload=true";
					}
					die.appendChild(agin);
					document.onkeydown = function (event) {
					}
				}
			}
		}


		//1为路 0为墙 2x为门 3为人物 4x为怪物 5x为楼梯 6x为增益道具
		function playerMove(x, y, x1, y1) {
			const player = core.getObjectById("player");
			const weapon1 = core.getObjectById("weapon1");
			const door1 = core.getObjectById("door1");
			const stone1 = core.getObjectById("stone1");
			const bomb1 = core.getObjectById("bomb1");
			const key1 = core.getObjectById("key");
			player.getBehaviour(Transform).x = y * 50;
			player.getBehaviour(Transform).y = x * 50;
			if (arr[x1][y1] == 1) {
				player.getBehaviour(Transform).x = y1 * 50;
				player.getBehaviour(Transform).y = x1 * 50;
				arr[x1][y1] = 3;
				arr[x][y] = 1;
			} else if (arr[x1][y1] == 21 && bomb > 0) {
				player.getBehaviour(Transform).x = y1 * 50;
				player.getBehaviour(Transform).y = x1 * 50;
				stone1.getBehaviour(Transform).x = 1000;
				stone1.getBehaviour(Transform).y = 1000;
				//arr[x1][y1] = 3;
				arr[x][y] = 1;
				bomb--;
			} else if (arr[x1][y1] == 22 && key > 0) {
				player.getBehaviour(Transform).x = y1 * 50;
				player.getBehaviour(Transform).y = x1 * 50;
				//men1.getBehaviour(Transform).x = 1000;
				//men1.getBehaviour(Transform).y = 1000;
				arr[x1][y1] = 3;
				arr[x][y] = 1;
				key--;
			} else if (arr[x1][y1] == 51) {
				if (floor >= 0 && floor < allMaps.length - 1) {
					floor++;
					arr = allMaps[floor];
				}
			} else if (arr[x1][y1] == 52) {
				if (floor >= 1 && floor < allMaps.length) {
					floor--;
					arr = allMaps[floor];
				}
			} else if (arr[x1][y1] > 40 && arr[x1][y1] < 50 && hp > 0) {
				// var shanghai = arr[x1][y1] % 40;
				// hp = hp - shanghai * 10;
				hp = hp - 110;
				if (hp < 0) {
					arr[x][y] = 99;
					alert("You're dead！Game Over!");
				} else {
					player.getBehaviour(Transform).x = y1 * 50;
					player.getBehaviour(Transform).y = x1 * 50;
					arr[x1][y1] = 3;
					arr[x][y] = 1;
				}
			} else if (arr[x1][y1] > 60 && arr[x1][y1] < 70) {
				if (arr[x1][y1] == 61) {
					gjili = gjili + 10;
					weapon1.getBehaviour(Transform).x = 1000;
					weapon1.getBehaviour(Transform).y = 1000;
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
					bomb1.getBehaviour(Transform).x = 2000;
					bomb1.getBehaviour(Transform).y = 2000;
					bomb++;
				} else if (arr[x1][y1] == 68) {
					key++;
				}
				player.getBehaviour(Transform).x = y1 * 50;
				player.getBehaviour(Transform).y = x1 * 50;
				arr[x1][y1] = 3;
				arr[x][y] = 1;
			}


		}

		document.onkeydown = function (event) {
			var e = event || window.event || arguments.callee.caller.arguments[0];
			if (e && e.keyCode == 38) {
				//if (peoplex > 0) {
				playerMove(peoplex, peopley, peoplex - 1, peopley);
				if (arr[peoplex - 1][peopley] != 0 && arr[peoplex - 1][peopley] != 9 && arr[peoplex - 1][peopley] != 21 && arr[peoplex - 1][peopley] != 22) {
					peoplex = peoplex - 1;

				} else if (arr[peoplex - 1][peopley] == 21 && bomb > 0) {
					peoplex = peoplex - 1;
				} else if (arr[peoplex - 1][peopley] == 22 && key > 0) {
					peoplex = peoplex - 1;
				}
				console.log(bomb);
				console.log(gjili);
				//}
			} else if (e && e.keyCode == 37) {
				playerMove(peoplex, peopley, peoplex, peopley - 1);
				if (arr[peoplex][peopley - 1] != 0 && arr[peoplex][peopley - 1] != 9 && arr[peoplex][peopley - 1] != 21 && arr[peoplex][peopley - 1] != 22) {
					peopley = peopley - 1;
				} else if (arr[peoplex][peopley - 1] == 21 && bomb > 0) {
					peopley = peopley - 1;
				} else if (arr[peoplex][peopley - 1] == 22 && key > 0) {
					peopley = peopley - 1;
				}
			}
			if (e && e.keyCode == 40) {
				playerMove(peoplex, peopley, peoplex + 1, peopley);
				if (arr[peoplex + 1][peopley] != 0 && arr[peoplex + 1][peopley] != 9 && arr[peoplex + 1][peopley] != 21 && arr[peoplex + 1][peopley] != 22) {
					peoplex = peoplex + 1;
				} else if (arr[peoplex + 1][peopley] == 21 && bomb > 0) {
					peoplex = peoplex + 1;
				} else if (arr[peoplex + 1][peopley] == 22 && key > 0) {
					peoplex = peoplex + 1;
				}
			} else if (e && e.keyCode == 39) {
				playerMove(peoplex, peopley, peoplex, peopley + 1);
				if (arr[peoplex][peopley + 1] != 0 && arr[peoplex][peopley + 1] != 9 && arr[peoplex][peopley + 1] != 21 && arr[peoplex][peopley + 1] != 2) {
					peopley = peopley + 1;
				} else if (arr[peoplex][peopley + 1] == 21 && bomb > 0) {
					peopley = peopley + 1;
				} else if (arr[peoplex][peopley + 1] == 22 && key > 0) {
					peopley = peopley + 1;
				}
			}
			const HPText = core.getObjectById("HPText");
			HPText.getBehaviour(TextRenderer2).text = "生命值：" + hp;
			const AttackTest = core.getObjectById("AttackText");
			AttackTest.getBehaviour(TextRenderer2).text = "攻击力：" + gjili;
			const KeyTest = core.getObjectById("KeyText");
			KeyTest.getBehaviour(TextRenderer2).text = "钥匙数：" + key;
			const BombTest = core.getObjectById("BombText");
			BombTest.getBehaviour(TextRenderer2).text = "炸弹数：" + bomb;
			// const restart = core.getObjectById("restart");
			// restart.onclick = function () {
			// 	location.href += "?reload=true";
			// }
		};
	}

	onUpdate() {
	}
}


core.registerBehaviourClass(KeyContainerBehaviour)
core.registerBehaviourClass(TextRenderer2)










// class PlayerManager extends Behaviour {

//     warrior;

//     music = new AudioSystem();
//     video = new VideoSystem();

//     onStart() {

//         //示例1
//         this.warrior = core.getObjectById('image');
//         new Trigger(this.warrior, this.warrior);

//         //示例2
//         const map = new GameMapDesigner();
//         const isMapSet = map.setMap(["warrior", "monster", "tool", "wall"],
//             [1, 2, 3, 4],
//             ["../images/main***.png",
//                 "../images/main***.png",
//                 "../images/main***.png",
//                 "../images/main***.png"]);
//         if (isMapSet) {
//             console.log("获取到的指定角色图像为: " + map.getMap("tool"));

//             const walls = [];
//             const wallImagesNeeded = 34;
//             const wallSrc = map.getMap["wall"];
//             for (let i = 0; i < wallImagesNeeded; i++) {
//                 walls.push(wallSrc);
//             }
//         }

//         //示例3
//         this.music.audioPath = "./medias/bgMusic.mp3";
//         this.music.playAudio(false);
//         console.log("is audio ended? " + this.music.isAudioEnded());

//         //示例6
//         // this.video.videoPath = "./medias/sample_video.mp4";
//         // this.video.playVideo(false);
//         // console.log("is video ended? " + this.video.isVideoEnded());
//     }

//     onUpdate() {
//         //示例0
//         if (this.warrior.getBehaviour(Transform).x < 100) {
//             this.warrior.getBehaviour(Transform).x += 1;
//         }

//         //示例4
//         this.interaction();

//     }

// core.registerBehaviourClass(PlayerManager);
