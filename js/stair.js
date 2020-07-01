//上楼
function upstairs() {
    var floor = warrior.floor++;
    switch (floor) {
        case 0:
            warrior.x = 11;
            warrior.y = 6;
            break;
        case 1:
            warrior.x = 2;
            warrior.y = 1;
            break;
        case 2:
            warrior.x = 11;
            warrior.y = 2;
            break;
        case 3:
            warrior.x = 10;
            warrior.y = 11;
            break;
        case 4:
            warrior.x = 11;
            warrior.y = 2;
            break;
        case 5:
            warrior.x = 2;
            warrior.y = 1;
            break;
        case 6:
            warrior.x = 10;
            warrior.y = 11;
            break;
        case 7:
            warrior.x = 2;
            warrior.y = 1;
            break;
        case 8:
            warrior.x = 2;
            warrior.y = 6;
            break;
        case 9:
            warrior.x = 10;
            warrior.y = 1;
            break;
        default:
            break;
    }
    re_init(map);
}

//下楼
function downstairs() {
    var floor = warrior.floor--;
    switch (floor) {
        // case 1:
        //     warrior.x = 11;
        //     warrior.y = 6;
        //     break;
        case 2:
            warrior.x = 1;
            warrior.y = 2;
            break;
        case 3:
            warrior.x = 10;
            warrior.y = 1;
            break;
        case 4:
            warrior.x = 11;
            warrior.y = 10;
            break;
        case 5:
            warrior.x = 10;
            warrior.y = 1;
            break;
        case 6:
            warrior.x = 2;
            warrior.y = 1;
            break;
        case 7:
            warrior.x = 10;
            warrior.y = 11;
            break;
        case 8:
            warrior.x = 2;
            warrior.y = 1;
            break;
        case 9:
            warrior.x = 2;
            warrior.y = 6;
            break;
        case 10:
            warrior.x = 10;
            warrior.y = 1;
            break;
        default:
            break;
    }
    re_init(map);
}