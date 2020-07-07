class ThirdBehaviour extends Behaviour {
    constructor() {
        super(...arguments);
        this.currentTime = 0;
    }
    onStart() {
        var allMaps = [
            //1为路 0为墙 21石堆 22为门 3为人物 4x为怪物 5x为楼梯 6x为增益道具 67炸弹 68钥匙
            [
                [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
                [9, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 9],
                [9, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 9],
                [9, 0, 0, 0, 0, 0, 1, 43, 43, 1, 0, 0, 0, 0, 0, 9],
                [9, 0, 0, 0, 0, 0, 1, 43, 43, 1, 0, 0, 0, 0, 0, 9],
                [9, 0, 0, 0, 0, 0, 1, 43, 43, 1, 0, 0, 0, 0, 0, 9],
                [9, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 9],
                [9, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 9],
                [9, 0, 0, 0, 0, 1, 1, 42, 42, 1, 1, 0, 0, 0, 0, 9],
                [9, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 9],
                [9, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 9],
                [9, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 9],
                [9, 0, 0, 0, 0, 0, 0, 41, 41, 0, 0, 0, 0, 0, 0, 9],
                [9, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 9],
                [9, 3, 1, 22, 22, 21, 1, 1, 1, 1, 0, 0, 0, 0, 0, 9],
                [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            ]
        ];
        var charactorPosX = 0;
        var charactorPosY = 0;
        var floor = 0;
        let bombs = getPlayerData("bombs");
        let keys = getPlayerData("keys");
        var passed = 0;
        console.log("%%%%%%%%% " + getPlayerData("life"));
        // var hp = 100;
        // var attackability = 10;
        // var defendability = 10;
        let hp = getPlayerData("life");
        let attackability = getPlayerData("attackability");
        let defendability = getPlayerData("defendability");
        var arr = allMaps[0];
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[i].length; j++) {
                if (arr[i][j] == 22) {
                    const door1 = core.getObjectById("door1");
                    door1.getBehaviour(Transform).x = 150 + 215;
                    door1.getBehaviour(Transform).y = 700 - 40;
                    const door2 = core.getObjectById("door2");
                    door2.getBehaviour(Transform).x = 200 + 215;
                    door2.getBehaviour(Transform).y = 700 - 40;
                }
                else if (arr[i][j] == 21) {
                    const stone1 = core.getObjectById("stone1");
                    stone1.getBehaviour(Transform).x = 250 + 215;
                    stone1.getBehaviour(Transform).y = 700 - 40;
                }
                else if (40 <= arr[i][j] && arr[i][j] < 50) {
                    if (arr[i][j] == 41) {
                        const guaiwu11 = core.getObjectById("guaiwu11");
                        guaiwu11.getBehaviour(Transform).x = 350 + 215;
                        guaiwu11.getBehaviour(Transform).y = 600 - 40;
                        const guaiwu12 = core.getObjectById("guaiwu12");
                        guaiwu12.getBehaviour(Transform).x = 400 + 215;
                        guaiwu12.getBehaviour(Transform).y = 600 - 40;
                    }
                    else if (arr[i][j] == 42) {
                        const guaiwu21 = core.getObjectById("guaiwu21");
                        guaiwu21.getBehaviour(Transform).x = 350 + 215;
                        guaiwu21.getBehaviour(Transform).y = 350 - 40;
                        const guaiwu22 = core.getObjectById("guaiwu22");
                        guaiwu22.getBehaviour(Transform).x = 400 + 215;
                        guaiwu22.getBehaviour(Transform).y = 350 - 40;
                        const guaiwu23 = core.getObjectById("guaiwu23");
                        guaiwu23.getBehaviour(Transform).x = 350 + 215;
                        guaiwu23.getBehaviour(Transform).y = 400 - 40;
                        const guaiwu24 = core.getObjectById("guaiwu24");
                        guaiwu24.getBehaviour(Transform).x = 400 + 215;
                        guaiwu24.getBehaviour(Transform).y = 400 - 40;
                    }
                    else if (arr[i][j] == 43) {
                        const coffin1 = core.getObjectById("coffin1");
                        coffin1.getBehaviour(Transform).x = 350 + 215;
                        coffin1.getBehaviour(Transform).y = 150 - 40;
                        const coffin2 = core.getObjectById("coffin2");
                        coffin2.getBehaviour(Transform).x = 400 + 215;
                        coffin2.getBehaviour(Transform).y = 150 - 40;
                        const coffin3 = core.getObjectById("coffin3");
                        coffin3.getBehaviour(Transform).x = 350 + 215;
                        coffin3.getBehaviour(Transform).y = 200 - 40;
                        const coffin4 = core.getObjectById("coffin4");
                        coffin4.getBehaviour(Transform).x = 400 + 215;
                        coffin4.getBehaviour(Transform).y = 200 - 40;
                        const coffin5 = core.getObjectById("coffin5");
                        coffin5.getBehaviour(Transform).x = 350 + 215;
                        coffin5.getBehaviour(Transform).y = 250 - 40;
                        const coffin6 = core.getObjectById("coffin6");
                        coffin6.getBehaviour(Transform).x = 400 + 215;
                        coffin6.getBehaviour(Transform).y = 250 - 40;
                    }
                }
                else if (arr[i][j] == 3) {
                    charactorPosX = i;
                    charactorPosY = j;
                    const player = core.getObjectById("player");
                    player.getBehaviour(Transform).x = j * 50 + 215;
                    player.getBehaviour(Transform).y = i * 50 - 40;
                }
                else if (60 <= arr[i][j] && arr[i][j] < 70) {
                }
                else if (arr[i][j] == 99) {
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
                    };
                    die.appendChild(agin);
                    document.onkeydown = function (event) {
                    };
                }
            }
        }
        //1为路 0为墙 2x为门 3为人物 4x为怪物 5x为楼梯 6x为增益道具
        function playerMove(x, y, x1, y1) {
            const player = core.getObjectById("player");
            const door1 = core.getObjectById("door1");
            const door2 = core.getObjectById("door2");
            const stone1 = core.getObjectById("stone1");
            const guaiwu11 = core.getObjectById("guaiwu11");
            const guaiwu12 = core.getObjectById("guaiwu12");
            const guaiwu21 = core.getObjectById("guaiwu21");
            const guaiwu22 = core.getObjectById("guaiwu22");
            const guaiwu23 = core.getObjectById("guaiwu23");
            const guaiwu24 = core.getObjectById("guaiwu24");
            const coffin1 = core.getObjectById("coffin1");
            const coffin2 = core.getObjectById("coffin2");
            const coffin3 = core.getObjectById("coffin3");
            const coffin4 = core.getObjectById("coffin4");
            const coffin5 = core.getObjectById("coffin5");
            const coffin6 = core.getObjectById("coffin6");
            player.getBehaviour(Transform).x = y * 50 + 215;
            player.getBehaviour(Transform).y = x * 50 - 40;
            if (arr[x1][y1] == 1) {
                player.getBehaviour(Transform).x = y1 * 50 + 215;
                player.getBehaviour(Transform).y = x1 * 50 - 40;
                arr[x1][y1] = 3;
                arr[x][y] = 1;
            }
            else if (arr[x1][y1] == 21 && bombs > 0) {
                player.getBehaviour(Transform).x = y1 * 50 + 215;
                player.getBehaviour(Transform).y = x1 * 50 - 40;
                stone1.getBehaviour(Transform).x = 1000;
                stone1.getBehaviour(Transform).y = 1000;
                arr[x1][y1] = 3;
                arr[x][y] = 1;
                bombs--;
            }
            else if (arr[x1][y1] == 22 && keys > 0 && x1 == 14 && y1 == 3) {
                player.getBehaviour(Transform).x = y1 * 50 + 215;
                player.getBehaviour(Transform).y = x1 * 50 - 40;
                door1.getBehaviour(Transform).x = 1000;
                door1.getBehaviour(Transform).y = 1000;
                arr[x1][y1] = 3;
                arr[x][y] = 1;
                keys--;
            }
            else if (arr[x1][y1] == 22 && keys > 0 && x1 == 14 && y1 == 4) {
                player.getBehaviour(Transform).x = y1 * 50 + 215;
                player.getBehaviour(Transform).y = x1 * 50 - 40;
                door2.getBehaviour(Transform).x = 1000;
                door2.getBehaviour(Transform).y = 1000;
                arr[x1][y1] = 3;
                arr[x][y] = 1;
                keys--;
            }
            else if (arr[x1][y1] == 51) {
                // if (floor >= 0 && floor < allMaps.length - 1) {
                // 	floor++;
                // 	arr = allMaps[floor];
                // }
                updatePlayerData("life", hp);
                updatePlayerData("keys", keys);
                updatePlayerData("bombs", bombs);
                updatePlayerData("attackability", attackability);
                updatePlayerData("defendability", defendability);
                window.location.href = "./secondPage.html";
            }
            else if (arr[x1][y1] == 52) {
                if (floor >= 1 && floor < allMaps.length) {
                    floor--;
                    arr = allMaps[floor];
                }
                //window.location.href= "./index.html"
            }
            else if (arr[x1][y1] == 22 && keys > 0 && x1 == 14 && y1 == 4) {
                player.getBehaviour(Transform).x = y1 * 50 + 215;
                player.getBehaviour(Transform).y = x1 * 50 - 40;
                door2.getBehaviour(Transform).x = 1000;
                door2.getBehaviour(Transform).y = 1000;
                arr[x1][y1] = 3;
                arr[x][y] = 1;
                keys--;
            }
            else if (arr[x1][y1] > 40 && arr[x1][y1] < 50 && hp > 0) {
                if (hp < 0) {
                    arr[x][y] = 99;
                    alert("You're dead！Game Over!");
                }
                else if (hp > 0 && x1 == 12 && y1 == 7) {
                    if (attackability >= 10) {
                        hp = hp - 20;
                        if (hp < 0) {
                            alert("You're dead！Game Over!");
                        }
                        else {
                            guaiwu11.getBehaviour(Transform).x = 2000;
                            guaiwu11.getBehaviour(Transform).y = 2000;
                            player.getBehaviour(Transform).x = y1 * 50 + 215;
                            player.getBehaviour(Transform).y = x1 * 50 - 40;
                            arr[x1][y1] = 1;
                            arr[x][y] = 1;
                        }
                    }
                    else {
                        alert("Your attackability is lower than 10!");
                    }
                }
                else if (hp > 0 && x1 == 12 && y1 == 8) {
                    if (attackability >= 10) {
                        hp = hp - 20;
                        if (hp < 0) {
                            alert("You're dead！Game Over!");
                        }
                        else {
                            guaiwu12.getBehaviour(Transform).x = 2000;
                            guaiwu12.getBehaviour(Transform).y = 2000;
                            player.getBehaviour(Transform).x = y1 * 50 + 215;
                            player.getBehaviour(Transform).y = x1 * 50 - 40;
                            arr[x1][y1] = 3;
                            arr[x][y] = 1;
                        }
                    }
                    else {
                        alert("Your attackability is lower than 10!");
                    }
                }
                else if ((hp > 0) && ((x1 == 3 && y1 == 7) || (x1 == 4 && y1 == 7) || (x1 == 5 && y1 == 7) || (x1 == 3 && y1 == 8) || (x1 == 4 && y1 == 8) || (x1 == 5 && y1 == 8))) {
                    if (attackability >= 70) {
                        hp = hp - 70;
                        if (hp < 0) {
                            alert("You're dead！Game Over!");
                        }
                        else {
                            coffin1.getBehaviour(Transform).x = 2000;
                            coffin1.getBehaviour(Transform).y = 2000;
                            coffin2.getBehaviour(Transform).x = 2000;
                            coffin2.getBehaviour(Transform).y = 2000;
                            coffin3.getBehaviour(Transform).x = 2000;
                            coffin3.getBehaviour(Transform).y = 2000;
                            coffin4.getBehaviour(Transform).x = 2000;
                            coffin4.getBehaviour(Transform).y = 2000;
                            coffin5.getBehaviour(Transform).x = 2000;
                            coffin5.getBehaviour(Transform).y = 2000;
                            coffin6.getBehaviour(Transform).x = 2000;
                            coffin6.getBehaviour(Transform).y = 2000;
                            player.getBehaviour(Transform).x = y1 * 50 + 215;
                            player.getBehaviour(Transform).y = x1 * 50 - 40;
                            arr[x1][y1] = 3;
                            arr[7][3] = 1;
                            arr[7][4] = 1;
                            arr[7][5] = 1;
                            arr[8][3] = 1;
                            arr[8][4] = 1;
                            arr[8][5] = 1;
                            arr[x][y] = 1;
                        }
                    }
                    else {
                        alert("Your attackability is lower than 70!");
                    }
                }
                else if ((hp > 0) && ((x1 == 7 && y1 == 7) || (x1 == 7 && y1 == 8) || (x1 == 8 && y1 == 7) || (x1 == 8 && y1 == 8))) {
                    if (attackability >= 20) {
                        hp = hp - 50;
                        if (hp < 0) {
                            alert("You're dead！Game Over!");
                        }
                        else {
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
                            arr[8][8] = 1;
                            arr[x][y] = 1;
                        }
                    }
                    else {
                        alert("Your attackability is lower than 20!");
                    }
                }
            }
            else if (arr[x1][y1] > 60 && arr[x1][y1] < 70) {
                if (arr[x1][y1] == 62) {
                    defendability = defendability + 10;
                }
                else if (arr[x1][y1] == 63) {
                    attackability = attackability + 10;
                }
                else if (arr[x1][y1] == 64) {
                    attackability = attackability + 15;
                    defendability = defendability + 15;
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
                playerMove(charactorPosX, charactorPosY, charactorPosX - 1, charactorPosY);
                if (arr[charactorPosX - 1][charactorPosY] != 0 && arr[charactorPosX - 1][charactorPosY] != 9 &&
                    arr[charactorPosX - 1][charactorPosY] != 21 && arr[charactorPosX - 1][charactorPosY] != 22 &&
                    arr[charactorPosX - 1][charactorPosY] != 41 && arr[charactorPosX - 1][charactorPosY] != 42 &&
                    arr[charactorPosX - 1][charactorPosY] != 43) {
                    charactorPosX = charactorPosX - 1;
                }
                else if (arr[charactorPosX - 1][charactorPosY] == 21 && bombs > 0) {
                    charactorPosX = charactorPosX - 1;
                }
                else if (arr[charactorPosX - 1][charactorPosY] == 22 && keys > 0) {
                    charactorPosX = charactorPosX - 1;
                }
                else if (arr[charactorPosX - 1][charactorPosY] == 41 && attackability >= 10) {
                    charactorPosX = charactorPosX - 1;
                }
                else if (arr[charactorPosX - 1][charactorPosY] == 42 && attackability >= 20) {
                    charactorPosX = charactorPosX - 1;
                }
                else if (arr[charactorPosX - 1][charactorPosY] == 43 && attackability >= 70) {
                    charactorPosX = charactorPosX - 1;
                }
                //}
            }
            else if (e && e.keyCode == 37) {
                playerMove(charactorPosX, charactorPosY, charactorPosX, charactorPosY - 1);
                if (arr[charactorPosX][charactorPosY - 1] != 0 && arr[charactorPosX][charactorPosY - 1] != 9 &&
                    arr[charactorPosX][charactorPosY - 1] != 21 && arr[charactorPosX][charactorPosY - 1] != 22 &&
                    arr[charactorPosX][charactorPosY - 1] != 41 && arr[charactorPosX][charactorPosY - 1] != 42 &&
                    arr[charactorPosX][charactorPosY - 1] != 43) {
                    charactorPosY = charactorPosY - 1;
                }
                else if (arr[charactorPosX][charactorPosY - 1] == 21 && bombs > 0) {
                    charactorPosY = charactorPosY - 1;
                }
                else if (arr[charactorPosX][charactorPosY - 1] == 22 && keys > 0) {
                    charactorPosY = charactorPosY - 1;
                }
                else if (arr[charactorPosX][charactorPosY - 1] == 41 && attackability >= 10) {
                    charactorPosY = charactorPosY - 1;
                }
                else if (arr[charactorPosX][charactorPosY - 1] == 42 && attackability >= 20) {
                    charactorPosY = charactorPosY - 1;
                }
                else if (arr[charactorPosX][charactorPosY - 1] == 43 && attackability >= 70) {
                    charactorPosY = charactorPosY - 1;
                }
            }
            if (e && e.keyCode == 40) {
                playerMove(charactorPosX, charactorPosY, charactorPosX + 1, charactorPosY);
                if (arr[charactorPosX + 1][charactorPosY] != 0 && arr[charactorPosX + 1][charactorPosY] != 9 &&
                    arr[charactorPosX + 1][charactorPosY] != 21 && arr[charactorPosX + 1][charactorPosY] != 22 &&
                    arr[charactorPosX + 1][charactorPosY] != 41 && arr[charactorPosX + 1][charactorPosY] != 42 &&
                    arr[charactorPosX + 1][charactorPosY] != 43) {
                    charactorPosX = charactorPosX + 1;
                }
                else if (arr[charactorPosX + 1][charactorPosY] == 21 && bombs > 0) {
                    charactorPosX = charactorPosX + 1;
                }
                else if (arr[charactorPosX + 1][charactorPosY] == 22 && keys > 0) {
                    charactorPosX = charactorPosX + 1;
                }
                else if (arr[charactorPosX + 1][charactorPosY] == 41 && attackability >= 10) {
                    charactorPosX = charactorPosX + 1;
                }
                else if (arr[charactorPosX + 1][charactorPosY] == 42 && attackability >= 20) {
                    charactorPosX = charactorPosX + 1;
                }
                else if (arr[charactorPosX + 1][charactorPosY] == 43 && attackability >= 70) {
                    charactorPosX = charactorPosX + 1;
                }
            }
            else if (e && e.keyCode == 39) {
                playerMove(charactorPosX, charactorPosY, charactorPosX, charactorPosY + 1);
                if (arr[charactorPosX][charactorPosY + 1] != 0 && arr[charactorPosX][charactorPosY + 1] != 9 &&
                    arr[charactorPosX][charactorPosY + 1] != 21 && arr[charactorPosX][charactorPosY + 1] != 22 &&
                    arr[charactorPosX][charactorPosY + 1] != 41 && arr[charactorPosX][charactorPosY + 1] != 42 &&
                    arr[charactorPosX][charactorPosY + 1] != 43) {
                    charactorPosY = charactorPosY + 1;
                }
                else if (arr[charactorPosX][charactorPosY + 1] == 21 && bombs > 0) {
                    charactorPosY = charactorPosY + 1;
                }
                else if (arr[charactorPosX][charactorPosY + 1] == 22 && keys > 0) {
                    charactorPosY = charactorPosY + 1;
                }
                else if (arr[charactorPosX][charactorPosY + 1] == 41 && attackability >= 10) {
                    charactorPosY = charactorPosY + 1;
                }
                else if (arr[charactorPosX][charactorPosY + 1] == 42 && attackability >= 20) {
                    charactorPosY = charactorPosY + 1;
                }
                else if (arr[charactorPosX][charactorPosY + 1] == 43 && attackability >= 70) {
                    charactorPosY = charactorPosY + 1;
                }
            }
            const HPText = core.getObjectById("HPText");
            HPText.getBehaviour(TextRenderer).text = "生命值：" + hp;
            const AttackTest = core.getObjectById("AttackText");
            AttackTest.getBehaviour(TextRenderer).text = "攻击力：" + attackability;
            const KeyTest = core.getObjectById("KeyText");
            KeyTest.getBehaviour(TextRenderer).text = "钥匙数：" + keys;
            const BombTest = core.getObjectById("BombText");
            BombTest.getBehaviour(TextRenderer).text = "炸弹数：" + bombs;
            // const restart = core.getObjectById("restart");
            // restart.onclick = function () {
            // location.href += "?reload=true";
            // }
        };
    }
    onUpdate() {
    }
    onDestroy() {
        clearPlayerData();
    }
}
core.registerBehaviourClass(ThirdBehaviour);
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
