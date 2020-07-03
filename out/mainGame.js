var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class ClickContainerBehaviour extends Behaviour {
    onStart() {
        this.gameObject.onClick = function () {
            const qidong = core.getObjectById("qidong");
            const move3 = new MoveBehaviour();
            move3.time = 1000;
            move3.targetX = 0;
            qidong.addBehaviour(move3);
        };
        // qidong.onClick = function () {
        // }
    }
}
class KeyContainerBehaviour extends Behaviour {
    constructor() {
        super(...arguments);
        this.currentTime = 0;
    }
    onStart() {
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
        // const a = core.getObjectById("lu");const b = core.getObjectById("lu");const c = core.getObjectById("lu");const d = core.getObjectById("lu");const e = core.getObjectById("lu");
        // const f = core.getObjectById("lu");const g = core.getObjectById("lu");const h = core.getObjectById("lu");const i = core.getObjectById("lu");const j = core.getObjectById("lu");
        // const k = core.getObjectById("lu");const l = core.getObjectById("lu");
        // const lu = [[a,b,c,d,e,f,g,h,i,j,k,l],
        //          ];
        //for (var a = 0; a < arr.length; a++) {
        //for (var b = arr[a].length; b > 0; b--) {
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[i].length; j++) {
                if (arr[i][j] == 1) {
                    const a1 = core.getObjectById("lu1");
                    const a2 = core.getObjectById("lu2");
                    const a3 = core.getObjectById("lu3");
                    const a4 = core.getObjectById("lu");
                    const a5 = core.getObjectById("lu");
                    const a6 = core.getObjectById("lu");
                    const a7 = core.getObjectById("lu4");
                    const a8 = core.getObjectById("lu5");
                    const a9 = core.getObjectById("lu6");
                    const a10 = core.getObjectById("lu");
                    const a11 = core.getObjectById("lu");
                    const b1 = core.getObjectById("lu7");
                    const b2 = core.getObjectById("lu");
                    const b3 = core.getObjectById("lu8");
                    const b4 = core.getObjectById("lu9");
                    const b5 = core.getObjectById("lu");
                    const b6 = core.getObjectById("lu");
                    const b7 = core.getObjectById("lu");
                    const b8 = core.getObjectById("lu");
                    const b9 = core.getObjectById("lu10");
                    const b10 = core.getObjectById("lu");
                    const b11 = core.getObjectById("lu11");
                    const c1 = core.getObjectById("lu");
                    const c2 = core.getObjectById("lu");
                    const c3 = core.getObjectById("lu");
                    const c4 = core.getObjectById("lu");
                    const c5 = core.getObjectById("lu");
                    const c6 = core.getObjectById("lu");
                    const c7 = core.getObjectById("lu");
                    const c8 = core.getObjectById("lu");
                    const c9 = core.getObjectById("lu");
                    const c10 = core.getObjectById("lu");
                    const c11 = core.getObjectById("lu");
                    const d1 = core.getObjectById("lu");
                    const d2 = core.getObjectById("lu");
                    const d3 = core.getObjectById("lu");
                    const d4 = core.getObjectById("lu");
                    const d5 = core.getObjectById("lu");
                    const d6 = core.getObjectById("lu");
                    const d7 = core.getObjectById("lu");
                    const d8 = core.getObjectById("lu");
                    const d9 = core.getObjectById("lu");
                    const d10 = core.getObjectById("lu");
                    const d11 = core.getObjectById("lu");
                    const e1 = core.getObjectById("lu");
                    const e2 = core.getObjectById("lu");
                    const e3 = core.getObjectById("lu");
                    const e4 = core.getObjectById("lu");
                    const e5 = core.getObjectById("lu");
                    const e6 = core.getObjectById("lu");
                    const e7 = core.getObjectById("lu");
                    const e8 = core.getObjectById("lu");
                    const e9 = core.getObjectById("lu");
                    const e10 = core.getObjectById("lu");
                    const e11 = core.getObjectById("lu");
                    const f1 = core.getObjectById("lu");
                    const f2 = core.getObjectById("lu");
                    const f3 = core.getObjectById("lu");
                    const f4 = core.getObjectById("lu");
                    const f5 = core.getObjectById("lu");
                    const f6 = core.getObjectById("lu");
                    const f7 = core.getObjectById("lu");
                    const f8 = core.getObjectById("lu");
                    const f9 = core.getObjectById("lu");
                    const f10 = core.getObjectById("lu");
                    const f11 = core.getObjectById("lu");
                    const g1 = core.getObjectById("lu");
                    const g2 = core.getObjectById("lu");
                    const g3 = core.getObjectById("lu");
                    const g4 = core.getObjectById("lu");
                    const g5 = core.getObjectById("lu");
                    const g6 = core.getObjectById("lu");
                    const g7 = core.getObjectById("lu");
                    const g8 = core.getObjectById("lu");
                    const g9 = core.getObjectById("lu");
                    const g10 = core.getObjectById("lu");
                    const g11 = core.getObjectById("lu");
                    const h1 = core.getObjectById("lu");
                    const h2 = core.getObjectById("lu");
                    const h3 = core.getObjectById("lu");
                    const h4 = core.getObjectById("lu");
                    const h5 = core.getObjectById("lu");
                    const h6 = core.getObjectById("lu");
                    const h7 = core.getObjectById("lu");
                    const h8 = core.getObjectById("lu");
                    const h9 = core.getObjectById("lu");
                    const h10 = core.getObjectById("lu");
                    const h11 = core.getObjectById("lu");
                    const i1 = core.getObjectById("lu");
                    const i2 = core.getObjectById("lu");
                    const i3 = core.getObjectById("lu");
                    const i4 = core.getObjectById("lu");
                    const i5 = core.getObjectById("lu");
                    const i6 = core.getObjectById("lu");
                    const i7 = core.getObjectById("lu");
                    const i8 = core.getObjectById("lu");
                    const i9 = core.getObjectById("lu");
                    const i10 = core.getObjectById("lu");
                    const i11 = core.getObjectById("lu");
                    const j1 = core.getObjectById("lu");
                    const j2 = core.getObjectById("lu");
                    const j3 = core.getObjectById("lu");
                    const j4 = core.getObjectById("lu");
                    const j5 = core.getObjectById("lu");
                    const j6 = core.getObjectById("lu");
                    const j7 = core.getObjectById("lu");
                    const j8 = core.getObjectById("lu");
                    const j9 = core.getObjectById("lu");
                    const j10 = core.getObjectById("lu");
                    const j11 = core.getObjectById("lu");
                    const k1 = core.getObjectById("lu");
                    const k2 = core.getObjectById("lu");
                    const k3 = core.getObjectById("lu");
                    const k4 = core.getObjectById("lu");
                    const k5 = core.getObjectById("lu");
                    const k6 = core.getObjectById("lu");
                    const k7 = core.getObjectById("lu");
                    const k8 = core.getObjectById("lu");
                    const k9 = core.getObjectById("lu");
                    const k10 = core.getObjectById("lu");
                    const k11 = core.getObjectById("lu");
                    const l1 = core.getObjectById("lu");
                    const l2 = core.getObjectById("lu");
                    const l3 = core.getObjectById("lu");
                    const l4 = core.getObjectById("lu");
                    const l5 = core.getObjectById("lu");
                    const l6 = core.getObjectById("lu");
                    const l7 = core.getObjectById("lu");
                    const l8 = core.getObjectById("lu");
                    const l9 = core.getObjectById("lu");
                    const l10 = core.getObjectById("lu");
                    const l11 = core.getObjectById("lu");
                    // const lu = [[a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11],
                    // 			[b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11],
                    // 		    [c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11],
                    // 			[d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11],
                    // 			[e1,e2,e3,e4,e5,e6,e7,e8,e9,e10,e11],
                    // 			[f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11],
                    // 			[g1,g2,g3,g4,g5,g6,g7,g8,g9,g10,g11],
                    // 			[h1,h2,h3,h4,h5,h6,h7,h8,h9,h10,h11],
                    // 			[i1,i2,i3,i4,i5,i6,i7,i8,i9,i10,i11],
                    // 			[j1,j2,j3,j4,j5,j6,j7,j8,j9,j10,j11],
                    // 			[k1,k2,k3,k4,k5,k6,k7,k8,k9,k10,k11],
                    // 		    [l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11]    ];
                    //var lu = new Array();
                    //lu[i][j] = core.getObjectById("lu");
                    //lu[i][j].getBehaviour(Transform).x = 	j * 40;
                    //lu[i][j].getBehaviour(Transform).y = 	i * 40;
                    a1.getBehaviour(Transform).x = 0;
                    a1.getBehaviour(Transform).y = 0;
                    a2.getBehaviour(Transform).x = 40;
                    a2.getBehaviour(Transform).y = 0;
                    a3.getBehaviour(Transform).x = 80;
                    a3.getBehaviour(Transform).y = 0;
                    a7.getBehaviour(Transform).x = 240;
                    a7.getBehaviour(Transform).y = 0;
                    a8.getBehaviour(Transform).x = 280;
                    a8.getBehaviour(Transform).y = 0;
                    a9.getBehaviour(Transform).x = 320;
                    a9.getBehaviour(Transform).y = 0;
                    b1.getBehaviour(Transform).x = 0;
                    b1.getBehaviour(Transform).y = 40;
                    b3.getBehaviour(Transform).x = 80;
                    b3.getBehaviour(Transform).y = 40;
                }
                else if (arr[i][j] == 0) {
                    const qiang = core.getObjectById("qiang");
                    qiang.getBehaviour(Transform).x = j * 40;
                    qiang.getBehaviour(Transform).y = i * 40;
                }
                else if (50 <= arr[i][j] && arr[i][j] < 60) {
                    if (arr[i][j] == 51) {
                        const loti1 = core.getObjectById("loti1");
                        loti1.getBehaviour(Transform).x = j * 40;
                        loti1.getBehaviour(Transform).y = i * 40;
                    }
                    else if (arr[i][j] == 52) {
                        const loti2 = core.getObjectById("loti2");
                        loti2.getBehaviour(Transform).x = j * 40;
                        loti2.getBehaviour(Transform).y = i * 40;
                    }
                }
                else if (arr[i][j] == 2) {
                    const men1 = core.getObjectById("men1");
                    men1.getBehaviour(Transform).x = j * 40;
                    men1.getBehaviour(Transform).y = i * 40;
                    //} else if (arr[i][j] == 21) {
                    //var men1 = document.createElement('div');
                    //men1.className = 'gezi men1';
                    //yxibox.appendChild(men1);
                    //} else if (arr[i][j] == 22) {
                    //var men2 = document.createElement('div');
                    //men2.className = 'gezi men2';
                    //yxibox.appendChild(men2);
                }
                else if (40 <= arr[i][j] && arr[i][j] < 50) {
                    if (arr[i][j] == 41) {
                        const guaiwu1 = core.getObjectById("guaiwu1");
                        guaiwu1.getBehaviour(Transform).x = j * 40;
                        guaiwu1.getBehaviour(Transform).y = i * 40;
                    }
                    else if (arr[i][j] == 42) {
                        const guaiwu2 = core.getObjectById("guaiwu2");
                        guaiwu2.getBehaviour(Transform).x = j * 40;
                        guaiwu2.getBehaviour(Transform).y = i * 40;
                    }
                    else if (arr[i][j] == 43) {
                        const guaiwu3 = core.getObjectById("guaiwu3");
                        guaiwu3.getBehaviour(Transform).x = j * 40;
                        guaiwu3.getBehaviour(Transform).y = i * 40;
                    }
                    else if (arr[i][j] == 44) {
                        const guaiwu4 = core.getObjectById("guaiwu4");
                        guaiwu4.getBehaviour(Transform).x = j * 40;
                        guaiwu4.getBehaviour(Transform).y = i * 40;
                    }
                    else if (arr[i][j] == 45) {
                        const guaiwu5 = core.getObjectById("guaiwu5");
                        guaiwu5.getBehaviour(Transform).x = j * 40;
                        guaiwu5.getBehaviour(Transform).y = i * 40;
                    }
                    else if (arr[i][j] == 46) {
                        const guaiwu6 = core.getObjectById("guaiwu6");
                        guaiwu6.getBehaviour(Transform).x = j * 40;
                        guaiwu6.getBehaviour(Transform).y = i * 40;
                    }
                    else if (arr[i][j] == 47) {
                        const guaiwu7 = core.getObjectById("guaiwu7");
                        guaiwu7.getBehaviour(Transform).x = j * 40;
                        guaiwu7.getBehaviour(Transform).y = i * 40;
                    }
                    else if (arr[i][j] == 48) {
                        const guaiwu8 = core.getObjectById("guaiwu8");
                        guaiwu8.getBehaviour(Transform).x = j * 40;
                        guaiwu8.getBehaviour(Transform).y = i * 40;
                    }
                    else if (arr[i][j] == 49) {
                        const guaiwu9 = core.getObjectById("guaiwu9");
                        guaiwu9.getBehaviour(Transform).x = j * 40;
                        guaiwu9.getBehaviour(Transform).y = i * 40;
                    }
                }
                else if (arr[i][j] == 3) {
                    peoplex = i;
                    peopley = j;
                    //const renwu = core.getObjectById("renwu");
                    //renwu.getBehaviour(Transform).x = 	j * 40;
                    //renwu.getBehaviour(Transform).y = 	i * 40;
                    console.log(peoplex);
                    console.log(peopley);
                }
                else if (60 <= arr[i][j] && arr[i][j] < 70) {
                    if (arr[i][j] == 61) {
                        const daoju1 = core.getObjectById("daoju1");
                        daoju1.getBehaviour(Transform).x = j * 40;
                        daoju1.getBehaviour(Transform).y = i * 40;
                    }
                    else if (arr[i][j] == 62) {
                        const daoju2 = core.getObjectById("daoju2");
                        daoju2.getBehaviour(Transform).x = j * 40;
                        daoju2.getBehaviour(Transform).y = i * 40;
                    }
                    else if (arr[i][j] == 63) {
                        const daoju3 = core.getObjectById("daoju3");
                        daoju3.getBehaviour(Transform).x = j * 40;
                        daoju3.getBehaviour(Transform).y = i * 40;
                    }
                    else if (arr[i][j] == 64) {
                        const daoju4 = core.getObjectById("daoju4");
                        daoju4.getBehaviour(Transform).x = j * 40;
                        daoju4.getBehaviour(Transform).y = i * 40;
                    }
                    else if (arr[i][j] == 65) {
                        const daoju5 = core.getObjectById("daoju5");
                        daoju5.getBehaviour(Transform).x = j * 40;
                        daoju5.getBehaviour(Transform).y = i * 40;
                    }
                    else if (arr[i][j] == 66) {
                        const daoju6 = core.getObjectById("daoju6");
                        daoju6.getBehaviour(Transform).x = j * 40;
                        daoju6.getBehaviour(Transform).y = i * 40;
                    }
                    else if (arr[i][j] == 67) {
                        const daoju7 = core.getObjectById("daoju7");
                        daoju7.getBehaviour(Transform).x = j * 40;
                        daoju7.getBehaviour(Transform).y = i * 40;
                    }
                    else if (arr[i][j] == 68) {
                        const daoju8 = core.getObjectById("daoju8");
                        daoju8.getBehaviour(Transform).x = j * 40;
                        daoju8.getBehaviour(Transform).y = i * 40;
                    }
                }
                else if (arr[i][j] == 99) {
                    const lu2 = core.getObjectById("lu");
                    lu2.getBehaviour(Transform).x = j * 40;
                    lu2.getBehaviour(Transform).y = i * 40;
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
        diyic = 1;
        //1为路 0为墙 2x为门 3为人物 4x为怪物 5x为楼梯 6x为增益道具
        function yidongguoceng(x, y, x1, y1) {
            const renwu = core.getObjectById("renwu");
            renwu.getBehaviour(Transform).x = y * 40;
            renwu.getBehaviour(Transform).y = x * 40;
            if (arr[x1][y1] == 1) {
                renwu.getBehaviour(Transform).x = y1 * 40;
                renwu.getBehaviour(Transform).y = x1 * 40;
                arr[x1][y1] = 3;
                arr[x][y] = 1;
            }
            else if (arr[x1][y1] == 0) {
                renwu.getBehaviour(Transform).x = y * 40;
                renwu.getBehaviour(Transform).y = x * 40;
                arr[x1][y1] = 0;
                arr[x][y] = 3;
            }
            else if (arr[x1][y1] == 2 && jinkey > 0) {
                renwu.getBehaviour(Transform).x = y1 * 40;
                renwu.getBehaviour(Transform).y = x1 * 40;
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
            }
            else if (arr[x1][y1] == 51) {
                if (floor >= 0 && floor < allditu.length - 1) {
                    floor++;
                    arr = allditu[floor];
                }
            }
            else if (arr[x1][y1] == 52) {
                if (floor >= 1 && floor < allditu.length) {
                    floor--;
                    arr = allditu[floor];
                }
            }
            else if (arr[x1][y1] > 40 && arr[x1][y1] < 50 && hp > 0) {
                var shanghai = arr[x1][y1] % 40;
                hp = hp - shanghai * 10;
                if (hp < 0) {
                    arr[x][y] = 99;
                }
                else {
                    renwu.getBehaviour(Transform).x = y1 * 40;
                    renwu.getBehaviour(Transform).y = x1 * 40;
                    arr[x1][y1] = 3;
                    arr[x][y] = 1;
                }
            }
            else if (arr[x1][y1] > 60 && arr[x1][y1] < 70) {
                if (arr[x1][y1] == 61) {
                }
                else if (arr[x1][y1] == 62) {
                    fangyu = fangyu + 10;
                }
                else if (arr[x1][y1] == 63) {
                    gjili = gjili + 10;
                }
                else if (arr[x1][y1] == 64) {
                    gjili = gjili + 15;
                    fangyu = fangyu + 15;
                }
                else if (arr[x1][y1] == 65) {
                    hp = hp + 100;
                }
                else if (arr[x1][y1] == 66) {
                    hp = hp + 50;
                }
                else if (arr[x1][y1] == 67) {
                    jinkey++;
                }
                else if (arr[x1][y1] == 68) {
                    yinkey++;
                }
                renwu.getBehaviour(Transform).x = y1 * 40;
                renwu.getBehaviour(Transform).y = x1 * 40;
                x = x1;
                y = y1;
                arr[x1][y1] = 3;
                arr[x][y] = 1;
            }
        }
        document.onkeydown = function (event) {
            var e = event || window.event || arguments.callee.caller.arguments[0];
            if (e && e.keyCode == 38) {
                if (peoplex > 0) {
                    yidongguoceng(peoplex, peopley, peoplex - 1, peopley);
                    if (arr[peoplex - 1][peopley] != 0) {
                        peoplex = peoplex - 1;
                    }
                    //console.log('1');
                    //console.log(peoplex);
                    //console.log(peopley);
                }
            }
            else if (e && e.keyCode == 37) {
                yidongguoceng(peoplex, peopley, peoplex, peopley - 1);
                if (arr[peoplex][peopley - 1] != 0) {
                    peopley = peopley - 1;
                }
            }
            if (e && e.keyCode == 40) {
                if (peoplex >= 0 && peoplex <= 9) {
                    yidongguoceng(peoplex, peopley, peoplex + 1, peopley);
                    if (arr[peoplex + 1][peopley] != 0) {
                        peoplex = peoplex + 1;
                    }
                }
            }
            else if (e && e.keyCode == 39) {
                yidongguoceng(peoplex, peopley, peoplex, peopley + 1);
                if (arr[peoplex][peopley + 1] != 0) {
                    peopley = peopley + 1;
                }
            }
        };
    }
    onUpdate() {
    }
}
core.registerBehaviourClass(KeyContainerBehaviour);
class MoveBehaviour extends Behaviour {
    constructor() {
        super(...arguments);
        this.currentTime = 0;
        this.initX = 0;
        this.initY = 0;
    }
    onStart() {
        this.initX = this.$getTransform().x;
        this.initY = this.$getTransform().y;
    }
    $getTransform() {
        return this.gameObject.getBehaviour(Transform);
    }
    onUpdate(duringTime) {
        const transform = this.$getTransform();
        this.currentTime += duringTime;
        let timeRatio = this.currentTime / this.time;
        if (timeRatio > 1) {
            timeRatio = 1;
        }
        const needToMoveX = this.targetX - this.initX;
        transform.x = this.initX + timeRatio * needToMoveX;
        if (timeRatio == 1) {
            this.gameObject.removeBehaviour(this);
        }
    }
    onDestroy() {
    }
}
__decorate([
    SerializedField(1000)
], MoveBehaviour.prototype, "time", void 0);
__decorate([
    SerializedField(0)
], MoveBehaviour.prototype, "targetX", void 0);
core.registerBehaviourClass(MoveBehaviour);
class GameStartupBehaviour extends Behaviour {
    onStart() {
    }
}
core.registerBehaviourClass(ClickContainerBehaviour);
core.registerBehaviourClass(GameStartupBehaviour);
