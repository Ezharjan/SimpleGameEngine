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
