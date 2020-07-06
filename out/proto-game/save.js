//存档
function save() {
    //对象存入localStorage先转化为JSON串
    localStorage.setItem('map', JSON.stringify(map));
    localStorage.setItem('warrior', JSON.stringify(warrior));
    var tips = document.getElementById("tips");
    tips.innerText = '游戏数据 保存成功';
    setTimeout(function () {
        tips.innerText = 'SPACE-帮助 Z-保存游戏 X-载入存档 C-重新开始';
    }, 1 * 1000);
}
//读档
function load() {
    var save_map = JSON.parse(localStorage.getItem('map'));
    var save_warrior = JSON.parse(localStorage.getItem('warrior'));
    var tips = document.getElementById("tips");
    if (save_map == null || save_warrior == null) {
        tips.innerText = '没有存档';
    }
    else {
        map = save_map;
        warrior = save_warrior;
        re_init(map);
        tips.innerText = '游戏数据 已成功读取';
    }
    setTimeout(function () {
        tips.innerText = 'SPACE-帮助 Z-保存游戏 X-载入存档 C-重新开始';
    }, 1 * 1000);
}
//重新开始，清除存档
function restart() {
    localStorage.clear();
    location.reload();
    var tips = document.getElementById("tips");
    tips.innerText = '存档已清除 重新开始';
    setTimeout(function () {
        tips.innerText = 'SPACE-帮助 Z-保存游戏 X-载入存档 C-重新开始';
    }, 1 * 1000);
}
