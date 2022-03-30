// Создать объект с такой структурой:

// obj = {
//     x: 10,
//     y: 20,
//     inner: {
//         x: 20,
//         z: 30
//     },
//     foo2: {
//         k: 23,
//         p: 13
//     }
// } 

// Написать функцию convert(obj), которая получает аргументом obj. Функция должна вернуть новый объект вида:

// newObj = {
//     x: 20,
//     y: 20,
//     z: 30,
//     k: 23,
//     p: 13
// }

let obj = {};
obj.x = 10;
obj.y = 20;

obj.inner = {};
obj.inner.x = 20;
obj.inner.z = 30;

obj.foo2 = {};
obj.foo2.k = 23;
obj.foo2.p = 13;

console.log(obj); // {x: 10, y: 20, inner: {…}, foo2: {…}}
                // foo2: {k: 23, p: 13}
                // inner: {x: 20, z: 30}
                // x: 10
                // y: 20

function convert(obj) {
    let newObj = {};
    for (let key in obj) {
         if(typeof obj[key] === 'object') {
            let innerObj = obj[key]; // {x: 20, z: 30}
            for (let key in innerObj) {
                let innerObjValue = innerObj[key];
                let innerObjIndex = key;
                console.log(innerObjIndex, innerObjValue); // x 20, z 30, ...
                newObj[innerObjIndex] = innerObjValue;
            }
         } else {
            newObj[key] = obj[key]
         }
    }
    return newObj;
}

console.log(convert(obj));
