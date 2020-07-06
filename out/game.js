class KeyContainerBehaviour extends Behaviour {
    onStart() {
        var allMaps = [
            [
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
                [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            ],
        ];
        var chractorPosX = 0;
        var charactorPosY = 0;
        var floor = 0;
        var bombs = 3;
        var keys = 6;
        var hp = 100;
        var attackability = 10;
        var defandability = 10;
        var mapArr = allMaps[0];
        for (var i = 0; i < mapArr.length; i++) {
            for (var j = 0; j < mapArr[i].length; j++) {
                if (mapArr[i][j] == 1) {
                    //pass
                }
                else if (50 <= mapArr[i][j] && mapArr[i][j] < 60) {
                    if (mapArr[i][j] == 51) {
                        const loti1 = core.getObjectById("loti1");
                        loti1.getBehaviour(Transform).x = j * 50 + 215;
                        loti1.getBehaviour(Transform).y = i * 50 - 40;
                    }
                    else if (mapArr[i][j] == 52) {
                        //pass
                    }
                }
                else if (mapArr[i][j] == 21) {
                    const stone1 = core.getObjectById("stone1");
                    stone1.getBehaviour(Transform).x = 715;
                    stone1.getBehaviour(Transform).y = 10;
                }
                else if (mapArr[i][j] == 22) {
                    const door1 = core.getObjectById("door1");
                    door1.getBehaviour(Transform).x = 865;
                    door1.getBehaviour(Transform).y = 60;
                    const door2 = core.getObjectById("door2");
                    door2.getBehaviour(Transform).x = 815;
                    door2.getBehaviour(Transform).y = 260;
                    const door3 = core.getObjectById("door3");
                    door3.getBehaviour(Transform).x = 765;
                    door3.getBehaviour(Transform).y = 360;
                    const door4 = core.getObjectById("door4");
                    door4.getBehaviour(Transform).x = 515;
                    door4.getBehaviour(Transform).y = 510;
                }
                else if (40 <= mapArr[i][j] && mapArr[i][j] < 50) {
                    if (mapArr[i][j] == 41) {
                        const monster11 = core.getObjectById("guaiwu11");
                        monster11.getBehaviour(Transform).x = 550 + 215;
                        monster11.getBehaviour(Transform).y = 200 - 40;
                        const monster12 = core.getObjectById("guaiwu12");
                        monster12.getBehaviour(Transform).x = 665;
                        monster12.getBehaviour(Transform).y = 160;
                        const monster13 = core.getObjectById("guaiwu13");
                        monster13.getBehaviour(Transform).x = 665;
                        monster13.getBehaviour(Transform).y = 260;
                        console.log(monster13.getBehaviour(Transform).x);
                        const monster14 = core.getObjectById("guaiwu14");
                        monster14.getBehaviour(Transform).x = 565;
                        monster14.getBehaviour(Transform).y = 110;
                    }
                    else if (mapArr[i][j] == 42) {
                        const guaiwu21 = core.getObjectById("guaiwu21");
                        guaiwu21.getBehaviour(Transform).x = 765;
                        guaiwu21.getBehaviour(Transform).y = 210;
                        const guaiwu22 = core.getObjectById("guaiwu22");
                        guaiwu22.getBehaviour(Transform).x = 865;
                        guaiwu22.getBehaviour(Transform).y = 260;
                        const guaiwu23 = core.getObjectById("guaiwu23");
                        guaiwu23.getBehaviour(Transform).x = 915;
                        guaiwu23.getBehaviour(Transform).y = 360;
                    } // else if (arr[i][j] == 43) {
                    // 	const guaiwu3 = core.getObjectById("guaiwu3");
                    // 	guaiwu3.getBehaviour(Transform).x = j * 50;
                    // 	guaiwu3.getBehaviour(Transform).y = i * 50;
                    // } else if (arr[i][j] == 44) {
                    // 	const guaiwu4 = core.getObjectById("guaiwu4");
                    // 	guaiwu4.getBehaviour(Transform).x = j * 50;
                    // 	guaiwu4.getBehaviour(Transform).y = i * 50;
                    // } else if (arr[i][j] == 45) {
                    // 	const guaiwu5 = core.getObjectById("guaiwu5");
                    // 	guaiwu5.getBehaviour(Transform).x = j * 50;
                    // 	guaiwu5.getBehaviour(Transform).y = i * 50;
                    // } else if (arr[i][j] == 46) {
                    // 	const guaiwu6 = core.getObjectById("guaiwu6");
                    // 	guaiwu6.getBehaviour(Transform).x = j * 50;
                    // 	guaiwu6.getBehaviour(Transform).y = i * 50;
                    // } else if (arr[i][j] == 47) {
                    // 	const guaiwu7 = core.getObjectById("guaiwu7");
                    // 	guaiwu7.getBehaviour(Transform).x = j * 50;
                    // 	guaiwu7.getBehaviour(Transform).y = i * 50;
                    // } else if (arr[i][j] == 48) {
                    // 	const guaiwu8 = core.getObjectById("guaiwu8");
                    // 	guaiwu8.getBehaviour(Transform).x = j * 50;
                    // 	guaiwu8.getBehaviour(Transform).y = i * 50;
                    // } else if (arr[i][j] == 49) {
                    // 	const guaiwu9 = core.getObjectById("guaiwu9");
                    // 	guaiwu9.getBehaviour(Transform).x = j * 50;
                    // 	guaiwu9.getBehaviour(Transform).y = i * 50;
                    // }
                }
                else if (mapArr[i][j] == 3) {
                    chractorPosX = i;
                    charactorPosY = j;
                    const player = core.getObjectById("player");
                    player.getBehaviour(Transform).x = j * 50 + 215;
                    player.getBehaviour(Transform).y = i * 50 - 40;
                    console.log(chractorPosX);
                    console.log(charactorPosY);
                }
                else if (60 <= mapArr[i][j] && mapArr[i][j] < 70) {
                    if (mapArr[i][j] == 61) {
                        const weapon1 = core.getObjectById("weapon1");
                        weapon1.getBehaviour(Transform).x = j * 50 + 215;
                        weapon1.getBehaviour(Transform).y = i * 50 - 40;
                    }
                    // else if (arr[i][j] == 62) {
                    // 	const daoju2 = core.getObjectById("daoju2");
                    // 	daoju2.getBehaviour(Transform).x = j * 50;
                    // 	daoju2.getBehaviour(Transform).y = i * 50;
                    // } else if (arr[i][j] == 63) {
                    // 	const daoju3 = core.getObjectById("daoju3");
                    // 	daoju3.getBehaviour(Transform).x = j * 50;
                    // 	daoju3.getBehaviour(Transform).y = i * 50;
                    // } else if (arr[i][j] == 64) {
                    // 	const daoju4 = core.getObjectById("daoju4");
                    // 	daoju4.getBehaviour(Transform).x = j * 50;
                    // 	daoju4.getBehaviour(Transform).y = i * 50;
                    // } 
                    else if (mapArr[i][j] == 65) {
                        const ys11 = core.getObjectById("ys11");
                        const ys12 = core.getObjectById("ys12");
                        ys11.getBehaviour(Transform).x = 400 + 215;
                        ys11.getBehaviour(Transform).y = 150 - 40;
                        ys12.getBehaviour(Transform).x = 700 + 215;
                        ys12.getBehaviour(Transform).y = 350 - 40;
                    }
                    // else if (arr[i][j] == 66) {
                    // 	const ys2 = core.getObjectById("ys2");
                    // 	ys2.getBehaviour(Transform).x = j * 50;
                    // 	ys2.getBehaviour(Transform).y = i * 50;
                    // } 
                    else if (mapArr[i][j] == 67) {
                        const bomb1 = core.getObjectById("bomb1");
                        bomb1.getBehaviour(Transform).x = j * 50 + 215;
                        bomb1.getBehaviour(Transform).y = i * 50 - 40;
                    }
                    else if (mapArr[i][j] == 68) {
                        const key = core.getObjectById("key1");
                        key.getBehaviour(Transform).x = 350 + 215;
                        key.getBehaviour(Transform).y = 50 - 40;
                        const key2 = core.getObjectById("key2");
                        key2.getBehaviour(Transform).x = 400 + 215;
                        key2.getBehaviour(Transform).y = 50 - 40;
                        const key3 = core.getObjectById("key3");
                        key3.getBehaviour(Transform).x = 650 + 215;
                        key3.getBehaviour(Transform).y = 200 - 40;
                        const key4 = core.getObjectById("key4");
                        key4.getBehaviour(Transform).x = 400 + 215;
                        key4.getBehaviour(Transform).y = 600 - 40;
                    }
                }
                else if (mapArr[i][j] == 99) {
                    const road2 = core.getObjectById("lu");
                    road2.getBehaviour(Transform).x = j * 50 + 215;
                    road2.getBehaviour(Transform).y = i * 50 - 40;
                    var die = document.createElement('div');
                    die.className = 'die';
                    die.innerHTML = '你死了！';
                    var replay = document.createElement('div');
                    replay.innerHTML = '再来一次';
                    replay.className = 'agin';
                    replay.onclick = function () {
                        location.href += "?reload=true";
                    };
                    die.appendChild(replay);
                }
            }
        }
        function playerMove(x, y, x1, y1) {
            const player = core.getObjectById("player");
            const weapon1 = core.getObjectById("weapon1");
            const door1 = core.getObjectById("door1");
            const stone1 = core.getObjectById("stone1");
            const bomb1 = core.getObjectById("bomb1");
            const key1 = core.getObjectById("key1");
            const key2 = core.getObjectById("key2");
            const key3 = core.getObjectById("key3");
            const key4 = core.getObjectById("key4");
            const guaiwu11 = core.getObjectById("guaiwu11");
            const guaiwu12 = core.getObjectById("guaiwu12");
            const monster3 = core.getObjectById("guaiwu13");
            const monster4 = core.getObjectById("guaiwu14");
            const monster21 = core.getObjectById("guaiwu21");
            const monster22 = core.getObjectById("guaiwu22");
            const monster23 = core.getObjectById("guaiwu23");
            const ys11 = core.getObjectById("ys11");
            const ys12 = core.getObjectById("ys12");
            player.getBehaviour(Transform).x = y * 50 + 215;
            player.getBehaviour(Transform).y = x * 50 - 40;
            if (mapArr[x1][y1] == 1) {
                player.getBehaviour(Transform).x = y1 * 50 + 215;
                player.getBehaviour(Transform).y = x1 * 50 - 40;
                mapArr[x1][y1] = 3;
                mapArr[x][y] = 1;
            }
            else if (mapArr[x1][y1] == 21 && bombs > 0) {
                player.getBehaviour(Transform).x = y1 * 50 + 215;
                player.getBehaviour(Transform).y = x1 * 50 - 40;
                stone1.getBehaviour(Transform).x = 1000;
                stone1.getBehaviour(Transform).y = 1000;
                mapArr[x1][y1] = 3;
                mapArr[x][y] = 1;
                bombs--;
            }
            else if (mapArr[x1][y1] == 22 && keys > 0) {
                player.getBehaviour(Transform).x = y1 * 50 + 215;
                player.getBehaviour(Transform).y = x1 * 50 - 40;
                //men1.getBehaviour(Transform).x = 1000;
                //men1.getBehaviour(Transform).y = 1000;
                mapArr[x1][y1] = 3;
                mapArr[x][y] = 1;
                keys--;
            }
            else if (mapArr[x1][y1] == 51) {
                // if (floor >= 0 && floor < allMaps.length - 1) {
                // 	floor++;
                // 	arr = allMaps[floor];
                // }
                window.location.href = "./secondPage.html";
            }
            else if (mapArr[x1][y1] == 52) {
                if (floor >= 1 && floor < Maps.map.length) {
                    floor--;
                    mapArr = Maps.map[floor];
                }
                //window.location.href= "./index.html"
            }
            else if (mapArr[x1][y1] > 40 && mapArr[x1][y1] < 50) {
                // var shanghai = arr[x1][y1] % 40;
                // hp = hp - shanghai * 10;
                //hp = hp - 10;
                if (hp < 0) {
                    mapArr[x][y] = 99;
                    alert("You're dead！Game Over!");
                }
                else if (hp > 0 && x1 == 4 && y1 == 11) {
                    hp = hp - 10;
                    guaiwu11.getBehaviour(Transform).x = 2000;
                    guaiwu11.getBehaviour(Transform).y = 2000;
                    player.getBehaviour(Transform).x = y1 * 50 + 215;
                    player.getBehaviour(Transform).y = x1 * 50 - 40;
                    mapArr[x1][y1] = 3;
                    mapArr[x][y] = 1;
                }
                else if (hp > 0 && x1 == 4 && y1 == 9) {
                    hp = hp - 10;
                    guaiwu12.getBehaviour(Transform).x = 2000;
                    guaiwu12.getBehaviour(Transform).y = 2000;
                    player.getBehaviour(Transform).x = y1 * 50 + 215;
                    player.getBehaviour(Transform).y = x1 * 50 - 40;
                    mapArr[x1][y1] = 3;
                    mapArr[x][y] = 1;
                }
                else if (hp > 0 && x1 == 6 && y1 == 8) {
                    hp = hp - 10;
                    monster3.getBehaviour(Transform).x = 2000;
                    monster3.getBehaviour(Transform).y = 2000;
                    player.getBehaviour(Transform).x = y1 * 50 + 215;
                    player.getBehaviour(Transform).y = x1 * 50 - 40;
                    mapArr[x1][y1] = 3;
                    mapArr[x][y] = 1;
                }
                else if (hp > 0 && x1 == 3 && y1 == 7) {
                    hp = hp - 10;
                    monster4.getBehaviour(Transform).x = 2000;
                    monster4.getBehaviour(Transform).y = 2000;
                    player.getBehaviour(Transform).x = y1 * 50 + 215;
                    player.getBehaviour(Transform).y = x1 * 50 - 40;
                    mapArr[x1][y1] = 3;
                    mapArr[x][y] = 1;
                }
                else if (hp > 0 && x1 == 5 && y1 == 11) {
                    hp = hp - 10;
                    monster21.getBehaviour(Transform).x = 2000;
                    monster21.getBehaviour(Transform).y = 2000;
                    player.getBehaviour(Transform).x = y1 * 50 + 215;
                    player.getBehaviour(Transform).y = x1 * 50 - 40;
                    mapArr[x1][y1] = 3;
                    mapArr[x][y] = 1;
                }
                else if (hp > 0 && x1 == 6 && y1 == 13) {
                    hp = hp - 10;
                    monster22.getBehaviour(Transform).x = 2000;
                    monster22.getBehaviour(Transform).y = 2000;
                    player.getBehaviour(Transform).x = y1 * 50 + 215;
                    player.getBehaviour(Transform).y = x1 * 50 - 40;
                    mapArr[x1][y1] = 3;
                    mapArr[x][y] = 1;
                }
                else if (hp > 0 && x1 == 8 && y1 == 14) {
                    hp = hp - 10;
                    monster23.getBehaviour(Transform).x = 2000;
                    monster23.getBehaviour(Transform).y = 2000;
                    player.getBehaviour(Transform).x = y1 * 50 + 215;
                    player.getBehaviour(Transform).y = x1 * 50 - 40;
                    mapArr[x1][y1] = 3;
                    mapArr[x][y] = 1;
                }
            }
            else if (mapArr[x1][y1] > 60 && mapArr[x1][y1] < 70) {
                if (mapArr[x1][y1] == 61) {
                    attackability = attackability + 10;
                    weapon1.getBehaviour(Transform).x = 1000;
                    weapon1.getBehaviour(Transform).y = 1000;
                }
                else if (mapArr[x1][y1] == 62) {
                    defandability = defandability + 10;
                }
                else if (mapArr[x1][y1] == 63) {
                    attackability = attackability + 10;
                }
                else if (mapArr[x1][y1] == 64) {
                    attackability = attackability + 15;
                    defandability = defandability + 15;
                }
                else if (mapArr[x1][y1] == 65 && x1 == 3 && y1 == 8) {
                    hp = hp + 100;
                    ys11.getBehaviour(Transform).x = 2000;
                    ys11.getBehaviour(Transform).y = 2000;
                }
                else if (mapArr[x1][y1] == 65 && x1 == 7 && y1 == 14) {
                    hp = hp + 100;
                    ys12.getBehaviour(Transform).x = 2000;
                    ys12.getBehaviour(Transform).y = 2000;
                }
                else if (mapArr[x1][y1] == 66) {
                    hp = hp + 50;
                }
                else if (mapArr[x1][y1] == 67) {
                    bomb1.getBehaviour(Transform).x = 2000;
                    bomb1.getBehaviour(Transform).y = 2000;
                    bombs++;
                }
                else if (mapArr[x1][y1] == 68 && x1 == 1 && y1 == 7) {
                    keys++;
                    key1.getBehaviour(Transform).x = 2000;
                    key1.getBehaviour(Transform).y = 2000;
                }
                else if (mapArr[x1][y1] == 68 && x1 == 1 && y1 == 8) {
                    keys++;
                    key2.getBehaviour(Transform).x = 2000;
                    key2.getBehaviour(Transform).y = 2000;
                }
                else if (mapArr[x1][y1] == 68 && x1 == 4 && y1 == 13) {
                    keys++;
                    key3.getBehaviour(Transform).x = 2000;
                    key3.getBehaviour(Transform).y = 2000;
                }
                else if (mapArr[x1][y1] == 68 && x1 == 12 && y1 == 8) {
                    keys++;
                    key4.getBehaviour(Transform).x = 2000;
                    key4.getBehaviour(Transform).y = 2000;
                }
                player.getBehaviour(Transform).x = y1 * 50 + 215;
                player.getBehaviour(Transform).y = x1 * 50 - 40;
                mapArr[x1][y1] = 3;
                mapArr[x][y] = 1;
            }
        }
        document.onkeydown = function (event) {
            var e = event || window.event || arguments.callee.caller.arguments[0];
            if (e && e.keyCode == 38) {
                //if (peoplex > 0) {
                playerMove(chractorPosX, charactorPosY, chractorPosX - 1, charactorPosY);
                if (mapArr[chractorPosX - 1][charactorPosY] != 0 && mapArr[chractorPosX - 1][charactorPosY] != 9 && mapArr[chractorPosX - 1][charactorPosY] != 21 && mapArr[chractorPosX - 1][charactorPosY] != 22) {
                    chractorPosX = chractorPosX - 1;
                }
                else if (mapArr[chractorPosX - 1][charactorPosY] == 21 && bombs > 0) {
                    chractorPosX = chractorPosX - 1;
                }
                else if (mapArr[chractorPosX - 1][charactorPosY] == 22 && keys > 0) {
                    chractorPosX = chractorPosX - 1;
                }
                console.log(bombs);
                console.log(attackability);
                //}
            }
            else if (e && e.keyCode == 37) {
                playerMove(chractorPosX, charactorPosY, chractorPosX, charactorPosY - 1);
                if (mapArr[chractorPosX][charactorPosY - 1] != 0 && mapArr[chractorPosX][charactorPosY - 1] != 9 && mapArr[chractorPosX][charactorPosY - 1] != 21 && mapArr[chractorPosX][charactorPosY - 1] != 22) {
                    charactorPosY = charactorPosY - 1;
                }
                else if (mapArr[chractorPosX][charactorPosY - 1] == 21 && bombs > 0) {
                    charactorPosY = charactorPosY - 1;
                }
                else if (mapArr[chractorPosX][charactorPosY - 1] == 22 && keys > 0) {
                    charactorPosY = charactorPosY - 1;
                }
            }
            if (e && e.keyCode == 40) {
                playerMove(chractorPosX, charactorPosY, chractorPosX + 1, charactorPosY);
                if (mapArr[chractorPosX + 1][charactorPosY] != 0 && mapArr[chractorPosX + 1][charactorPosY] != 9 && mapArr[chractorPosX + 1][charactorPosY] != 21 && mapArr[chractorPosX + 1][charactorPosY] != 22) {
                    chractorPosX = chractorPosX + 1;
                }
                else if (mapArr[chractorPosX + 1][charactorPosY] == 21 && bombs > 0) {
                    chractorPosX = chractorPosX + 1;
                }
                else if (mapArr[chractorPosX + 1][charactorPosY] == 22 && keys > 0) {
                    chractorPosX = chractorPosX + 1;
                }
            }
            else if (e && e.keyCode == 39) {
                playerMove(chractorPosX, charactorPosY, chractorPosX, charactorPosY + 1);
                if (mapArr[chractorPosX][charactorPosY + 1] != 0 && mapArr[chractorPosX][charactorPosY + 1] != 9 && mapArr[chractorPosX][charactorPosY + 1] != 21 && mapArr[chractorPosX][charactorPosY + 1] != 2) {
                    charactorPosY = charactorPosY + 1;
                }
                else if (mapArr[chractorPosX][charactorPosY + 1] == 21 && bombs > 0) {
                    charactorPosY = charactorPosY + 1;
                }
                else if (mapArr[chractorPosX][charactorPosY + 1] == 22 && keys > 0) {
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
        //pass
    }
}
core.registerBehaviourClass(KeyContainerBehaviour);
