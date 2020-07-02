//地图初始化
function init(map) {
    init_road();
    init_warrior();
    init_others(map);
}

//(上楼、下楼、读档时)地图重新载入
function re_init(map) {
    var container = document.getElementById("game");
    var child = document.getElementById("main");
    container.removeChild(child);

    var main = document.createElement("div");
    main.id = "main";
    main.setAttribute("class", "main");
    container.appendChild(main);
    init(map);
    refresh_keys();
}

//往地图铺一层路
function init_road() {
    var main = document.getElementById("main");
    var element;
    for (var i = 0; i < SIZE; i++) {
        for (var j = 0; j < SIZE; j++) {
            element = document.createElement("div");
            element.id = i + "#" + j;
            element.setAttribute("class", "resource_1");
            main.appendChild(element);
        }
    }
}

//初始化勇士位置、属性、装备及拥有物品
function init_warrior() {
    var element = document.createElement("div");
    element.setAttribute("class", "warrior");
    var container = document.getElementById(warrior.x + "#" + warrior.y);
    container.appendChild(element);

    refresh_attribute();
    refresh_weapon();
}

//刷新勇士的属性
function refresh_attribute() {
    document.getElementById("floor").innerText = "魔塔 第" + warrior.floor + "层";
    document.getElementById("blood").innerText = warrior.dp;
    document.getElementById("attack").innerText = warrior.attack;
    document.getElementById("defense").innerText = warrior.defense;
    document.getElementById("gold").innerText = warrior.gold;
}

//刷新勇士的武器、防具
function refresh_weapon() {
    var weapon_name = document.getElementById("weapon_name");
    var weapon_img = document.getElementById("weapon_img");
    switch (warrior.weapon) {
        //神圣剑
        case 'Sacred Sword':
            weapon_name.innerText = '武器\n神圣剑';
            weapon_img.style.backgroundImage = 'url(images/possess/weapon_1.png)';
            break;
        //圣剑
        case 'Holy Sword':
            weapon_name.innerText = '武器\n圣剑';
            weapon_img.style.backgroundImage = 'url(images/possess/weapon_2.png)';
            break;
        //骑士剑
        case 'Knight Sword':
            weapon_name.innerText = '武器\n骑士剑';
            weapon_img.style.backgroundImage = 'url(images/possess/weapon_3.png)';
            break;
        //银剑
        case 'Silver Sword':
            weapon_name.innerText = '武器\n银剑';
            weapon_img.style.backgroundImage = 'url(images/possess/weapon_4.png)';
            break;
        //铁剑
        case 'Iron Sword':
            weapon_name.innerText = '武器\n铁剑';
            weapon_img.style.backgroundImage = 'url(images/possess/weapon_5.png)';
            break;
        //无
        case 'None':
            weapon_name.innerText = '武器\n无';
            weapon_img.style.backgroundImage = 'url(images/attribute/gray.png)';
            break;
        default :
            weapon_name.innerText = '武器\n无';
            weapon_img.style.backgroundImage = 'url(images/attribute/gray.png)';
            break;
    }

    var armor_name = document.getElementById("armor_name");
    var armor_img = document.getElementById("armor_img");
    switch (warrior.armor) {
        //神圣盾
        case 'Sacred Shield':
            armor_name.innerText = '防具\n神圣盾';
            armor_img.style.backgroundImage = 'url(images/possess/armor_1.png)';
            break;
        //圣盾
        case 'Holy Shield':
            armor_name.innerText = '防具\n圣盾';
            armor_img.style.backgroundImage = 'url(images/possess/armor_2.png)';
            break;
        //骑士盾
        case 'Knight Shield':
            armor_name.innerText = '防具\n骑士盾';
            armor_img.style.backgroundImage = 'url(images/possess/armor_3.png)';
            break;
        //银盾
        case 'Silver Shield':
            armor_name.innerText = '防具\n银盾';
            armor_img.style.backgroundImage = 'url(images/possess/armor_4.png)';
            break;
        //铁盾
        case 'Iron Shield':
            armor_name.innerText = '防具\n铁盾';
            armor_img.style.backgroundImage = 'url(images/possess/armor_5.png)';
            break;
        //无
        case 'None':
            armor_name.innerText = '防具\n无';
            armor_img.style.backgroundImage = 'url(images/attribute/gray.png)';
            break;
        default :
            armor_name.innerText = '防具\n无';
            armor_img.style.backgroundImage = 'url(images/attribute/gray.png)';
            break;
    }
}

//刷新勇士的钥匙
function refresh_keys() {
    var container = document.getElementById("possess");
    var child = document.getElementById("keys");
    container.removeChild(child);

    var keys = document.createElement("div");
    keys.id = "keys";
    keys.setAttribute("class", "keys");
    container.appendChild(keys);

    var yellow_keys = warrior.yellow_key, blue_keys = warrior.blue_key, red_keys = warrior.red_key;
    var element;
    if (yellow_keys != 0 || blue_keys != 0 || red_keys != 0) {
        while (red_keys != 0) {
            element = document.createElement("div");
            element.setAttribute("class", "red_key");
            keys.appendChild(element);
            red_keys--;
        }
        while (blue_keys != 0) {
            element = document.createElement("div");
            element.setAttribute("class", "blue_key");
            keys.appendChild(element);
            blue_keys--;
        }
        while (yellow_keys != 0) {
            element = document.createElement("div");
            element.setAttribute("class", "yellow_key");
            keys.appendChild(element);
            yellow_keys--;
        }
    }
}

//初始化地图的墙、门、道具、怪物、NPC等其它资源
function init_others(map) {
    var element;
    for (var i = 0; i < SIZE; i++) {
        for (var j = 0; j < SIZE; j++) {
            element = document.createElement("div");
            switch (map[warrior.floor][i][j]) {
                /**
                 * 墙，门，楼梯
                 */
                case 2:     //墙
                    element.setAttribute("class", "resource_2");
                    break;
                case 3:
                    element.setAttribute("class", "resource_3");
                    break;
                case 4:
                    element.setAttribute("class", "resource_4");
                    break;
                case 5:     //黄门
                    element.setAttribute("class", "resource_5");
                    break;
                case 6:     //蓝门
                    element.setAttribute("class", "resource_6");
                    break;
                case 7:     //红门
                    element.setAttribute("class", "resource_7");
                    break;
                case 8:     //下一层楼梯
                    element.setAttribute("class", "resource_8");
                    break;
                case 9:     //上一层楼梯
                    element.setAttribute("class", "resource_9");
                    break;
                case 10:    //铁栅栏门
                    element.setAttribute("class", "resource_10");
                    break;
                case 11:    //魔法门(击败守卫的卫兵门自动打开)
                    element.setAttribute("class", "resource_11");
                    break;

                /**
                 *  怪物
                 */
                case 20:    //绿色史莱姆
                    element.setAttribute("class", "resource_20");
                    break;
                case 21:    //红色史莱姆
                    element.setAttribute("class", "resource_21");
                    break;
                case 22:    //大史莱姆
                    element.setAttribute("class", "resource_22");
                    break;
                case 23:    //史莱姆王
                    element.setAttribute("class", "resource_23");
                    break;
                case 24:    //小蝙蝠
                    element.setAttribute("class", "resource_24");
                    break;
                case 25:    //大蝙蝠
                    element.setAttribute("class", "resource_25");
                    break;
                case 26:    //红蝙蝠
                    element.setAttribute("class", "resource_26");
                    break;
                case 27:    //骷髅人
                    element.setAttribute("class", "resource_27");
                    break;
                case 28:    //骷髅武士
                    element.setAttribute("class", "resource_28");
                    break;
                case 29:    //骷髅队长
                    element.setAttribute("class", "resource_29");
                    break;
                case 30:    //初级法师
                    element.setAttribute("class", "resource_30");
                    break;
                case 31:    //高级法师
                    element.setAttribute("class", "resource_31");
                    break;
                case 32:    //麻衣法师
                    element.setAttribute("class", "resource_32");
                    break;
                case 33:
                    element.setAttribute("class", "resource_33");
                    break;
                case 34:
                    element.setAttribute("class", "resource_34");
                    break;
                case 35:
                    element.setAttribute("class", "resource_35");
                    break;
                case 36:
                    element.setAttribute("class", "resource_36");
                    break;
                case 37:    //初级卫兵
                    element.setAttribute("class", "resource_37");
                    break;
                case 38:    //中级卫兵
                    element.setAttribute("class", "resource_38");
                    break;
                case 39:    //高级卫兵
                    element.setAttribute("class", "resource_39");
                    break;

                /**
                 * NPC
                 */
                case 60:    //智者(老人)
                    element.setAttribute("class", "resource_60");
                    break;
                case 61:    //商人
                    element.setAttribute("class", "resource_61");
                    break;
                case 62:    //小偷
                    element.setAttribute("class", "resource_62");
                    break;
                case 63:    //魔王(第三层出现，只会触发对话)
                    element.setAttribute("class", "resource_63");
                    //默认隐藏，仍然占用空间
                    document.getElementById("7#5").style.visibility = "hidden";
                    break;
                case 64:    //魔法警卫(第三层出现，只会触发对话)
                    element.setAttribute("class", "resource_64");
                    break;
                case 65:    //商店(加血量、攻击力、防御力)(第一部分)
                    element.setAttribute("class", "resource_65");
                    break;
                case 66:    //商店(加血量、攻击力、防御力)(第二部分)
                    element.setAttribute("class", "resource_66");
                    break;
                case 67:    //商店(加血量、攻击力、防御力)(第三部分)
                    element.setAttribute("class", "resource_67");
                    break;
                case 68:    //公主
                    break;

                /**
                 * 道具
                 */
                case 80:    //黄钥匙
                    element.setAttribute("class", "resource_80");
                    break;
                case 81:    //蓝钥匙
                    element.setAttribute("class", "resource_81");
                    break;
                case 82:    //红钥匙
                    element.setAttribute("class", "resource_82");
                    break;
                case 83:    //红药水
                    element.setAttribute("class", "resource_83");
                    break;
                case 84:    //蓝药水
                    element.setAttribute("class", "resource_84");
                    break;
                case 85:    //红宝石
                    element.setAttribute("class", "resource_85");
                    break;
                case 86:    //蓝宝石
                    element.setAttribute("class", "resource_86");
                    break;
                case 87:    //铁剑
                    element.setAttribute("class", "resource_87");
                    break;
                case 88:    //铁盾
                    element.setAttribute("class", "resource_88");
                    break;
                case 89:    //银剑
                    break;
                case 90:    //银盾
                    break;
                case 91:    //骑士剑
                    break;
                case 92:    //骑士盾
                    break;
                case 93:    //圣剑
                    break;
                case 94:    //圣盾
                    break;
                case 95:    //神圣剑
                    break;
                case 96:    //神圣盾
                    break;
                case 97:    //怪物手册
                    break;
                case 98:    //记事本
                    element.setAttribute("class", "resource_98");
                    break;
                default:
                    break;
            }
            if (map[warrior.floor][i][j] != 1) {
                var container = document.getElementById(i + "#" + j);
                container.appendChild(element);
            }
        }
    }
}

var warrior = new warrior();
var monster = new monster();
init(map);