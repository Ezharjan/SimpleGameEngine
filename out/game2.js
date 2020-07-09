class BasicBehaviour extends Behaviour {
    constructor() {
        super(...arguments);
        this.currentTime = 0;
    }
    onStart() {
        FloorController.isAudioPlaying = true;
        var allMaps = [
            //1为路 0为墙 21石堆 22为门 3为人物 4x为怪物 5x为楼梯 6x为增益道具 67炸弹 68钥匙
            [
                [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
                [9, 67, 1, 1, 1, 68, 0, 61, 1, 1, 65, 0, 65, 61, 65, 9],
                [9, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 61, 65, 61, 9],
                [9, 1, 1, 1, 1, 1, 0, 1, 1, 1, 41, 21, 65, 61, 65, 9],
                [9, 0, 0, 44, 0, 0, 0, 0, 1, 0, 21, 21, 0, 0, 0, 9],
                [9, 61, 0, 41, 0, 65, 0, 1, 1, 1, 0, 41, 1, 1, 67, 9],
                [9, 68, 0, 1, 22, 65, 0, 1, 1, 1, 0, 1, 1, 1, 1, 9],
                [9, 1, 0, 1, 0, 0, 0, 42, 1, 1, 0, 1, 64, 1, 1, 9],
                [9, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 9],
                [9, 1, 0, 42, 42, 1, 0, 1, 0, 0, 0, 0, 0, 68, 1, 9],
                [9, 1, 0, 1, 1, 1, 22, 1, 1, 1, 1, 1, 1, 0, 41, 9],
                [9, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 9],
                [9, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 9],
                [9, 1, 0, 1, 0, 0, 1, 22, 1, 1, 0, 0, 0, 1, 1, 9],
                [9, 1, 1, 1, 0, 67, 67, 0, 51, 1, 21, 1, 1, 1, 3, 9],
                [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            ]
        ];
        var charactorPosX = 0;
        var charactorPosY = 0;
        var floor = 0;
        let bombs = getPlayerData("bombs");
        let keys = getPlayerData("keys");
        // console.log("%%%%%%%%% " + getPlayerData("life"));
        // var hp = 100;
        // var attackability = 10;
        // var defendability = 10;
        let hp = getPlayerData("life");
        let attackability = getPlayerData("attackability");
        let defendability = getPlayerData("defendability");
        var passed = 0;
        console.log("%%%%%%%%% " + getPlayerData("life"));
        var arr = allMaps[0];
        const deadend = core.getObjectById("deadend");
        deadend.getBehaviour(Transform).x = 2000;
        deadend.getBehaviour(Transform).y = 2000;
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[i].length; j++) {
                if (arr[i][j] == 1) {
                }
                else if (50 <= arr[i][j] && arr[i][j] < 60) {
                    if (arr[i][j] == 51) {
                        const loti1 = core.getObjectById("loti1");
                        loti1.getBehaviour(Transform).x = j * 50 + 215;
                        loti1.getBehaviour(Transform).y = i * 50 - 40;
                    }
                }
                else if (arr[i][j] == 21) {
                    const stone1 = core.getObjectById("stone1");
                    stone1.getBehaviour(Transform).x = 500 + 215;
                    stone1.getBehaviour(Transform).y = 700 - 40;
                    const stone2 = core.getObjectById("stone2");
                    stone2.getBehaviour(Transform).x = 550 + 215;
                    stone2.getBehaviour(Transform).y = 150 - 40;
                    const stone3 = core.getObjectById("stone3");
                    stone3.getBehaviour(Transform).x = 500 + 215;
                    stone3.getBehaviour(Transform).y = 200 - 40;
                    const stone4 = core.getObjectById("stone4");
                    stone4.getBehaviour(Transform).x = 550 + 215;
                    stone4.getBehaviour(Transform).y = 200 - 40;
                }
                else if (arr[i][j] == 22) {
                    const door1 = core.getObjectById("door1");
                    door1.getBehaviour(Transform).x = 200 + 215;
                    door1.getBehaviour(Transform).y = 300 - 40;
                    const door2 = core.getObjectById("door2");
                    door2.getBehaviour(Transform).x = 300 + 215;
                    door2.getBehaviour(Transform).y = 500 - 40;
                    const door3 = core.getObjectById("door3");
                    door3.getBehaviour(Transform).x = 350 + 215;
                    door3.getBehaviour(Transform).y = 650 - 40;
                }
                else if (40 <= arr[i][j] && arr[i][j] < 50) {
                    if (arr[i][j] == 41) {
                        const guaiwu11 = core.getObjectById("guaiwu11");
                        guaiwu11.getBehaviour(Transform).x = 150 + 215;
                        guaiwu11.getBehaviour(Transform).y = 250 - 40;
                        const guaiwu12 = core.getObjectById("guaiwu12");
                        guaiwu12.getBehaviour(Transform).x = 500 + 215;
                        guaiwu12.getBehaviour(Transform).y = 150 - 40;
                        const guaiwu13 = core.getObjectById("guaiwu13");
                        guaiwu13.getBehaviour(Transform).x = 550 + 215;
                        guaiwu13.getBehaviour(Transform).y = 250 - 40;
                        const guaiwu14 = core.getObjectById("guaiwu14");
                        guaiwu14.getBehaviour(Transform).x = 700 + 215;
                        guaiwu14.getBehaviour(Transform).y = 500 - 40;
                    }
                    else if (arr[i][j] == 42) {
                        const guaiwu21 = core.getObjectById("guaiwu21");
                        guaiwu21.getBehaviour(Transform).x = 150 + 215;
                        guaiwu21.getBehaviour(Transform).y = 400 - 40;
                        const guaiwu22 = core.getObjectById("guaiwu22");
                        guaiwu22.getBehaviour(Transform).x = 200 + 215;
                        guaiwu22.getBehaviour(Transform).y = 400 - 40;
                        const guaiwu23 = core.getObjectById("guaiwu23");
                        guaiwu23.getBehaviour(Transform).x = 150 + 215;
                        guaiwu23.getBehaviour(Transform).y = 450 - 40;
                        const guaiwu24 = core.getObjectById("guaiwu24");
                        guaiwu24.getBehaviour(Transform).x = 200 + 215;
                        guaiwu24.getBehaviour(Transform).y = 450 - 40;
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
                    else if (arr[i][j] == 44) {
                        const trap = core.getObjectById("trap");
                        trap.getBehaviour(Transform).x = j * 50 + 215;
                        trap.getBehaviour(Transform).y = i * 50 - 40;
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
                        // const weapon7 = core.getObjectById("weapon7");
                        // weapon7.getBehaviour(Transform).x = 300 + 215;
                        // weapon7.getBehaviour(Transform).y = 700 - 40;
                    }
                    else if (arr[i][j] == 64) {
                        const altar = core.getObjectById("altar1");
                        altar.getBehaviour(Transform).x = j * 50 + 215;
                        altar.getBehaviour(Transform).y = i * 50 - 40;
                        const altar2 = core.getObjectById("altar2");
                        altar2.getBehaviour(Transform).x = 2000;
                        altar2.getBehaviour(Transform).x = 2000;
                    }
                    else if (arr[i][j] == 65) {
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
                        const ys8 = core.getObjectById("ys8");
                        ys8.getBehaviour(Transform).x = 250 + 215;
                        ys8.getBehaviour(Transform).y = 300 - 40;
                    }
                    else if (arr[i][j] == 67) {
                        const bomb1 = core.getObjectById("bomb1");
                        bomb1.getBehaviour(Transform).x = 50 + 215;
                        bomb1.getBehaviour(Transform).y = 50 - 40;
                        const bomb2 = core.getObjectById("bomb2");
                        bomb2.getBehaviour(Transform).x = 250 + 215;
                        bomb2.getBehaviour(Transform).y = 700 - 40;
                        const bomb3 = core.getObjectById("bomb3");
                        bomb3.getBehaviour(Transform).x = 700 + 215;
                        bomb3.getBehaviour(Transform).y = 250 - 40;
                        const bomb4 = core.getObjectById("bomb4");
                        bomb4.getBehaviour(Transform).x = 300 + 215;
                        bomb4.getBehaviour(Transform).y = 700 - 40;
                    }
                    else if (arr[i][j] == 68) {
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
            const weapon1 = core.getObjectById("weapon1");
            const weapon2 = core.getObjectById("weapon2");
            const weapon3 = core.getObjectById("weapon3");
            const weapon4 = core.getObjectById("weapon4");
            const weapon5 = core.getObjectById("weapon5");
            const weapon6 = core.getObjectById("weapon6");
            //const weapon7 = core.getObjectById("weapon7");
            const door1 = core.getObjectById("door1");
            const door2 = core.getObjectById("door2");
            const door3 = core.getObjectById("door3");
            const stone1 = core.getObjectById("stone1");
            const stone2 = core.getObjectById("stone2");
            const stone3 = core.getObjectById("stone3");
            const stone4 = core.getObjectById("stone4");
            const bomb1 = core.getObjectById("bomb1");
            const bomb2 = core.getObjectById("bomb2");
            const bomb3 = core.getObjectById("bomb3");
            const bomb4 = core.getObjectById("bomb4");
            const key1 = core.getObjectById("key1");
            const key2 = core.getObjectById("key2");
            const key3 = core.getObjectById("key3");
            const guaiwu11 = core.getObjectById("guaiwu11");
            const guaiwu12 = core.getObjectById("guaiwu12");
            const guaiwu13 = core.getObjectById("guaiwu13");
            const guaiwu14 = core.getObjectById("guaiwu14");
            const guaiwu21 = core.getObjectById("guaiwu21");
            const guaiwu22 = core.getObjectById("guaiwu22");
            const guaiwu23 = core.getObjectById("guaiwu23");
            const guaiwu24 = core.getObjectById("guaiwu24");
            const guaiwu25 = core.getObjectById("guaiwu25");
            const guaiwu26 = core.getObjectById("guaiwu26");
            const guaiwu27 = core.getObjectById("guaiwu27");
            const guaiwu28 = core.getObjectById("guaiwu28");
            const altar1 = core.getObjectById("altar1");
            const altar2 = core.getObjectById("altar2");
            const trap = core.getObjectById("trap");
            const ys1 = core.getObjectById("ys1");
            const ys2 = core.getObjectById("ys2");
            const ys3 = core.getObjectById("ys3");
            const ys4 = core.getObjectById("ys4");
            const ys5 = core.getObjectById("ys5");
            const ys6 = core.getObjectById("ys6");
            const ys7 = core.getObjectById("ys7");
            const ys8 = core.getObjectById("ys8");
            const deadend = core.getObjectById("deadend");
            player.getBehaviour(Transform).x = y * 50 + 215;
            player.getBehaviour(Transform).y = x * 50 - 40;
            if (arr[x1][y1] == 1) {
                player.getBehaviour(Transform).x = y1 * 50 + 215;
                player.getBehaviour(Transform).y = x1 * 50 - 40;
                arr[x1][y1] = 3;
                arr[x][y] = 1;
            }
            else if (arr[x1][y1] == 21 && bombs > 0 && x1 == 14 && y1 == 10) {
                player.getBehaviour(Transform).x = y1 * 50 + 215;
                player.getBehaviour(Transform).y = x1 * 50 - 40;
                stone1.getBehaviour(Transform).x = 1000;
                stone1.getBehaviour(Transform).y = 1000;
                const BoomStoneAudio = new AudioSystem();
                BoomStoneAudio.audioPath = "./music/re-Boom.mp3";
                BoomStoneAudio.playAudio(false);
                arr[x1][y1] = 3;
                arr[x][y] = 1;
                bombs--;
            }
            else if (arr[x1][y1] == 21 && bombs > 0 && x1 == 3 && y1 == 11) {
                player.getBehaviour(Transform).x = y1 * 50 + 215;
                player.getBehaviour(Transform).y = x1 * 50 - 40;
                stone2.getBehaviour(Transform).x = 1000;
                stone2.getBehaviour(Transform).y = 1000;
                const BoomStoneAudio = new AudioSystem();
                BoomStoneAudio.audioPath = "./music/re-Boom.mp3";
                BoomStoneAudio.playAudio(false);
                arr[x1][y1] = 3;
                arr[x][y] = 1;
                bombs--;
            }
            else if (arr[x1][y1] == 21 && bombs > 0 && x1 == 4 && y1 == 10) {
                player.getBehaviour(Transform).x = y1 * 50 + 215;
                player.getBehaviour(Transform).y = x1 * 50 - 40;
                stone3.getBehaviour(Transform).x = 1000;
                stone3.getBehaviour(Transform).y = 1000;
                const BoomStoneAudio = new AudioSystem();
                BoomStoneAudio.audioPath = "./music/re-Boom.mp3";
                BoomStoneAudio.playAudio(false);
                arr[x1][y1] = 3;
                arr[x][y] = 1;
                bombs--;
            }
            else if (arr[x1][y1] == 21 && bombs > 0 && x1 == 4 && y1 == 11) {
                player.getBehaviour(Transform).x = y1 * 50 + 215;
                player.getBehaviour(Transform).y = x1 * 50 - 40;
                stone4.getBehaviour(Transform).x = 1000;
                stone4.getBehaviour(Transform).y = 1000;
                const BoomStoneAudio = new AudioSystem();
                BoomStoneAudio.audioPath = "./music/re-Boom.mp3";
                BoomStoneAudio.playAudio(false);
                arr[x1][y1] = 3;
                arr[x][y] = 1;
                bombs--;
            }
            else if (arr[x1][y1] == 22 && keys > 0 && x1 == 6 && y1 == 4) {
                player.getBehaviour(Transform).x = y1 * 50 + 215;
                player.getBehaviour(Transform).y = x1 * 50 - 40;
                door1.getBehaviour(Transform).x = 1000;
                door1.getBehaviour(Transform).y = 1000;
                arr[x1][y1] = 3;
                arr[x][y] = 1;
                keys--;
            }
            else if (arr[x1][y1] == 22 && keys > 0 && x1 == 10 && y1 == 6) {
                player.getBehaviour(Transform).x = y1 * 50 + 215;
                player.getBehaviour(Transform).y = x1 * 50 - 40;
                door2.getBehaviour(Transform).x = 1000;
                door2.getBehaviour(Transform).y = 1000;
                arr[x1][y1] = 3;
                arr[x][y] = 1;
                keys--;
            }
            else if (arr[x1][y1] == 22 && keys > 0 && x1 == 13 && y1 == 7) {
                player.getBehaviour(Transform).x = y1 * 50 + 215;
                player.getBehaviour(Transform).y = x1 * 50 - 40;
                door3.getBehaviour(Transform).x = 1000;
                door3.getBehaviour(Transform).y = 1000;
                arr[x1][y1] = 3;
                arr[x][y] = 1;
                keys--;
            }
            else if (arr[x1][y1] == 51) {
                if (passed == 1) {
                    updatePlayerData("life", hp);
                    updatePlayerData("keys", keys);
                    updatePlayerData("bombs", bombs);
                    updatePlayerData("attackability", attackability);
                    updatePlayerData("defendability", defendability);
                    window.location.href = "./thirdPage.html";
                }
                else {
                    alert("Please Open The Altar!");
                    //player.getBehaviour(Transform).x = y * 50 + 215;
                    //player.getBehaviour(Transform).y = x * 50 - 40;
                    arr[14][1] == 51;
                }
            }
            else if (arr[x1][y1] == 52) {
                if (floor >= 1 && floor < allMaps.length) {
                    floor--;
                    arr = allMaps[floor];
                }
                //window.location.href= "./index.html"
            }
            else if (arr[x1][y1] > 40 && arr[x1][y1] < 50 && hp > 0) {
                if (hp <= 0) {
                    arr[x][y] = 99;
                    // alert("You're dead！Game Over!");
                    window.location.href = "./died.html";
                }
                else if (hp > 0 && x1 == 5 && y1 == 3) {
                    if (attackability >= 10) {
                        hp = hp - 20;
                        if (hp <= 0) {
                            deadend.getBehaviour(Transform).x = 0;
                            deadend.getBehaviour(Transform).y = 0;
                            // deadAudio.playAudio(false);
                            // alert("You're dead！Game Over!");
                            window.location.href = "./died.html";
                        }
                        else {
                            guaiwu11.getBehaviour(Transform).x = 2000;
                            guaiwu11.getBehaviour(Transform).y = 2000;
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
                else if (hp > 0 && x1 == 3 && y1 == 10) {
                    if (attackability >= 10) {
                        hp = hp - 20;
                        if (hp <= 0) {
                            deadend.getBehaviour(Transform).x = 0;
                            deadend.getBehaviour(Transform).y = 0;
                            // deadAudio.playAudio(false);
                            // alert("You're dead！Game Over!");
                            window.location.href = "./died.html";
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
                else if (hp > 0 && x1 == 5 && y1 == 11) {
                    if (attackability >= 10) {
                        hp = hp - 20;
                        if (hp <= 0) {
                            deadend.getBehaviour(Transform).x = 0;
                            deadend.getBehaviour(Transform).y = 0;
                            // deadAudio.playAudio(false);
                            // alert("You're dead！Game Over!");
                            window.location.href = "./died.html";
                        }
                        else {
                            guaiwu13.getBehaviour(Transform).x = 2000;
                            guaiwu13.getBehaviour(Transform).y = 2000;
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
                else if (hp > 0 && x1 == 10 && y1 == 14) {
                    if (attackability >= 10) {
                        hp = hp - 20;
                        if (hp <= 0) {
                            deadend.getBehaviour(Transform).x = 0;
                            deadend.getBehaviour(Transform).y = 0;
                            // deadAudio.playAudio(false);
                            // alert("You're dead！Game Over!");
                            window.location.href = "./died.html";
                        }
                        else {
                            guaiwu14.getBehaviour(Transform).x = 2000;
                            guaiwu14.getBehaviour(Transform).y = 2000;
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
                else if ((hp > 0) && ((x1 == 9 && y1 == 4) || (x1 == 9 && y1 == 3))) {
                    if (attackability >= 20) {
                        hp = hp - 50;
                        if (hp <= 0) {
                            deadend.getBehaviour(Transform).x = 0;
                            deadend.getBehaviour(Transform).y = 0;
                            // deadAudio.playAudio(false);
                            // alert("You're dead！Game Over!");
                            window.location.href = "./died.html";
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
                            arr[x][y] = 1;
                            arr[3][8] = 1;
                            arr[4][8] = 1;
                            arr[3][9] = 1;
                            arr[4][9] = 1;
                        }
                    }
                    else {
                        alert("Your attackability is lower than 20!");
                    }
                }
                else if (hp > 0 && x1 == 7 && y1 == 7) {
                    if (attackability >= 20) {
                        hp = hp - 50;
                        if (hp <= 0) {
                            deadend.getBehaviour(Transform).x = 0;
                            deadend.getBehaviour(Transform).y = 0;
                            // deadAudio.playAudio(false);
                            // alert("You're dead！Game Over!");
                            window.location.href = "./died.html";
                        }
                        else {
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
                            arr[x][y] = 1;
                            arr[7][6] = 1;
                            arr[8][6] = 1;
                            arr[7][7] = 1;
                            arr[8][7] = 1;
                        }
                    }
                    else {
                        alert("Your attackability is lower than 20!");
                    }
                }
                else if (arr[x1][y1] == 44) {
                    attackability = attackability - 5;
                    trap.getBehaviour(Transform).x = 2000;
                    trap.getBehaviour(Transform).y = 2000;
                    player.getBehaviour(Transform).x = y1 * 50 + 215;
                    player.getBehaviour(Transform).y = x1 * 50 - 40;
                    arr[x1][y1] = 3;
                    arr[x][y] = 1;
                }
            }
            else if (arr[x1][y1] > 60 && arr[x1][y1] < 70) {
                if (arr[x1][y1] == 61 && x1 == 5 && y1 == 1) {
                    attackability = attackability + 10;
                    weapon1.getBehaviour(Transform).x = 1000;
                    weapon1.getBehaviour(Transform).y = 1000;
                    const weaponAudio = new AudioSystem();
                    weaponAudio.audioPath = "./music/re-knife.mp3";
                    weaponAudio.playAudio(false);
                }
                else if (arr[x1][y1] == 61 && x1 == 1 && y1 == 7) {
                    attackability = attackability + 10;
                    weapon2.getBehaviour(Transform).x = 1000;
                    weapon2.getBehaviour(Transform).y = 1000;
                    const weaponAudio = new AudioSystem();
                    weaponAudio.audioPath = "./music/re-knife.mp3";
                    weaponAudio.playAudio(false);
                }
                else if (arr[x1][y1] == 61 && x1 == 2 && y1 == 12) {
                    attackability = attackability + 10;
                    weapon3.getBehaviour(Transform).x = 1000;
                    weapon3.getBehaviour(Transform).y = 1000;
                    const weaponAudio = new AudioSystem();
                    weaponAudio.audioPath = "./music/re-knife.mp3";
                    weaponAudio.playAudio(false);
                }
                else if (arr[x1][y1] == 61 && x1 == 1 && y1 == 13) {
                    attackability = attackability + 10;
                    weapon4.getBehaviour(Transform).x = 1000;
                    weapon4.getBehaviour(Transform).y = 1000;
                    const weaponAudio = new AudioSystem();
                    weaponAudio.audioPath = "./music/re-knife.mp3";
                    weaponAudio.playAudio(false);
                }
                else if (arr[x1][y1] == 61 && x1 == 3 && y1 == 13) {
                    attackability = attackability + 10;
                    weapon5.getBehaviour(Transform).x = 1000;
                    weapon5.getBehaviour(Transform).y = 1000;
                    const weaponAudio = new AudioSystem();
                    weaponAudio.audioPath = "./music/re-knife.mp3";
                    weaponAudio.playAudio(false);
                }
                else if (arr[x1][y1] == 61 && x1 == 2 && y1 == 14) {
                    attackability = attackability + 10;
                    weapon6.getBehaviour(Transform).x = 1000;
                    weapon6.getBehaviour(Transform).y = 1000;
                    const weaponAudio = new AudioSystem();
                    weaponAudio.audioPath = "./music/re-knife.mp3";
                    weaponAudio.playAudio(false);
                }
                // else if (arr[x1][y1] == 61 && x1 == 14 && y1 == 6) {
                // 	attackability = attackability + 10;
                // 	weapon7.getBehaviour(Transform).x = 1000;
                // 	weapon7.getBehaviour(Transform).y = 1000;
                // } 
                else if (arr[x1][y1] == 64) {
                    player.getBehaviour(Transform).x = y1 * 50 + 215;
                    player.getBehaviour(Transform).y = x1 * 50 - 40;
                    altar1.getBehaviour(Transform).x = 2000;
                    altar1.getBehaviour(Transform).y = 2000;
                    altar2.getBehaviour(Transform).x = 600 + 215;
                    altar2.getBehaviour(Transform).y = 350 - 40;
                    const altarAudio = new AudioSystem();
                    altarAudio.audioPath = "./music/re-altar.mp3";
                    altarAudio.playAudio(false);
                    arr[x1][y1] = 3;
                    arr[x][y] = 1;
                    passed = 1;
                    // alert("You have opened the altar!");
                }
                else if (arr[x1][y1] == 65 && x1 == 5 && y1 == 5) {
                    hp = hp + 50;
                    ys1.getBehaviour(Transform).x = 2000;
                    ys1.getBehaviour(Transform).y = 2000;
                    const potionAudio = new AudioSystem();
                    potionAudio.audioPath = "./music/re-potion.mp3";
                    potionAudio.playAudio(false);
                }
                else if (arr[x1][y1] == 65 && x1 == 1 && y1 == 10) {
                    hp = hp + 50;
                    ys2.getBehaviour(Transform).x = 2000;
                    ys2.getBehaviour(Transform).y = 2000;
                    const potionAudio = new AudioSystem();
                    potionAudio.audioPath = "./music/re-potion.mp3";
                    potionAudio.playAudio(false);
                }
                else if (arr[x1][y1] == 65 && x1 == 1 && y1 == 12) {
                    hp = hp + 50;
                    ys3.getBehaviour(Transform).x = 2000;
                    ys3.getBehaviour(Transform).y = 2000;
                    const potionAudio = new AudioSystem();
                    potionAudio.audioPath = "./music/re-potion.mp3";
                    potionAudio.playAudio(false);
                }
                else if (arr[x1][y1] == 65 && x1 == 3 && y1 == 12) {
                    hp = hp + 50;
                    ys4.getBehaviour(Transform).x = 2000;
                    ys4.getBehaviour(Transform).y = 2000;
                    const potionAudio = new AudioSystem();
                    potionAudio.audioPath = "./music/re-potion.mp3";
                    potionAudio.playAudio(false);
                }
                else if (arr[x1][y1] == 65 && x1 == 2 && y1 == 13) {
                    hp = hp + 50;
                    ys5.getBehaviour(Transform).x = 2000;
                    ys5.getBehaviour(Transform).y = 2000;
                    const potionAudio = new AudioSystem();
                    potionAudio.audioPath = "./music/re-potion.mp3";
                    potionAudio.playAudio(false);
                }
                else if (arr[x1][y1] == 65 && x1 == 1 && y1 == 14) {
                    hp = hp + 50;
                    ys6.getBehaviour(Transform).x = 2000;
                    ys6.getBehaviour(Transform).y = 2000;
                    const potionAudio = new AudioSystem();
                    potionAudio.audioPath = "./music/re-potion.mp3";
                    potionAudio.playAudio(false);
                }
                else if (arr[x1][y1] == 65 && x1 == 3 && y1 == 14) {
                    hp = hp + 50;
                    ys7.getBehaviour(Transform).x = 2000;
                    ys7.getBehaviour(Transform).y = 2000;
                    const potionAudio = new AudioSystem();
                    potionAudio.audioPath = "./music/re-potion.mp3";
                    potionAudio.playAudio(false);
                }
                else if (arr[x1][y1] == 65 && x1 == 6 && y1 == 5) {
                    hp = hp + 50;
                    ys8.getBehaviour(Transform).x = 2000;
                    ys8.getBehaviour(Transform).y = 2000;
                    const potionAudio = new AudioSystem();
                    potionAudio.audioPath = "./music/re-potion.mp3";
                    potionAudio.playAudio(false);
                }
                else if (arr[x1][y1] == 67 && x1 == 1 && y1 == 1) {
                    bomb1.getBehaviour(Transform).x = 2000;
                    bomb1.getBehaviour(Transform).y = 2000;
                    const pickAudio = new AudioSystem();
                    pickAudio.audioPath = "./music/re-pick.mp3";
                    pickAudio.playAudio(false);
                    bombs++;
                }
                else if (arr[x1][y1] == 67 && x1 == 14 && y1 == 5) {
                    bomb2.getBehaviour(Transform).x = 2000;
                    bomb2.getBehaviour(Transform).y = 2000;
                    const pickAudio = new AudioSystem();
                    pickAudio.audioPath = "./music/re-pick.mp3";
                    pickAudio.playAudio(false);
                    bombs++;
                }
                else if (arr[x1][y1] == 67 && x1 == 5 && y1 == 14) {
                    bomb3.getBehaviour(Transform).x = 2000;
                    bomb3.getBehaviour(Transform).y = 2000;
                    const pickAudio = new AudioSystem();
                    pickAudio.audioPath = "./music/re-pick.mp3";
                    pickAudio.playAudio(false);
                    bombs++;
                }
                else if (arr[x1][y1] == 67 && x1 == 14 && y1 == 6) {
                    bomb4.getBehaviour(Transform).x = 2000;
                    bomb4.getBehaviour(Transform).y = 2000;
                    const pickAudio = new AudioSystem();
                    pickAudio.audioPath = "./music/re-pick.mp3";
                    pickAudio.playAudio(false);
                    bombs++;
                }
                else if (arr[x1][y1] == 68 && x1 == 6 && y1 == 1) {
                    keys++;
                    key1.getBehaviour(Transform).x = 2000;
                    key1.getBehaviour(Transform).y = 2000;
                    const keyAudio = new AudioSystem();
                    keyAudio.audioPath = "./music/re-key.mp3";
                    keyAudio.playAudio(false);
                }
                else if (arr[x1][y1] == 68 && x1 == 1 && y1 == 5) {
                    keys++;
                    key2.getBehaviour(Transform).x = 2000;
                    key2.getBehaviour(Transform).y = 2000;
                    const keyAudio = new AudioSystem();
                    keyAudio.audioPath = "./music/re-key.mp3";
                    keyAudio.playAudio(false);
                }
                else if (arr[x1][y1] == 68 && x1 == 9 && y1 == 13) {
                    keys++;
                    key3.getBehaviour(Transform).x = 2000;
                    key3.getBehaviour(Transform).y = 2000;
                    const keyAudio = new AudioSystem();
                    keyAudio.audioPath = "./music/re-key.mp3";
                    keyAudio.playAudio(false);
                }
                player.getBehaviour(Transform).x = y1 * 50 + 215;
                player.getBehaviour(Transform).y = x1 * 50 - 40;
                arr[x1][y1] = 3;
                arr[x][y] = 1;
            }
        }
        document.onkeydown = function (event) {
            if (FloorController.isAudioPlaying) {
                // const floorBackgroungAudio = document.createElement("audio");
                const floorBackgroungAudio = new AudioSystem();
                //第二层的音乐
                floorBackgroungAudio.audioPath = "./music/re-BGM.mp3";
                floorBackgroungAudio.playAudio(true, 0.5);
                FloorController.isAudioPlaying = false;
            }
            var e = event || window.event || arguments.callee.caller.arguments[0];
            if (e && e.keyCode == 87) {
                //if (peoplex > 0) {
                playerMove(charactorPosX, charactorPosY, charactorPosX - 1, charactorPosY);
                if (arr[charactorPosX - 1][charactorPosY] != 0 && arr[charactorPosX - 1][charactorPosY] != 9 &&
                    arr[charactorPosX - 1][charactorPosY] != 21 && arr[charactorPosX - 1][charactorPosY] != 22 &&
                    arr[charactorPosX - 1][charactorPosY] != 41 && arr[charactorPosX - 1][charactorPosY] != 42 &&
                    arr[charactorPosX - 1][charactorPosY] != 51) {
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
                else if (arr[charactorPosX - 1][charactorPosY] == 51 && passed == 1) {
                    charactorPosX = charactorPosX - 1;
                }
                console.log(bombs);
                console.log(attackability);
                //}
            }
            else if (e && e.keyCode == 65) {
                playerMove(charactorPosX, charactorPosY, charactorPosX, charactorPosY - 1);
                if (arr[charactorPosX][charactorPosY - 1] != 0 && arr[charactorPosX][charactorPosY - 1] != 9 &&
                    arr[charactorPosX][charactorPosY - 1] != 21 && arr[charactorPosX][charactorPosY - 1] != 22 &&
                    arr[charactorPosX][charactorPosY - 1] != 41 && arr[charactorPosX][charactorPosY - 1] != 42 &&
                    arr[charactorPosX][charactorPosY - 1] != 51) {
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
                else if (arr[charactorPosX][charactorPosY - 1] == 51 && passed == 1) {
                    charactorPosY = charactorPosY - 1;
                }
            }
            if (e && e.keyCode == 83) {
                playerMove(charactorPosX, charactorPosY, charactorPosX + 1, charactorPosY);
                if (arr[charactorPosX + 1][charactorPosY] != 0 && arr[charactorPosX + 1][charactorPosY] != 9 &&
                    arr[charactorPosX + 1][charactorPosY] != 21 && arr[charactorPosX + 1][charactorPosY] != 22 &&
                    arr[charactorPosX + 1][charactorPosY] != 41 && arr[charactorPosX + 1][charactorPosY] != 42 &&
                    arr[charactorPosX + 1][charactorPosY] != 51) {
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
                else if (arr[charactorPosX + 1][charactorPosY] == 51 && passed == 1) {
                    charactorPosX = charactorPosX + 1;
                }
            }
            else if (e && e.keyCode == 68) {
                playerMove(charactorPosX, charactorPosY, charactorPosX, charactorPosY + 1);
                if (arr[charactorPosX][charactorPosY + 1] != 0 && arr[charactorPosX][charactorPosY + 1] != 9 &&
                    arr[charactorPosX][charactorPosY + 1] != 21 && arr[charactorPosX][charactorPosY + 1] != 22 &&
                    arr[charactorPosX][charactorPosY + 1] != 41 && arr[charactorPosX][charactorPosY + 1] != 42 &&
                    arr[charactorPosX][charactorPosY + 1] != 51) {
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
                else if (arr[charactorPosX][charactorPosY + 1] == 51 && passed == 1) {
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
    }
}
core.registerBehaviourClass(BasicBehaviour);
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
