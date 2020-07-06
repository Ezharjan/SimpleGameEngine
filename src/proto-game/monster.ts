//怪物
function Monster() {
    this.id = 0;   //id
    this.dp = 0;    //血量
    this.attack = 0;    //攻击力
    this.defense = 0;   //防御力
    this.gold = 0;  //击败后获得的金钱（不计算幸运金币）
    this.attack_first = 0;  //先手攻击
}

var monster = new Monster();

//根据id初始化怪物的属性
function init_monster(id) {
    monster.id = id;
    switch (id) {
        case 20:    //绿色史莱姆
            monster.dp = 35;
            monster.attack = 18;
            monster.defense = 1;
            monster.gold = 1;
            monster.attack_first = false;
            break;
        case 21:    //红色史莱姆
            monster.dp = 45;
            monster.attack = 20;
            monster.defense = 2;
            monster.gold = 2;
            monster.attack_first = false;
            break;
        case 24:    //小蝙蝠
            monster.dp = 35;
            monster.attack = 38;
            monster.defense = 3;
            monster.gold = 3;
            monster.attack_first = false;
            break;
        case 27:    //骷髅人
            monster.dp = 50;
            monster.attack = 42;
            monster.defense = 6;
            monster.gold = 6;
            monster.attack_first = false;
            break;
        case 28:    //骷髅武士
            monster.dp = 55;
            monster.attack = 52;
            monster.defense = 12;
            monster.gold = 8;
            monster.attack_first = false;
            break;
        case 29:    //骷髅队长
            monster.dp = 100;
            monster.attack = 65;
            monster.defense = 15;
            monster.gold = 30;
            monster.attack_first = false;
            break;
        case 30:    //初级法师
            monster.dp = 60;
            monster.attack = 32;
            monster.defense = 8;
            monster.gold = 5;
            monster.attack_first = false;
            break;
        case 37:    //初级卫兵
            monster.dp = 50;
            monster.attack = 48;
            monster.defense = 22;
            monster.gold = 12;
            monster.attack_first = false;
            break;
        case 38:    //中级卫兵
            monster.dp = 100;
            monster.attack = 180;
            monster.defense = 110;
            monster.gold = 100;
            monster.attack_first = false;
            break;
        case 39:    //高级卫兵
            monster.dp = 180;
            monster.attack = 460;
            monster.defense = 360;
            monster.gold = 200;
            monster.attack_first = false;
            break;
        default:
            monster.dp = 35;
            monster.attack = 18;
            monster.defense = 1;
            monster.gold = 100;
            monster.attack_first = false;
            break;
    }
}