// let playerData = new PrefStorageSystem('./player.db');
// playerData.insert(
//     [
//         { name: 'life', value: 100 },
//         { name: 'ability', value: 10 },
//         { name: 'keys', value: 0 },
//         { name: 'bombs', value: 0 },
//         { name: 'coins', value: 0 },
//     ]
// );
// function updataData(oldValueName: string, value: number) {
//     playerData.findOne({
//         name: oldValueName
//     }, (err, ret) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log(ret);
//         playerData.updateOne({
//             name: oldValueName
//         }, {
//             name: oldValueName,
//             value: value
//         });
//     });
// }
function initializePlayerData(keys, values) {
    for (let i = 0; i < values.length; i++) {
        localStorage.setItem(keys[i], values[i]);
    }
}
// initializePlayerData(["life", "ability", "keys", "bombs", "coins"], ["100", "10", "0", "0", "0"]);
const initPlayerData = function () {
    localStorage.setItem("life", "100");
    localStorage.setItem("ability", "10");
    localStorage.setItem("keys", "0");
    localStorage.setItem("bombs", "0");
    localStorage.setItem("coins", "0");
};
/* class PlayerData {
    static updatePlayerData(key: string, value) {
        console.log(localStorage.getItem(key))
        localStorage.getItem(key) && localStorage.removeItem(key);
        localStorage.setItem(key, value.toString());
    }
} */
/* function updatePlayerData(key: string, value) {
    console.log(localStorage.getItem(key))
    localStorage.getItem(key) && localStorage.removeItem(key);
    localStorage.setItem(key, value.toString());
}
 */
let clickPosX = 0;
let clickPosY = 0;
window.onmousedown = function (e) {
    // console.log(e);
    console.log("Rubina X: " + e.offsetX);
    console.log("Rubina Y: " + e.offsetY);
    clickPosX = e.offsetX;
    clickPosY = e.offsetY;
    checkClickPosition(() => {
        // console.error("Button Clicked");
        window.location.href = "./index.html";
    });
};
window.onmouseup = function (e) {
    clickPosX = 0;
    clickPosY = 0;
};
function checkClickPosition(callback) {
    if (clickPosX >= 66 && (clickPosX <= 212) &&
        clickPosY >= 608 && (clickPosY <= 655)) {
        callback && callback();
        console.log("Back button clicked!");
        window.event.returnValue = false;
        //
        // loadPage("./firstPage.html");
    }
    // if (clickPosX >= rectStartBTN.posX && clickPosX < rectStartBTN.posX + rectStartBTN.width &&
    //     clickPosY >= rectStartBTN.poxY && clickPosY < rectStartBTN.posY + rectStartBTN.height) {
    //     console.error("Start button Clicked");
    // }
    // if (clickPosX >= rectHelpBTN.posX && clickPosX <= rectHelpBTN.posX + rectHelpBTN.width &&
    //     clickPosY >= rectHelpBTN.poxY && clickPosY <= rectHelpBTN.posY + rectHelpBTN.height) {
    //     console.error("Help button Clicked");
    // }
}
