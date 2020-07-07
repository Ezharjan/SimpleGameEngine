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
}




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


