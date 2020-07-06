class BasicBehaviour extends Behaviour {

	private currentTime = 0;

	onStart() {

		var allMaps = [
            //1为路 0为墙 21石堆 22为门 3为人物 4x为怪物 5x为楼梯 6x为增益道具 67炸弹 68钥匙
			[
				[9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
                [9, 67, 1, 1, 1, 68, 0, 61, 1, 1, 65, 0, 65, 61, 65, 9],
                [9, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 61, 65, 61, 9],
                [9, 1, 1, 1, 1, 1, 0, 1, 41, 1, 1, 21, 65, 61, 65, 9],
                [9, 0, 0, 41, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 9],
                [9, 61, 0, 41, 0, 65, 0, 1, 1, 1, 0, 41, 41, 0, 67, 9],
                [9, 68, 0, 1, 22, 41, 0, 1, 1, 1, 0, 1, 1, 1, 9],
                [9, 1, 0, 1, 0, 0, 0, 42, 1, 1, 0, 1, 1, 1, 1, 9],
                [9, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 9],
                [9, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 68, 1, 9],
                [9, 1, 0, 1, 42, 1, 22, 1, 1, 1, 1, 1, 1, 0, 41, 9],
                [9, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 9],
                [9, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 9],
                [9, 1, 0, 1, 0, 0, 1, 22, 1, 1, 0, 0, 0, 1, 1, 9],
                [9, 1, 1, 1, 0, 67, 1,0, 51, 1, 21, 1, 1, 1, 3, 9],
                [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
			]
		];

		var peoplex = 0;
		var peopley = 0;

		var floor = 0;
		var bomb = 3;
		var key = 6;

		var hp = 100;
		var gjili = 10;
		var fangyu = 10;

		var arr = allMaps[0];
		for (var i = 0; i < arr.length; i++) {
			for (var j = 0; j < arr[i].length; j++) {
				if (arr[i][j] == 1) {


				} else if (50 <= arr[i][j] && arr[i][j] < 60) {
					if (arr[i][j] == 51) {
						const loti1 = core.getObjectById("loti1");
						loti1.getBehaviour(Transform).x = j * 50 + 215;
						loti1.getBehaviour(Transform).y = i * 50 - 40;
					} else if (arr[i][j] == 52) {
						// const loti2 = core.getObjectById("loti2");
						// loti2.getBehaviour(Transform).x = j * 50;
						// loti2.getBehaviour(Transform).y = i * 50;
					}
				} else if (arr[i][j] == 21) {
					const stone1 = core.getObjectById("stone1");
					stone1.getBehaviour(Transform).x = 500 + 215;
					stone1.getBehaviour(Transform).y = 700 - 40;
					const stone2 = core.getObjectById("stone2");
					stone2.getBehaviour(Transform).x = 550 + 215;
					stone2.getBehaviour(Transform).y = 150 - 40;
				} else if (arr[i][j] == 22) {
					const door1 = core.getObjectById("door1");
					door1.getBehaviour(Transform).x = 200 + 215;
					door1.getBehaviour(Transform).y = 300 - 40;
					const door2 = core.getObjectById("door2");
					door2.getBehaviour(Transform).x = 300 + 215;
					door2.getBehaviour(Transform).y = 500 - 40;
					const door3 = core.getObjectById("door3");
					door3.getBehaviour(Transform).x = 350 + 215;
					door3.getBehaviour(Transform).y = 650 - 40;
				} else if (40 <= arr[i][j] && arr[i][j] < 50) {
					if (arr[i][j] == 41) {
						const guaiwu11 = core.getObjectById("guaiwu11");
						guaiwu11.getBehaviour(Transform).x = 150 + 215;
						guaiwu11.getBehaviour(Transform).y = 250 - 40;
						const guaiwu111 = core.getObjectById("guaiwu111");
						guaiwu111.getBehaviour(Transform).x = 150 + 215;
						guaiwu111.getBehaviour(Transform).y = 200 - 40;
						const guaiwu12 = core.getObjectById("guaiwu12");
						guaiwu12.getBehaviour(Transform).x = 250 + 215;
						guaiwu12.getBehaviour(Transform).y = 300 - 40;
						const guaiwu13 = core.getObjectById("guaiwu13");
						guaiwu13.getBehaviour(Transform).x = 400 + 215;
						guaiwu13.getBehaviour(Transform).y = 150 - 40;
						console.log(guaiwu13.getBehaviour(Transform).x)
						const guaiwu14 = core.getObjectById("guaiwu14");
						guaiwu14.getBehaviour(Transform).x = 550 + 215;
						guaiwu14.getBehaviour(Transform).y = 250 - 40;
						const guaiwu15 = core.getObjectById("guaiwu15");
						guaiwu15.getBehaviour(Transform).x = 600 + 215;
						guaiwu15.getBehaviour(Transform).y = 250 - 40;
						const guaiwu16 = core.getObjectById("guaiwu16");
						guaiwu16.getBehaviour(Transform).x = 700 + 215;
						guaiwu16.getBehaviour(Transform).y = 500 - 40;
					} else if (arr[i][j] == 42) {
						const guaiwu21 = core.getObjectById("guaiwu21");
						guaiwu21.getBehaviour(Transform).x = 150 + 215;
						guaiwu21.getBehaviour(Transform).y = 450 - 40;
						const guaiwu22 = core.getObjectById("guaiwu22");
						guaiwu22.getBehaviour(Transform).x = 200 + 215;
						guaiwu22.getBehaviour(Transform).y = 450 - 40;
						const guaiwu23 = core.getObjectById("guaiwu23");
						guaiwu23.getBehaviour(Transform).x = 150 + 215;
						guaiwu23.getBehaviour(Transform).y = 500 - 40;
						const guaiwu24 = core.getObjectById("guaiwu24");
						guaiwu24.getBehaviour(Transform).x = 200 + 215;
						guaiwu24.getBehaviour(Transform).y = 500 - 40;
						const guaiwu25 = core.getObjectById("guaiwu25");
						guaiwu25.getBehaviour(Transform).x = 350 + 215;
						guaiwu25.getBehaviour(Transform).y = 300 - 40;
						const guaiwu26 = core.getObjectById("guaiwu26");
						guaiwu26.getBehaviour(Transform).x = 400 + 215;
						guaiwu26.getBehaviour(Transform).y = 300 - 40;
						const guaiwu27 = core.getObjectById("guaiwu27");
						guaiwu27.getBehaviour(Transform).x = 350 + 215;
						guaiwu27.getBehaviour(Transform).y = 350 - 40;
						const guaiwu28 = core.getObjectById("guaiwu28");
						guaiwu28.getBehaviour(Transform).x = 400 + 215;
						guaiwu28.getBehaviour(Transform).y = 350 - 40;
					} 
				} else if (arr[i][j] == 3) {
					peoplex = i;
					peopley = j;
					const player = core.getObjectById("player");
					player.getBehaviour(Transform).x = j * 50 + 215;
					player.getBehaviour(Transform).y = i * 50 - 40;
					console.log(peoplex);
					console.log(peopley);
				} else if (60 <= arr[i][j] && arr[i][j] < 70) {
					if (arr[i][j] == 61) {
						const weapon1 = core.getObjectById("weapon1");
						weapon1.getBehaviour(Transform).x = 50 + 215;
						weapon1.getBehaviour(Transform).y = 250 - 40;
						const weapon2 = core.getObjectById("weapon2");
						weapon2.getBehaviour(Transform).x = 350 + 215;
						weapon2.getBehaviour(Transform).y = 50 - 40;
						const weapon3 = core.getObjectById("weapon3");
						weapon3.getBehaviour(Transform).x = 600 + 215;
						weapon3.getBehaviour(Transform).y = 100 - 40;
						const weapon4 = core.getObjectById("weapon4");
						weapon4.getBehaviour(Transform).x = 650 + 215;
						weapon4.getBehaviour(Transform).y = 50 - 40;
						const weapon5 = core.getObjectById("weapon5");
						weapon5.getBehaviour(Transform).x = 650 + 215;
						weapon5.getBehaviour(Transform).y = 150 - 40;
						const weapon6 = core.getObjectById("weapon6");
						weapon6.getBehaviour(Transform).x = 700 + 215;
						weapon6.getBehaviour(Transform).y = 100 - 40;
					}  else if (arr[i][j] == 65) {
						const ys1 = core.getObjectById("ys1");
						ys1.getBehaviour(Transform).x = 250 + 215;
						ys1.getBehaviour(Transform).y = 250 - 40;
						const ys2 = core.getObjectById("ys2");
						ys2.getBehaviour(Transform).x = 500 + 215;
						ys2.getBehaviour(Transform).y = 50 - 40;
						const ys3 = core.getObjectById("ys3");
						ys3.getBehaviour(Transform).x = 600 + 215;
						ys3.getBehaviour(Transform).y = 50 - 40;
						const ys4 = core.getObjectById("ys4");
						ys4.getBehaviour(Transform).x = 600 + 215;
						ys4.getBehaviour(Transform).y = 150 - 40;
						const ys5 = core.getObjectById("ys5");
						ys5.getBehaviour(Transform).x = 650 + 215;
						ys5.getBehaviour(Transform).y = 100 - 40;
						const ys6 = core.getObjectById("ys6");
						ys6.getBehaviour(Transform).x = 700 + 215;
						ys6.getBehaviour(Transform).y = 50 - 40;
						const ys7 = core.getObjectById("ys7");
						ys7.getBehaviour(Transform).x = 700 + 215;
						ys7.getBehaviour(Transform).y = 150 - 40;
					} else if (arr[i][j] == 67) {
						const bomb1 = core.getObjectById("bomb1");
						bomb1.getBehaviour(Transform).x = 50 + 215;
						bomb1.getBehaviour(Transform).y = 50 - 40;
						const bomb2 = core.getObjectById("bomb2");
						bomb2.getBehaviour(Transform).x = 250 + 215;
						bomb2.getBehaviour(Transform).y = 700 - 40;
						const bomb3 = core.getObjectById("bomb3");
						bomb3.getBehaviour(Transform).x = 700 + 215;
						bomb3.getBehaviour(Transform).y = 250 - 40;
					} else if (arr[i][j] == 68) {
						const key = core.getObjectById("key1");
						key.getBehaviour(Transform).x = 50 + 215;
						key.getBehaviour(Transform).y = 300 - 40;
						const key2 = core.getObjectById("key2");
						key2.getBehaviour(Transform).x = 250 + 215;
						key2.getBehaviour(Transform).y = 50 - 40;
						const key3 = core.getObjectById("key3");
						key3.getBehaviour(Transform).x = 650 + 215;
						key3.getBehaviour(Transform).y = 450 - 40;
					}
				} else if (arr[i][j] == 99) {
					const lu2 = core.getObjectById("lu");
					lu2.getBehaviour(Transform).x = j * 50 + 215;
					lu2.getBehaviour(Transform).y = i * 50 - 40;
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
			const weapon2 = core.getObjectById("weapon2");
			const weapon3 = core.getObjectById("weapon3");
			const weapon4 = core.getObjectById("weapon4");
			const weapon5 = core.getObjectById("weapon5");
			const weapon6 = core.getObjectById("weapon6");
			const door1 = core.getObjectById("door1");
			const stone1 = core.getObjectById("stone1");
			const stone2 = core.getObjectById("stone2");
			const bomb1 = core.getObjectById("bomb1");
			const key1 = core.getObjectById("key1");
			const key2 = core.getObjectById("key2");
			const key3 = core.getObjectById("key3");
			const guaiwu11 = core.getObjectById("guaiwu11");
			const guaiwu111 = core.getObjectById("guaiwu111");
			const guaiwu12 = core.getObjectById("guaiwu12");
			const guaiwu13 = core.getObjectById("guaiwu13");
			const guaiwu14 = core.getObjectById("guaiwu14");
			const guaiwu15 = core.getObjectById("guaiwu15");
			const guaiwu16 = core.getObjectById("guaiwu16");
			const guaiwu21 = core.getObjectById("guaiwu21");
			const guaiwu22 = core.getObjectById("guaiwu22");
			const guaiwu23 = core.getObjectById("guaiwu23");
			const guaiwu24 = core.getObjectById("guaiwu24");
			const guaiwu25 = core.getObjectById("guaiwu25");
			const guaiwu26 = core.getObjectById("guaiwu26");
			const guaiwu27 = core.getObjectById("guaiwu27");
			const guaiwu28 = core.getObjectById("guaiwu28");
			const ys1 = core.getObjectById("ys1");
			const ys2 = core.getObjectById("ys2");
			const ys3 = core.getObjectById("ys3");
			const ys4 = core.getObjectById("ys4");
			const ys5 = core.getObjectById("ys5");
			const ys6 = core.getObjectById("ys6");
			const ys7 = core.getObjectById("ys7");

			player.getBehaviour(Transform).x = y * 50 + 215;
			player.getBehaviour(Transform).y = x * 50 - 40;
			if (arr[x1][y1] == 1) {
				player.getBehaviour(Transform).x = y1 * 50 + 215;
				player.getBehaviour(Transform).y = x1 * 50 - 40;
				arr[x1][y1] = 3;
				arr[x][y] = 1;
			} else if (arr[x1][y1] == 21 && bomb > 0 && x1 ==14 && y1 ==10) {
				player.getBehaviour(Transform).x = y1 * 50 + 215;
				player.getBehaviour(Transform).y = x1 * 50 - 40;
				stone1.getBehaviour(Transform).x = 1000;
				stone1.getBehaviour(Transform).y = 1000;
				arr[x1][y1] = 3;
				arr[x][y] = 1;
				bomb--;
			} else if (arr[x1][y1] == 21 && bomb > 0 && x1 ==3 && y1 ==11) {
				player.getBehaviour(Transform).x = y1 * 50 + 215;
				player.getBehaviour(Transform).y = x1 * 50 - 40;
				stone2.getBehaviour(Transform).x = 1000;
				stone2.getBehaviour(Transform).y = 1000;
				arr[x1][y1] = 3;
				arr[x][y] = 1;
				bomb--;
			}else if (arr[x1][y1] == 22 && key > 0) {
				player.getBehaviour(Transform).x = y1 * 50 + 215;
				player.getBehaviour(Transform).y = x1 * 50 -40;
				//men1.getBehaviour(Transform).x = 1000;
				//men1.getBehaviour(Transform).y = 1000;
				arr[x1][y1] = 3;
				arr[x][y] = 1;
				key--;
			} else if (arr[x1][y1] == 51) {
				// if (floor >= 0 && floor < allMaps.length - 1) {
				// 	floor++;
				// 	arr = allMaps[floor];
				// }
				window.location.href= "./thirdPage.html"
			} else if (arr[x1][y1] == 52) {
				if (floor >= 1 && floor < allMaps.length) {
					floor--;
					arr = allMaps[floor];
				}
				//window.location.href= "./index.html"
			} else if (arr[x1][y1] > 40 && arr[x1][y1] < 50 && hp > 0) {
				// var shanghai = arr[x1][y1] % 40;
				// hp = hp - shanghai * 10;
				//hp = hp - 10;
				if (hp < 0) {
					arr[x][y] = 99;
					alert("You're dead！Game Over!");
				} else if(hp > 0 && x1 == 5 && y1 == 3){
					hp = hp - 10;
					if (hp < 0) {
						alert("You're dead！Game Over!");
					}else{
					guaiwu11.getBehaviour(Transform).x = 2000;
					guaiwu11.getBehaviour(Transform).y = 2000;
					player.getBehaviour(Transform).x = y1 * 50 + 215;
					player.getBehaviour(Transform).y = x1 * 50 - 40;
					arr[x1][y1] = 3;
					arr[x][y] = 1;}
				}else if(hp > 0 && x1 == 4 && y1 == 3){
					hp = hp - 10;
					if (hp < 0) {
						alert("You're dead！Game Over!");
					}else{
					guaiwu111.getBehaviour(Transform).x = 2000;
					guaiwu111.getBehaviour(Transform).y = 2000;
					player.getBehaviour(Transform).x = y1 * 50 + 215;
					player.getBehaviour(Transform).y = x1 * 50 - 40;
					arr[x1][y1] = 3;
					arr[x][y] = 1;}
				}else if(hp > 0 && x1 == 6 && y1 == 5){
					hp = hp - 10;
					if (hp < 0) {
						alert("You're dead！Game Over!");
					}else{
					guaiwu12.getBehaviour(Transform).x = 2000;
					guaiwu12.getBehaviour(Transform).y = 2000;
					player.getBehaviour(Transform).x = y1 * 50 + 215;
					player.getBehaviour(Transform).y = x1 * 50 - 40;
					arr[x1][y1] = 3;
					arr[x][y] = 1;}
				}else if(hp > 0 && x1 == 3 && y1 == 8){
					hp = hp - 10;
					if (hp < 0) {
						alert("You're dead！Game Over!");
					}else{
					guaiwu13.getBehaviour(Transform).x = 2000;
					guaiwu13.getBehaviour(Transform).y = 2000;
					player.getBehaviour(Transform).x = y1 * 50 + 215;
					player.getBehaviour(Transform).y = x1 * 50 - 40;
					arr[x1][y1] = 3;
					arr[x][y] = 1;}
				}else if(hp > 0 && x1 == 5 && y1 == 11){
					hp = hp - 10;
					if (hp < 0) {
						alert("You're dead！Game Over!");
					}else{
					guaiwu14.getBehaviour(Transform).x = 2000;
					guaiwu14.getBehaviour(Transform).y = 2000;
					player.getBehaviour(Transform).x = y1 * 50 + 215;
					player.getBehaviour(Transform).y = x1 * 50 - 40;
					arr[x1][y1] = 3;
					arr[x][y] = 1;}
				}else if(hp > 0 && x1 == 5 && y1 == 12){
					hp = hp - 10;
					if (hp < 0) {
						alert("You're dead！Game Over!");
					}else{
					guaiwu15.getBehaviour(Transform).x = 2000;
					guaiwu15.getBehaviour(Transform).y = 2000;
					player.getBehaviour(Transform).x = y1 * 50 + 215;
					player.getBehaviour(Transform).y = x1 * 50 - 40;
					arr[x1][y1] = 3;
					arr[x][y] = 1;}
				}else if(hp > 0 && x1 == 10 && y1 == 14){
					hp = hp - 10;
					if (hp < 0) {
						alert("You're dead！Game Over!");
					}else{
					guaiwu16.getBehaviour(Transform).x = 2000;
					guaiwu16.getBehaviour(Transform).y = 2000;
					player.getBehaviour(Transform).x = y1 * 50 + 215;
					player.getBehaviour(Transform).y = x1 * 50 - 40;
					arr[x1][y1] = 3;
					arr[x][y] = 1;}
				}else if((hp > 0) &&  ((x1 == 9 && y1 == 3) || (x1 == 9 && y1 == 4) || (x1 == 10 && y1 == 3) || (x1 == 10 && y1 == 4))){
					hp = hp - 50;
					if (hp < 0) {
						alert("You're dead！Game Over!");
					}else{
					guaiwu21.getBehaviour(Transform).x = 2000;
					guaiwu21.getBehaviour(Transform).y = 2000;
					guaiwu22.getBehaviour(Transform).x = 2000;
					guaiwu22.getBehaviour(Transform).y = 2000;
					guaiwu23.getBehaviour(Transform).x = 2000;
					guaiwu23.getBehaviour(Transform).y = 2000;
					guaiwu24.getBehaviour(Transform).x = 2000;
					guaiwu24.getBehaviour(Transform).y = 2000;
					player.getBehaviour(Transform).x = y1 * 50 + 215;
					player.getBehaviour(Transform).y = x1 * 50 - 40;
					arr[x1][y1] = 3;
					arr[x][y] = 1;
					arr[3][9] = 1; arr[4][9] = 1; arr[3][10] = 1; arr[4][10] = 1;}
				// }else if(hp > 0 && x1 == 9 && y1 == 4){
				// 	hp = hp - 10;
				// 	guaiwu22.getBehaviour(Transform).x = 2000;
				// 	guaiwu22.getBehaviour(Transform).y = 2000;
				// 	player.getBehaviour(Transform).x = y1 * 50 + 215;
				// 	player.getBehaviour(Transform).y = x1 * 50 - 40;
				// 	arr[x1][y1] = 3;
				// 	arr[x][y] = 1;
				// }else if(hp > 0 && x1 == 10 && y1 == 3){
				// 	hp = hp - 10;
				// 	guaiwu23.getBehaviour(Transform).x = 2000;
				// 	guaiwu23.getBehaviour(Transform).y = 2000;
				// 	player.getBehaviour(Transform).x = y1 * 50 + 215;
				// 	player.getBehaviour(Transform).y = x1 * 50 - 40;
				// 	arr[x1][y1] = 3;
				// 	arr[x][y] = 1;
				// }else if(hp > 0 && x1 == 10 && y1 == 4){
				// 	hp = hp - 10;
				// 	guaiwu24.getBehaviour(Transform).x = 2000;
				// 	guaiwu24.getBehaviour(Transform).y = 2000;
				// 	player.getBehaviour(Transform).x = y1 * 50 + 215;
				// 	player.getBehaviour(Transform).y = x1 * 50 - 40;
				// 	arr[x1][y1] = 3;
				// 	arr[x][y] = 1;
				}else if((hp > 0) &&  ((x1 == 6 && y1 == 7) || (x1 == 6 && y1 == 8) || (x1 == 7 && y1 == 7) || (x1 == 7 && y1 == 8))){
					hp = hp - 50;
					if (hp < 0) {
						alert("You're dead！Game Over!");
					}else{
					guaiwu25.getBehaviour(Transform).x = 2000;
					guaiwu25.getBehaviour(Transform).y = 2000;
					guaiwu26.getBehaviour(Transform).x = 2000;
					guaiwu26.getBehaviour(Transform).y = 2000;
					guaiwu27.getBehaviour(Transform).x = 2000;
					guaiwu27.getBehaviour(Transform).y = 2000;
					guaiwu28.getBehaviour(Transform).x = 2000;
					guaiwu28.getBehaviour(Transform).y = 2000;
					player.getBehaviour(Transform).x = y1 * 50 + 215;
					player.getBehaviour(Transform).y = x1 * 50 - 40;
					arr[x1][y1] = 3;
					arr[x][y] = 1;}
				}
				// else if(hp > 0 && x1 == 6 && y1 == 8){
				// 	hp = hp - 10;
				// 	guaiwu26.getBehaviour(Transform).x = 2000;
				// 	guaiwu26.getBehaviour(Transform).y = 2000;
				// 	player.getBehaviour(Transform).x = y1 * 50 + 215;
				// 	player.getBehaviour(Transform).y = x1 * 50 - 40;
				// 	arr[x1][y1] = 3;
				// 	arr[x][y] = 1;
				// }else if(hp > 0 && x1 == 7 && y1 == 7){
				// 	hp = hp - 10;
				// 	guaiwu27.getBehaviour(Transform).x = 2000;
				// 	guaiwu27.getBehaviour(Transform).y = 2000;
				// 	player.getBehaviour(Transform).x = y1 * 50 + 215;
				// 	player.getBehaviour(Transform).y = x1 * 50 - 40;
				// 	arr[x1][y1] = 3;
				// 	arr[x][y] = 1;
				// }else if(hp > 0 && x1 == 7 && y1 == 8){
				// 	hp = hp - 10;
				// 	guaiwu28.getBehaviour(Transform).x = 2000;
				// 	guaiwu28.getBehaviour(Transform).y = 2000;
				// 	player.getBehaviour(Transform).x = y1 * 50 + 215;
				// 	player.getBehaviour(Transform).y = x1 * 50 - 40;
				// 	arr[x1][y1] = 3;
				// 	arr[x][y] = 1;
				// }
			} else if (arr[x1][y1] > 60 && arr[x1][y1] < 70) {
				if (arr[x1][y1] == 61 && x1 == 5 && y1 == 1) {
					gjili = gjili + 10;
					weapon1.getBehaviour(Transform).x = 1000;
					weapon1.getBehaviour(Transform).y = 1000;
				} else if (arr[x1][y1] == 61 && x1 == 1 && y1 == 7) {
					gjili = gjili + 10;
					weapon2.getBehaviour(Transform).x = 1000;
					weapon2.getBehaviour(Transform).y = 1000;
				}else if (arr[x1][y1] == 61 && x1 == 2 && y1 == 12) {
					gjili = gjili + 10;
					weapon3.getBehaviour(Transform).x = 1000;
					weapon3.getBehaviour(Transform).y = 1000;
				}else if (arr[x1][y1] == 61 && x1 == 1 && y1 == 13) {
					gjili = gjili + 10;
					weapon4.getBehaviour(Transform).x = 1000;
					weapon4.getBehaviour(Transform).y = 1000;
				}else if (arr[x1][y1] == 61 && x1 == 3 && y1 == 13) {
					gjili = gjili + 10;
					weapon5.getBehaviour(Transform).x = 1000;
					weapon5.getBehaviour(Transform).y = 1000;
				}else if (arr[x1][y1] == 61 && x1 == 2 && y1 == 14) {
					gjili = gjili + 10;
					weapon6.getBehaviour(Transform).x = 1000;
					weapon6.getBehaviour(Transform).y = 1000;
				}else if (arr[x1][y1] == 61 && x1 == 2 && y1 == 13) {
					gjili = gjili + 10;
					weapon2.getBehaviour(Transform).x = 1000;
					weapon2.getBehaviour(Transform).y = 1000;
				}else if (arr[x1][y1] == 62) {
					fangyu = fangyu + 10;
				} else if (arr[x1][y1] == 63) {
					gjili = gjili + 10;
				} else if (arr[x1][y1] == 64) {
					gjili = gjili + 15;
					fangyu = fangyu + 15;
				} else if (arr[x1][y1] == 65 && x1 == 5 && y1 == 5) {
					hp = hp + 100;
					ys1.getBehaviour(Transform).x = 2000;
					ys1.getBehaviour(Transform).y = 2000;
				}else if (arr[x1][y1] == 65 && x1 == 1 && y1 == 10) {
					hp = hp + 100;
					ys2.getBehaviour(Transform).x = 2000;
					ys2.getBehaviour(Transform).y = 2000;
				}else if (arr[x1][y1] == 65 && x1 == 1 && y1 == 12) {
					hp = hp + 100;
					ys3.getBehaviour(Transform).x = 2000;
					ys3.getBehaviour(Transform).y = 2000;
				}else if (arr[x1][y1] == 65 && x1 == 3 && y1 == 12) {
					hp = hp + 100;
					ys4.getBehaviour(Transform).x = 2000;
					ys4.getBehaviour(Transform).y = 2000;
				}else if (arr[x1][y1] == 65 && x1 == 2 && y1 == 13) {
					hp = hp + 100;
					ys5.getBehaviour(Transform).x = 2000;
					ys5.getBehaviour(Transform).y = 2000;
				}else if (arr[x1][y1] == 65 && x1 == 1 && y1 == 14) {
					hp = hp + 100;
					ys6.getBehaviour(Transform).x = 2000;
					ys6.getBehaviour(Transform).y = 2000;
				}
				else if (arr[x1][y1] == 65 && x1 == 3 && y1 == 14) {
					hp = hp + 100;
					ys7.getBehaviour(Transform).x = 2000;
					ys7.getBehaviour(Transform).y = 2000;
				}else if (arr[x1][y1] == 66) {
					hp = hp + 50;
				} else if (arr[x1][y1] == 67) {
					bomb1.getBehaviour(Transform).x = 2000;
					bomb1.getBehaviour(Transform).y = 2000;
					bomb++;
				} else if (arr[x1][y1] == 68 && x1 == 6 && y1 == 1) {
					key++;
					key1.getBehaviour(Transform).x = 2000;
					key1.getBehaviour(Transform).y = 2000;
				}else if (arr[x1][y1] == 68 && x1 == 1 && y1 == 5) {
					key++;
					key2.getBehaviour(Transform).x = 2000;
					key2.getBehaviour(Transform).y = 2000;
				}else if (arr[x1][y1] == 68 && x1 == 9 && y1 == 13) {
					key++;
					key3.getBehaviour(Transform).x = 2000;
					key3.getBehaviour(Transform).y = 2000;
				}
				player.getBehaviour(Transform).x = y1 * 50 + 215;
				player.getBehaviour(Transform).y = x1 * 50 - 40;
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
			HPText.getBehaviour(TextRenderer).text = "生命值：" + hp;
			const AttackTest = core.getObjectById("AttackText");
			AttackTest.getBehaviour(TextRenderer).text = "攻击力：" + gjili;
			const KeyTest = core.getObjectById("KeyText");
			KeyTest.getBehaviour(TextRenderer).text = "钥匙数：" + key;
			const BombTest = core.getObjectById("BombText");
			BombTest.getBehaviour(TextRenderer).text = "炸弹数：" + bomb;
			// const restart = core.getObjectById("restart");
			// restart.onclick = function () {
			// location.href += "?reload=true";
			// }
		};
	}

	onUpdate() {
	}
}

core.registerBehaviourClass(BasicBehaviour)










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
