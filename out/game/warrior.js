/* //勇士
class Warrior {
    dp: any;
    attack: any;
    defense: any;
    gold: any;
    yellow_key: any;
    blue_key: any;
    red_key: any;
    x: any;
    y: any;
    floor: any;
    can_move: any;
    handlebook: any;
    weapon: any;
    armor: any;

    constructor() {
        this.dp = 1000;   //血量
        this.attack = 100;   //攻击力
        this.defense = 100;  //防御力
        this.gold = 0;   //金钱
        this.yellow_key = 0; //黄钥匙
        this.blue_key = 0;   //蓝钥匙
        this.red_key = 0;    //红钥匙
        this.x = 11;  //横坐标
        this.y = 6;      //纵坐标
        this.floor = 1;  //层数
        this.can_move = true;   //能否移动(某些特殊情况禁止勇士移动)
        this.handlebook = false;    //是否拥有怪物手册
        this.weapon = 'Sacred Sword';     //武器:'Sacred Sword'|'Holy Sword'|'Knight Sword'|'Silver Sword'|'Iron Sword'|'None'
        this.armor = 'Sacred Shield';     //防具:'Sacred Shield'|'Holy Shield'|'Knight Shield'|'Silver Shield'|'Iron Shield'|'None'
    }
}

export const warrior = new Warrior();
*/
function Warrior() {
    this.dp = 1000; //血量
    this.attack = 100; //攻击力
    this.defense = 100; //防御力
    this.gold = 0; //金钱
    this.yellow_key = 0; //黄钥匙
    this.blue_key = 0; //蓝钥匙
    this.red_key = 0; //红钥匙
    this.x = 11; //横坐标
    this.y = 6; //纵坐标
    this.floor = 1; //层数
    this.can_move = true; //能否移动(某些特殊情况禁止勇士移动)
    this.handlebook = false; //是否拥有怪物手册
    this.weapon = 'Sacred Sword'; //武器:'Sacred Sword'|'Holy Sword'|'Knight Sword'|'Silver Sword'|'Iron Sword'|'None'
    this.armor = 'Sacred Shield'; //防具:'Sacred Shield'|'Holy Shield'|'Knight Shield'|'Silver Shield'|'Iron Shield'|'None'
}
