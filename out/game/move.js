//键盘监听(控制勇士移动等)
window.addEventListener("keydown", function (event) {
    var dx = 0, dy = 0;
    switch (event.which) {
        case 87: //W-上
            dx = -1;
            dy = 0;
            break;
        case 83: //S-下
            dx = 1;
            dy = 0;
            break;
        case 65: //A-左
            dx = 0;
            dy = -1;
            break;
        case 68: //D-右
            dx = 0;
            dy = 1;
            break;
        case 90: //Z-存档
            save();
            break;
        case 88: //X-读档
            load();
            break;
        case 67: //C-重新开始
            restart();
            break;
        case 49: //1-怪物手册
            if (warrior.handlebook) {
                handbook();
            }
            break;
        case 50: //2-
            break;
        case 51: //3-
            break;
        case 81: //Q-
            break;
        case 69: //E-
            break;
        default:
            break;
    }
    if (dx == 0 && dy == 0) {
        return;
    }
    var x = warrior.x + dx, y = warrior.y + dy;
    if (warrior.can_move && x >= 0 && x < SIZE && y >= 0 && y < SIZE && map[warrior.floor][x][y] != 2) {
        switch (map[warrior.floor][x][y]) {
            case 1:
                to_road(warrior.x, warrior.y);
                to_warrior(x, y);
                break;
            case 5:
                if (warrior.yellow_key > 0) {
                    to_road(warrior.x, warrior.y);
                    to_warrior(x, y);
                    warrior.yellow_key--;
                    refresh_keys();
                }
                break;
            case 6:
                if (warrior.blue_key > 0) {
                    to_road(warrior.x, warrior.y);
                    to_warrior(x, y);
                    warrior.blue_key--;
                    refresh_keys();
                }
                break;
            case 7:
                if (warrior.red_key > 0) {
                    to_road(warrior.x, warrior.y);
                    to_warrior(x, y);
                    warrior.red_key--;
                    refresh_keys();
                }
                break;
            case 8:
                upstairs();
                break;
            case 9:
                downstairs();
                break;
            case 20:
            case 21:
            case 24:
            case 27:
            case 28:
            case 30:
                init_monster(map[warrior.floor][x][y]);
                var damage = attack(warrior, monster);
                if (damage != Infinity) {
                    warrior.dp -= damage;
                    warrior.gold += monster.gold;
                    to_road(warrior.x, warrior.y);
                    to_warrior(x, y);
                }
                break;
            case 60:
                if (warrior.floor == 3 && x == 4 && y == 11) { //触发第二层智者事件(得到怪物手册)
                    sage();
                }
                break;
            case 62:
                if (warrior.floor == 2 && x == 7 && y == 3) { //触发第二层小偷事件
                    thief();
                }
                break;
            case 66: //商店
                store();
                break;
            case 80:
                to_road(warrior.x, warrior.y);
                to_warrior(x, y);
                warrior.yellow_key++;
                refresh_keys();
                break;
            case 81:
                to_road(warrior.x, warrior.y);
                to_warrior(x, y);
                warrior.blue_key++;
                refresh_keys();
                break;
            case 82:
                to_road(warrior.x, warrior.y);
                to_warrior(x, y);
                warrior.red_key++;
                refresh_keys();
                break;
            case 83:
                to_road(warrior.x, warrior.y);
                to_warrior(x, y);
                warrior.dp += 50;
                break;
            case 84:
                to_road(warrior.x, warrior.y);
                to_warrior(x, y);
                warrior.dp += 200;
                break;
            case 85:
                to_road(warrior.x, warrior.y);
                to_warrior(x, y);
                warrior.attack += 1;
                break;
            case 86:
                to_road(warrior.x, warrior.y);
                to_warrior(x, y);
                warrior.defense += 1;
                break;
            case 87:
                to_road(warrior.x, warrior.y);
                to_warrior(x, y);
                warrior.attack += 10;
                warrior.weapon = 'Iron Sword';
                break;
            case 88:
                to_road(warrior.x, warrior.y);
                to_warrior(x, y);
                warrior.defense += 10;
                warrior.armor = 'Iron Shield';
                break;
            case 89:
                to_road(warrior.x, warrior.y);
                to_warrior(x, y);
                warrior.attack += 20;
                warrior.weapon = 'Silver Sword';
                break;
            case 90:
                to_road(warrior.x, warrior.y);
                to_warrior(x, y);
                warrior.defense += 20;
                warrior.armor = 'Silver Shield';
                break;
            case 91:
                to_road(warrior.x, warrior.y);
                to_warrior(x, y);
                warrior.attack += 40;
                warrior.weapon = 'Knight Sword';
                break;
            case 92:
                to_road(warrior.x, warrior.y);
                to_warrior(x, y);
                warrior.defense += 40;
                warrior.armor = 'Knight Shield';
                break;
            case 93:
                to_road(warrior.x, warrior.y);
                to_warrior(x, y);
                warrior.attack += 50;
                warrior.weapon = 'Holy Sword';
                break;
            case 94:
                to_road(warrior.x, warrior.y);
                to_warrior(x, y);
                warrior.defense += 50;
                warrior.armor = 'Holy Shield';
                break;
            case 95:
                to_road(warrior.x, warrior.y);
                to_warrior(x, y);
                warrior.attack += 100;
                warrior.weapon = 'Sacred Sword';
                break;
            case 96:
                to_road(warrior.x, warrior.y);
                to_warrior(x, y);
                warrior.defense += 100;
                warrior.armor = 'Sacred Shield';
                break;
            default:
                break;
        }
        //第三层魔王事件触发(只触发第一次)
        if (map[3][7][5] == 63 && warrior.floor == 3 && warrior.x == 9 && warrior.y == 5) {
            devil();
        }
        refresh_attribute();
        refresh_weapon();
    }
    //暗墙(某些特殊的墙可以被破开)
    if (warrior.can_move && map[warrior.floor][x][y] == 2 &&
        ((warrior.floor == 5 && x == 11 && y == 9) || (warrior.floor == 9 && x == 5 && y == 10))) { //第5层，第9层
        to_road(warrior.x, warrior.y);
        to_warrior(x, y);
    }
});
//成功移动后目的地变成勇士
function to_warrior(x, y) {
    var id = x + "#" + y;
    var element = document.createElement("div");
    element.setAttribute("class", "warrior");
    var container = document.getElementById(id);
    if (container.firstChild != null) {
        container.removeChild(container.firstChild);
    }
    container.appendChild(element);
    warrior.x = x;
    warrior.y = y;
}
//成功移动后目的地变成小偷
function to_thief(x, y) {
    var id = x + "#" + y;
    var element = document.createElement("div");
    element.setAttribute("class", "resource_62");
    var container = document.getElementById(id);
    if (container.firstChild != null) {
        container.removeChild(container.firstChild);
    }
    container.appendChild(element);
}
//成功移动后出发地变成路
function to_road(x, y) {
    var id = x + "#" + y;
    var container = document.getElementById(id);
    container.removeChild(container.firstChild);
    map[warrior.floor][x][y] = 1;
}
