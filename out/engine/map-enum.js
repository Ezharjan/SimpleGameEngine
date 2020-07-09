"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1为路 0为墙 21石堆 22为门 3为人物 4x为怪物 5x为楼梯 6x为增益道具 67炸弹 68钥匙
var GameMap;
(function (GameMap) {
    GameMap[GameMap["road"] = 1] = "road";
    GameMap[GameMap["wall"] = 0] = "wall";
    GameMap[GameMap["border"] = 9] = "border";
    GameMap[GameMap["stones"] = 21] = "stones";
    GameMap[GameMap["door"] = 22] = "door";
    GameMap[GameMap["charactor"] = 3] = "charactor";
    GameMap[GameMap["monster"] = 40 || 41 || 42 || 43 || 44 || 45 || 46 || 47 || 48 || 49] = "monster";
    GameMap[GameMap["stairs"] = 50 || 51 || 52 || 53 || 54 || 55 || 56 || 57 || 58 || 59] = "stairs";
    GameMap[GameMap["tools"] = 60 || 61 || 62 || 63 || 64 || 66 || 66 || 69] = "tools";
    GameMap[GameMap["key"] = 68] = "key";
    GameMap[GameMap["bomb"] = 67] = "bomb";
})(GameMap = exports.GameMap || (exports.GameMap = {}));
