class KeyContainerBehaviour extends Behaviour {
    onStart() {
        // FloorController.floorIndex = 1;
        FloorController.isAudioPlaying = true;
        // const deadAudio = new AudioSystem();
        // deadAudio.audioPath = "./music/re-altar.mp3";
        var allMaps = [
            [
                //61为刀 64为祭坛 65为药 67炸弹 68钥匙
                [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
                [9, 1, 1, 1, 1, 0, 64, 68, 68, 1, 21, 1, 1, 0, 51, 9],
                [9, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 22, 1, 9],
                [9, 1, 0, 1, 1, 1, 1, 1, 65, 0, 0, 1, 0, 0, 0, 9],
                [9, 1, 0, 1, 1, 1, 1, 1, 67, 21, 0, 44, 0, 68, 1, 9],
                [9, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 41, 0, 1, 1, 9],
                [9, 1, 0, 1, 1, 1, 42, 1, 1, 1, 1, 1, 22, 1, 1, 9],
                [9, 1, 0, 1, 1, 1, 42, 1, 1, 1, 1, 0, 0, 0, 65, 9],
                [9, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 22, 41, 1, 61, 9],
                [9, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 9],
                [9, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 9],
                [9, 1, 0, 0, 0, 0, 22, 0, 0, 1, 1, 1, 1, 1, 1, 9],
                [9, 1, 1, 1, 1, 1, 1, 41, 68, 0, 1, 1, 1, 1, 1, 9],
                [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 9],
                [9, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 68, 1, 9],
                [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            ],
        ];
        let charactorPosX = 0;
        let charactorPosY = 0;
        let floor = 0;
        let bombs = 0;
        let keys = 0;
        if (getPlayerData("life") != (NaN || null || undefined)
            || getPlayerData("attackability") != (NaN || null || undefined)
            || getPlayerData("defendability") != (NaN || null || undefined)
            || getPlayerData("keys") != (NaN || null || undefined)
            || getPlayerData("bombs") != (NaN || null || undefined)) {
            clearPlayerData();
        }
        console.log("%%%%%%%%% " + getPlayerData("life"));
        let hp = 100;
        let attackability = 10;
        let defendability = 10;
        var passed = 0;
        var mapArr = allMaps[0];
        const deadend = core.getObjectById("deadend");
        deadend.getBehaviour(Transform).x = 2000;
        deadend.getBehaviour(Transform).y = 2000;
        for (var i = 0; i < mapArr.length; i++) {
            for (var j = 0; j < mapArr[i].length; j++) {
                if (mapArr[i][j] == 1) {
                    //pass
                }
                else if (mapArr[i][j] == 51) {
                    const loti1 = core.getObjectById("loti1");
                    loti1.getBehaviour(Transform).x = j * 50 + 215;
                    loti1.getBehaviour(Transform).y = i * 50 - 40;
                }
                else if (mapArr[i][j] == 21) {
                    const stone1 = core.getObjectById("stone1");
                    stone1.getBehaviour(Transform).x = 715;
                    stone1.getBehaviour(Transform).y = 10;
                    const stone2 = core.getObjectById("stone2");
                    stone2.getBehaviour(Transform).x = 450 + 215;
                    stone2.getBehaviour(Transform).y = 200 - 40;
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
                        monster11.getBehaviour(Transform).x = 350 + 215;
                        monster11.getBehaviour(Transform).y = 600 - 40;
                        const monster12 = core.getObjectById("guaiwu12");
                        monster12.getBehaviour(Transform).x = 550 + 215;
                        monster12.getBehaviour(Transform).y = 250 - 40;
                        const monster13 = core.getObjectById("guaiwu13");
                        monster13.getBehaviour(Transform).x = 600 + 215;
                        monster13.getBehaviour(Transform).y = 400 - 40;
                    }
                    else if (mapArr[i][j] == 42) {
                        const guaiwu21 = core.getObjectById("guaiwu21");
                        guaiwu21.getBehaviour(Transform).x = 250 + 215;
                        guaiwu21.getBehaviour(Transform).y = 300 - 40;
                        const guaiwu22 = core.getObjectById("guaiwu22");
                        guaiwu22.getBehaviour(Transform).x = 300 + 215;
                        guaiwu22.getBehaviour(Transform).y = 300 - 40;
                        const guaiwu23 = core.getObjectById("guaiwu23");
                        guaiwu23.getBehaviour(Transform).x = 250 + 215;
                        guaiwu23.getBehaviour(Transform).y = 350 - 40;
                        const guaiwu24 = core.getObjectById("guaiwu24");
                        guaiwu24.getBehaviour(Transform).x = 300 + 215;
                        guaiwu24.getBehaviour(Transform).y = 350 - 40;
                    }
                    else if (mapArr[i][j] == 44) {
                        const trap = core.getObjectById("trap");
                        trap.getBehaviour(Transform).x = j * 50 + 215;
                        trap.getBehaviour(Transform).y = i * 50 - 40;
                    }
                }
                else if (mapArr[i][j] == 3) {
                    charactorPosX = i;
                    charactorPosY = j;
                    const player = core.getObjectById("player");
                    player.getBehaviour(Transform).x = j * 50 + 215;
                    player.getBehaviour(Transform).y = i * 50 - 40;
                }
                else if (60 <= mapArr[i][j] && mapArr[i][j] < 70) {
                    if (mapArr[i][j] == 61) {
                        const weapon1 = core.getObjectById("weapon1");
                        weapon1.getBehaviour(Transform).x = j * 50 + 215;
                        weapon1.getBehaviour(Transform).y = i * 50 - 40;
                    }
                    else if (mapArr[i][j] == 64) {
                        const altar = core.getObjectById("altar1");
                        altar.getBehaviour(Transform).x = j * 50 + 215;
                        altar.getBehaviour(Transform).y = i * 50 - 40;
                        const altar2 = core.getObjectById("altar2");
                        altar2.getBehaviour(Transform).x = 2000;
                        altar2.getBehaviour(Transform).x = 2000;
                    }
                    else if (mapArr[i][j] == 65) {
                        const ys11 = core.getObjectById("ys11");
                        const ys12 = core.getObjectById("ys12");
                        ys11.getBehaviour(Transform).x = 400 + 215;
                        ys11.getBehaviour(Transform).y = 150 - 40;
                        ys12.getBehaviour(Transform).x = 700 + 215;
                        ys12.getBehaviour(Transform).y = 350 - 40;
                    }
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
                        const key5 = core.getObjectById("key5");
                        key5.getBehaviour(Transform).x = 650 + 215;
                        key5.getBehaviour(Transform).y = 700 - 40;
                    }
                }
                else if (mapArr[i][j] == 99) {
                    const road2 = core.getObjectById("lu");
                    road2.getBehaviour(Transform).x = j * 50 + 215;
                    road2.getBehaviour(Transform).y = i * 50 - 40;
                    //var die = document.createElement('div');
                    // die.className = 'die';
                    // die.innerHTML = '你死了！';
                    // var replay = document.createElement('div');
                    // replay.innerHTML = '再来一次';
                    // replay.className = 'agin';
                    // replay.onclick = function () {
                    // 	location.href += "?reload=true";
                    // }
                    // die.appendChild(replay);
                }
            }
        }
        function playerMove(x, y, x1, y1) {
            const player = core.getObjectById("player");
            const weapon1 = core.getObjectById("weapon1");
            const door1 = core.getObjectById("door1");
            const door2 = core.getObjectById("door2");
            const door3 = core.getObjectById("door3");
            const door4 = core.getObjectById("door4");
            const stone1 = core.getObjectById("stone1");
            const stone2 = core.getObjectById("stone2");
            const bomb1 = core.getObjectById("bomb1");
            const key1 = core.getObjectById("key1");
            const key2 = core.getObjectById("key2");
            const key3 = core.getObjectById("key3");
            const key4 = core.getObjectById("key4");
            const key5 = core.getObjectById("key5");
            const monster1 = core.getObjectById("guaiwu11");
            const monster2 = core.getObjectById("guaiwu12");
            const monster3 = core.getObjectById("guaiwu13");
            const monster21 = core.getObjectById("guaiwu21");
            const monster22 = core.getObjectById("guaiwu22");
            const monster23 = core.getObjectById("guaiwu23");
            const monster24 = core.getObjectById("guaiwu24");
            const altar1 = core.getObjectById("altar1");
            const altar2 = core.getObjectById("altar2");
            const trap = core.getObjectById("trap");
            const ys11 = core.getObjectById("ys11");
            const ys12 = core.getObjectById("ys12");
            const deadend = core.getObjectById("deadend");
            player.getBehaviour(Transform).x = y * 50 + 215;
            player.getBehaviour(Transform).y = x * 50 - 40;
            if (mapArr[x1][y1] == 1) {
                player.getBehaviour(Transform).x = y1 * 50 + 215;
                player.getBehaviour(Transform).y = x1 * 50 - 40;
                mapArr[x1][y1] = 3;
                mapArr[x][y] = 1;
            }
            else if (mapArr[x1][y1] == 21 && bombs > 0 && x1 == 1 && y1 == 10) {
                player.getBehaviour(Transform).x = y1 * 50 + 215;
                player.getBehaviour(Transform).y = x1 * 50 - 40;
                stone1.getBehaviour(Transform).x = 1000;
                stone1.getBehaviour(Transform).y = 1000;
                const BoomStoneAudio = new AudioSystem();
                BoomStoneAudio.audioPath = "./music/re-Boom.mp3";
                BoomStoneAudio.playAudio(false);
                mapArr[x1][y1] = 3;
                mapArr[x][y] = 1;
                bombs--;
            }
            else if (mapArr[x1][y1] == 21 && bombs > 0 && x1 == 4 && y1 == 9) {
                player.getBehaviour(Transform).x = y1 * 50 + 215;
                player.getBehaviour(Transform).y = x1 * 50 - 40;
                stone2.getBehaviour(Transform).x = 1000;
                stone2.getBehaviour(Transform).y = 1000;
                const BoomStoneAudio = new AudioSystem();
                BoomStoneAudio.audioPath = "./music/re-Boom.mp3";
                BoomStoneAudio.playAudio(false);
                mapArr[x1][y1] = 3;
                mapArr[x][y] = 1;
                bombs--;
            }
            else if (mapArr[x1][y1] == 22 && keys > 0 && x1 == 2 && y1 == 13) {
                player.getBehaviour(Transform).x = y1 * 50 + 215;
                player.getBehaviour(Transform).y = x1 * 50 - 40;
                door1.getBehaviour(Transform).x = 1000;
                door1.getBehaviour(Transform).y = 1000;
                mapArr[x1][y1] = 3;
                mapArr[x][y] = 1;
                keys--;
            }
            else if (mapArr[x1][y1] == 22 && keys > 0 && x1 == 6 && y1 == 12) {
                player.getBehaviour(Transform).x = y1 * 50 + 215;
                player.getBehaviour(Transform).y = x1 * 50 - 40;
                door2.getBehaviour(Transform).x = 1000;
                door2.getBehaviour(Transform).y = 1000;
                mapArr[x1][y1] = 3;
                mapArr[x][y] = 1;
                keys--;
            }
            else if (mapArr[x1][y1] == 22 && keys > 0 && x1 == 8 && y1 == 11) {
                player.getBehaviour(Transform).x = y1 * 50 + 215;
                player.getBehaviour(Transform).y = x1 * 50 - 40;
                door3.getBehaviour(Transform).x = 1000;
                door3.getBehaviour(Transform).y = 1000;
                mapArr[x1][y1] = 3;
                mapArr[x][y] = 1;
                keys--;
            }
            else if (mapArr[x1][y1] == 22 && keys > 0 && x1 == 11 && y1 == 6) {
                player.getBehaviour(Transform).x = y1 * 50 + 215;
                player.getBehaviour(Transform).y = x1 * 50 - 40;
                door4.getBehaviour(Transform).x = 1000;
                door4.getBehaviour(Transform).y = 1000;
                mapArr[x1][y1] = 3;
                mapArr[x][y] = 1;
                keys--;
            }
            else if (mapArr[x1][y1] == 51) {
                // if (floor >= 0 && floor < allMaps.length - 1) {
                // 	floor++;
                // 	arr = allMaps[floor];
                // }
                if (passed == 1) {
                    updatePlayerData("life", hp);
                    updatePlayerData("keys", keys);
                    updatePlayerData("bombs", bombs);
                    updatePlayerData("attackability", attackability);
                    updatePlayerData("defendability", defendability);
                    window.location.href = "./secondPage.html";
                }
                else {
                    alert("Please Open The Altar!");
                    //player.getBehaviour(Transform).x = y * 50 + 215;
                    //player.getBehaviour(Transform).y = x * 50 - 40;
                    mapArr[14][1] == 51;
                }
            }
            else if (mapArr[x1][y1] == 64) {
                player.getBehaviour(Transform).x = y1 * 50 + 215;
                player.getBehaviour(Transform).y = x1 * 50 - 40;
                altar1.getBehaviour(Transform).x = 2000;
                altar1.getBehaviour(Transform).y = 2000;
                altar2.getBehaviour(Transform).x = 300 + 215;
                altar2.getBehaviour(Transform).y = 50 - 40;
                const altarAudio = new AudioSystem();
                altarAudio.audioPath = "./music/re-altar.mp3";
                altarAudio.playAudio(false);
                mapArr[x1][y1] = 3;
                mapArr[x][y] = 1;
                passed = 1;
                //alert("You have opened the altar!");
            }
            else if (mapArr[x1][y1] > 40 && mapArr[x1][y1] < 50) {
                // var shanghai = arr[x1][y1] % 40;
                // hp = hp - shanghai * 10;
                //hp = hp - 10;
                if (hp < 0) {
                    mapArr[x][y] = 99;
                    alert("You're dead！Game Over!");
                    window.location.href = "./died.html";
                }
                else if (hp > 0 && x1 == 12 && y1 == 7) {
                    if (attackability >= 10) {
                        hp = hp - 20;
                        if (hp <= 0) {
                            deadend.getBehaviour(Transform).x = 0;
                            deadend.getBehaviour(Transform).y = 0;
                            // deadAudio.playAudio(false);
                            // setTimeout(() => {
                            // alert("You're dead！Game Over!");
                            // }, 200);
                            window.location.href = "./died.html";
                        }
                        else {
                            monster1.getBehaviour(Transform).x = 2000;
                            monster1.getBehaviour(Transform).y = 2000;
                            player.getBehaviour(Transform).x = y1 * 50 + 215;
                            player.getBehaviour(Transform).y = x1 * 50 - 40;
                            mapArr[x1][y1] = 3;
                            mapArr[x][y] = 1;
                        }
                    }
                    else {
                        alert("Your attackability is lower than 10!");
                    }
                }
                else if (hp > 0 && x1 == 5 && y1 == 11) {
                    if (attackability >= 10) {
                        hp = hp - 20;
                        if (hp <= 0) {
                            deadend.getBehaviour(Transform).x = 0;
                            deadend.getBehaviour(Transform).y = 0;
                            // alert("You're dead！Game Over!");
                            // deadAudio.playAudio(false);
                            window.location.href = "./died.html";
                        }
                        else {
                            monster2.getBehaviour(Transform).x = 2000;
                            monster2.getBehaviour(Transform).y = 2000;
                            player.getBehaviour(Transform).x = y1 * 50 + 215;
                            player.getBehaviour(Transform).y = x1 * 50 - 40;
                            mapArr[x1][y1] = 3;
                            mapArr[x][y] = 1;
                        }
                    }
                    else {
                        alert("Your attackability is lower than 10!");
                    }
                }
                else if (hp > 0 && x1 == 8 && y1 == 12) {
                    if (attackability >= 10) {
                        hp = hp - 20;
                        if (hp <= 0) {
                            deadend.getBehaviour(Transform).x = 0;
                            deadend.getBehaviour(Transform).y = 0;
                            // alert("You're dead！Game Over!");
                            // deadAudio.playAudio(false);
                            window.location.href = "./died.html";
                        }
                        else {
                            monster3.getBehaviour(Transform).x = 2000;
                            monster3.getBehaviour(Transform).y = 2000;
                            player.getBehaviour(Transform).x = y1 * 50 + 215;
                            player.getBehaviour(Transform).y = x1 * 50 - 40;
                            mapArr[x1][y1] = 3;
                            mapArr[x][y] = 1;
                        }
                    }
                    else {
                        alert("Your attackability is lower than 10!");
                    }
                }
                else if (hp > 0 && ((x1 == 6 && y1 == 6) || (x1 == 7 && y1 == 6))) {
                    if (attackability >= 20) {
                        hp = hp - 50;
                        if (hp <= 0) {
                            //deadend.getBehaviour(Transform).x = 0;
                            //deadend.getBehaviour(Transform).y = 0;
                            //alert("You're dead！Game Over!");
                            // deadAudio.playAudio(false);
                            window.location.href = "./died.html";
                        }
                        else {
                            monster21.getBehaviour(Transform).x = 2000;
                            monster21.getBehaviour(Transform).y = 2000;
                            monster22.getBehaviour(Transform).x = 2000;
                            monster22.getBehaviour(Transform).y = 2000;
                            monster23.getBehaviour(Transform).x = 2000;
                            monster23.getBehaviour(Transform).y = 2000;
                            monster24.getBehaviour(Transform).x = 2000;
                            monster24.getBehaviour(Transform).y = 2000;
                            player.getBehaviour(Transform).x = y1 * 50 + 215;
                            player.getBehaviour(Transform).y = x1 * 50 - 40;
                            mapArr[x1][y1] = 3;
                            mapArr[x][y] = 1;
                            mapArr[6][6] = 1;
                            mapArr[7][6] = 1;
                        }
                    }
                    else {
                        alert("Your attackability is lower than 20!");
                    }
                }
                else if (mapArr[x1][y1] == 44) {
                    attackability = attackability - 5;
                    trap.getBehaviour(Transform).x = 2000;
                    trap.getBehaviour(Transform).y = 2000;
                    player.getBehaviour(Transform).x = y1 * 50 + 215;
                    player.getBehaviour(Transform).y = x1 * 50 - 40;
                    mapArr[x1][y1] = 3;
                    mapArr[x][y] = 1;
                }
            }
            else if (mapArr[x1][y1] > 60 && mapArr[x1][y1] < 70) {
                if (mapArr[x1][y1] == 61) {
                    attackability = attackability + 10;
                    weapon1.getBehaviour(Transform).x = 2000;
                    weapon1.getBehaviour(Transform).y = 2000;
                    const weaponAudio = new AudioSystem();
                    weaponAudio.audioPath = "./music/re-knife.mp3";
                    weaponAudio.playAudio(false);
                }
                else if (mapArr[x1][y1] == 62) {
                    defendability = defendability + 10;
                }
                else if (mapArr[x1][y1] == 63) {
                    attackability = attackability + 10;
                }
                else if (mapArr[x1][y1] == 65 && x1 == 3 && y1 == 8) {
                    hp = hp + 50;
                    ys11.getBehaviour(Transform).x = 2000;
                    ys11.getBehaviour(Transform).y = 2000;
                    const potionAudio = new AudioSystem();
                    potionAudio.audioPath = "./music/re-potion.mp3";
                    potionAudio.playAudio(false);
                }
                else if (mapArr[x1][y1] == 65 && x1 == 7 && y1 == 14) {
                    hp = hp + 50;
                    ys12.getBehaviour(Transform).x = 2000;
                    ys12.getBehaviour(Transform).y = 2000;
                    const potionAudio = new AudioSystem();
                    potionAudio.audioPath = "./music/re-potion.mp3";
                    potionAudio.playAudio(false);
                }
                else if (mapArr[x1][y1] == 66) {
                    hp = hp + 50;
                }
                else if (mapArr[x1][y1] == 67) {
                    bomb1.getBehaviour(Transform).x = 2000;
                    bomb1.getBehaviour(Transform).y = 2000;
                    const pickAudio = new AudioSystem();
                    pickAudio.audioPath = "./music/re-pick.mp3";
                    pickAudio.playAudio(false);
                    bombs++;
                }
                else if (mapArr[x1][y1] == 68 && x1 == 1 && y1 == 7) {
                    keys++;
                    key1.getBehaviour(Transform).x = 2000;
                    key1.getBehaviour(Transform).y = 2000;
                    const keyAudio = new AudioSystem();
                    keyAudio.audioPath = "./music/re-key.mp3";
                    keyAudio.playAudio(false);
                }
                else if (mapArr[x1][y1] == 68 && x1 == 1 && y1 == 8) {
                    keys++;
                    key2.getBehaviour(Transform).x = 2000;
                    key2.getBehaviour(Transform).y = 2000;
                    const keyAudio = new AudioSystem();
                    keyAudio.audioPath = "./music/re-key.mp3";
                    keyAudio.playAudio(false);
                }
                else if (mapArr[x1][y1] == 68 && x1 == 4 && y1 == 13) {
                    keys++;
                    key3.getBehaviour(Transform).x = 2000;
                    key3.getBehaviour(Transform).y = 2000;
                    const keyAudio = new AudioSystem();
                    keyAudio.audioPath = "./music/re-key.mp3";
                    keyAudio.playAudio(false);
                }
                else if (mapArr[x1][y1] == 68 && x1 == 12 && y1 == 8) {
                    keys++;
                    key4.getBehaviour(Transform).x = 2000;
                    key4.getBehaviour(Transform).y = 2000;
                    const keyAudio = new AudioSystem();
                    keyAudio.audioPath = "./music/re-key.mp3";
                    keyAudio.playAudio(false);
                }
                else if (mapArr[x1][y1] == 68 && x1 == 14 && y1 == 13) {
                    keys++;
                    key5.getBehaviour(Transform).x = 2000;
                    key5.getBehaviour(Transform).y = 2000;
                    const keyAudio = new AudioSystem();
                    keyAudio.audioPath = "./music/re-key.mp3";
                    keyAudio.playAudio(false);
                }
                player.getBehaviour(Transform).x = y1 * 50 + 215;
                player.getBehaviour(Transform).y = x1 * 50 - 40;
                mapArr[x1][y1] = 3;
                mapArr[x][y] = 1;
            }
        }
        document.onkeydown = function (event) {
            if (FloorController.isAudioPlaying) {
                // const floorBackgroungAudio = document.createElement("audio");
                const floorBackgroungAudio = new AudioSystem();
                //第一层的音乐
                floorBackgroungAudio.audioPath = "./music/re-BGM.mp3";
                floorBackgroungAudio.playAudio(true, 0.5);
                FloorController.isAudioPlaying = false;
            }
            var e = event || window.event || arguments.callee.caller.arguments[0];
            if (e && e.keyCode == 87) {
                //if (peoplex > 0) {
                playerMove(charactorPosX, charactorPosY, charactorPosX - 1, charactorPosY);
                if (mapArr[charactorPosX - 1][charactorPosY] != 0 && mapArr[charactorPosX - 1][charactorPosY] != 9 &&
                    mapArr[charactorPosX - 1][charactorPosY] != 21 && mapArr[charactorPosX - 1][charactorPosY] != 22 &&
                    mapArr[charactorPosX - 1][charactorPosY] != 41 && mapArr[charactorPosX - 1][charactorPosY] != 42 &&
                    mapArr[charactorPosX - 1][charactorPosY] != 51) {
                    charactorPosX = charactorPosX - 1;
                }
                else if (mapArr[charactorPosX - 1][charactorPosY] == 21 && bombs > 0) {
                    charactorPosX = charactorPosX - 1;
                }
                else if (mapArr[charactorPosX - 1][charactorPosY] == 22 && keys > 0) {
                    charactorPosX = charactorPosX - 1;
                }
                else if (mapArr[charactorPosX - 1][charactorPosY] == 41 && attackability >= 10) {
                    charactorPosX = charactorPosX - 1;
                }
                else if (mapArr[charactorPosX - 1][charactorPosY] == 42 && attackability >= 20) {
                    charactorPosX = charactorPosX - 1;
                }
                else if (mapArr[charactorPosX - 1][charactorPosY] == 51 && passed == 1) {
                    charactorPosX = charactorPosX - 1;
                }
                console.log(bombs);
                console.log(attackability);
                //}
            }
            else if (e && e.keyCode == 65) {
                playerMove(charactorPosX, charactorPosY, charactorPosX, charactorPosY - 1);
                if (mapArr[charactorPosX][charactorPosY - 1] != 0 && mapArr[charactorPosX][charactorPosY - 1] != 9 &&
                    mapArr[charactorPosX][charactorPosY - 1] != 21 && mapArr[charactorPosX][charactorPosY - 1] != 22 &&
                    mapArr[charactorPosX][charactorPosY - 1] != 41 && mapArr[charactorPosX][charactorPosY - 1] != 42 &&
                    mapArr[charactorPosX][charactorPosY - 1] != 51) {
                    charactorPosY = charactorPosY - 1;
                }
                else if (mapArr[charactorPosX][charactorPosY - 1] == 21 && bombs > 0) {
                    charactorPosY = charactorPosY - 1;
                }
                else if (mapArr[charactorPosX][charactorPosY - 1] == 22 && keys > 0) {
                    charactorPosY = charactorPosY - 1;
                }
                else if (mapArr[charactorPosX][charactorPosY - 1] == 41 && attackability >= 10) {
                    charactorPosY = charactorPosY - 1;
                }
                else if (mapArr[charactorPosX][charactorPosY - 1] == 42 && attackability >= 20) {
                    charactorPosY = charactorPosY - 1;
                }
                else if (mapArr[charactorPosX][charactorPosY - 1] == 51 && passed == 1) {
                    charactorPosY = charactorPosY - 1;
                }
            }
            if (e && e.keyCode == 83) {
                playerMove(charactorPosX, charactorPosY, charactorPosX + 1, charactorPosY);
                if (mapArr[charactorPosX + 1][charactorPosY] != 0 && mapArr[charactorPosX + 1][charactorPosY] != 9 &&
                    mapArr[charactorPosX + 1][charactorPosY] != 21 && mapArr[charactorPosX + 1][charactorPosY] != 22 &&
                    mapArr[charactorPosX + 1][charactorPosY] != 41 && mapArr[charactorPosX + 1][charactorPosY] != 42 &&
                    mapArr[charactorPosX + 1][charactorPosY] != 51) {
                    charactorPosX = charactorPosX + 1;
                }
                else if (mapArr[charactorPosX + 1][charactorPosY] == 21 && bombs > 0) {
                    charactorPosX = charactorPosX + 1;
                }
                else if (mapArr[charactorPosX + 1][charactorPosY] == 22 && keys > 0) {
                    charactorPosX = charactorPosX + 1;
                }
                else if (mapArr[charactorPosX + 1][charactorPosY] == 41 && attackability >= 10) {
                    charactorPosX = charactorPosX + 1;
                }
                else if (mapArr[charactorPosX + 1][charactorPosY] == 42 && attackability >= 20) {
                    charactorPosX = charactorPosX + 1;
                }
                else if (mapArr[charactorPosX + 1][charactorPosY] == 51 && passed == 1) {
                    charactorPosX = charactorPosX + 1;
                }
            }
            else if (e && e.keyCode == 68) {
                playerMove(charactorPosX, charactorPosY, charactorPosX, charactorPosY + 1);
                if (mapArr[charactorPosX][charactorPosY + 1] != 0 && mapArr[charactorPosX][charactorPosY + 1] != 9 &&
                    mapArr[charactorPosX][charactorPosY + 1] != 21 && mapArr[charactorPosX][charactorPosY + 1] != 22 &&
                    mapArr[charactorPosX][charactorPosY + 1] != 41 && mapArr[charactorPosX][charactorPosY + 1] != 42 &&
                    mapArr[charactorPosX][charactorPosY + 1] != 51) {
                    charactorPosY = charactorPosY + 1;
                }
                else if (mapArr[charactorPosX][charactorPosY + 1] == 21 && bombs > 0) {
                    charactorPosY = charactorPosY + 1;
                }
                else if (mapArr[charactorPosX][charactorPosY + 1] == 22 && keys > 0) {
                    charactorPosY = charactorPosY + 1;
                }
                else if (mapArr[charactorPosX][charactorPosY + 1] == 41 && attackability >= 10) {
                    charactorPosY = charactorPosY + 1;
                }
                else if (mapArr[charactorPosX][charactorPosY + 1] == 42 && attackability >= 20) {
                    charactorPosY = charactorPosY + 1;
                }
                else if (mapArr[charactorPosX][charactorPosY + 1] == 51 && passed == 1) {
                    charactorPosY = charactorPosY + 1;
                }
            }
            const HPText = core.getObjectById("HPText");
            HPText.getBehaviour(TextRenderer).text = hp;
            const AttackTest = core.getObjectById("AttackText");
            AttackTest.getBehaviour(TextRenderer).text = attackability;
            const KeyTest = core.getObjectById("KeyText");
            KeyTest.getBehaviour(TextRenderer).text = keys;
            const BombTest = core.getObjectById("BombText");
            BombTest.getBehaviour(TextRenderer).text = bombs;
            // const restart = core.getObjectById("restart");
            // restart.onclick = function () {
            // location.href += "?reload=true";
            // }
        };
    }
    onUpdate() {
        //pass
    }
    onDestroy() {
        clearPlayerData();
        console.log("player data cleared!");
    }
}
core.registerBehaviourClass(KeyContainerBehaviour);
