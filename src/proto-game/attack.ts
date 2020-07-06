//攻击
function attack(warrior, monster) {
    if (warrior.defense >= monster.attack) {    //"防杀":勇士防御力>=怪物攻击力
        return 0;
    }
    if (!monster.attack_first && warrior.attack - monster.defense >= monster.dp) {   //"攻杀":勇士攻击力-怪物防御力>=怪物血量
        return 0;
    }
    if (warrior.attack <= monster.defense) {    //"怪物不可攻击":勇士攻击力<=怪物防御力
        return Infinity;
    }

    var attack_times = Math.ceil(monster.dp / (warrior.attack - monster.defense));
    var attacked_times = monster.attack_first ? attack_times : (attack_times - 1);
    var damage = attacked_times * (monster.attack - warrior.defense);

    return (warrior.dp <= damage) ? Infinity : damage;
}