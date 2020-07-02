//第三层魔王事件
function devil() {
    //禁止勇士移动
    warrior.can_move = false;

    //魔王出现
    document.getElementById("7#5").style.visibility = "visible";

    //设置0.5秒延迟
    setTimeout(function () {
        //魔法警卫出现
        var id = ["8#5", "10#5", "9#4", "9#6"];
        var element;
        for (var i = 0; i < id.length; i++) {
            element = document.createElement("div");
            element.setAttribute("class", "resource_64");
            var container = document.getElementById(id[i]);
            container.appendChild(element);
        }
    }, 500);

    //设置1秒延迟
    setTimeout(function () {
        //魔王及魔法警卫消失
        to_road(7, 5);
        to_road(8, 5);
        to_road(10, 5);
        to_road(9, 4);
        to_road(9, 6);

        //勇士被关入二层监狱(神圣剑，神圣盾被夺走，血量变成400)
        warrior.floor = 2;
        warrior.x = 8;
        warrior.y = 3;
        warrior.dp = 400;
        warrior.attack = 10;
        warrior.defense = 10;
        warrior.weapon = 'None';
        warrior.armor = 'None';
        warrior.can_move = true;

        re_init(map);
    }, 1 * 1000);
}

//第二层小偷事件
function thief() {
    //禁止勇士移动
    warrior.can_move = false;

    //挖墙
    to_thief(7, 2);
    to_road(7, 3);
    setTimeout(function () {
        to_thief(7, 1);
        to_road(7, 2);
    }, 1000);
    setTimeout(function () {
        to_thief(8, 1);
        to_road(7, 1);
    }, 1000);
    setTimeout(function () {
        to_thief(9, 1);
        to_road(8, 1);
    }, 1000);
    setTimeout(function () {
        to_thief(10, 1);
        to_road(9, 1);
    }, 1000);
    setTimeout(function () {
        to_road(10, 1);
    }, 1000);

    warrior.can_move = true;
}

//第二层智者事件
function sage() {
    //获得怪物手册
    warrior.handlebook = true;
    to_road(4, 11);
}

//商店
function store() {
    var store = document.getElementById("store");
    store.style.display = 'block';
}

//商店选项一:提升血量
function increase_dp() {
    warrior.dp += 100;
    warrior.gold -= 20;

    var store = document.getElementById("store");
    store.style.display = 'none';
    refresh_attribute();
}

//商店选项二:提升攻击力
function increase_attack() {
    warrior.attack += 2;
    warrior.gold -= 20;

    var store = document.getElementById("store");
    store.style.display = 'none';
    refresh_attribute();
}

//商店选项三:提升防御力
function increase_defense() {
    warrior.defense += 4;
    warrior.gold -= 20;

    var store = document.getElementById("store");
    store.style.display = 'none';
    refresh_attribute();
}

//商店选项四:下次再说
function thanks() {
    var store = document.getElementById("store");
    store.style.display = 'none';
    refresh_attribute();
}