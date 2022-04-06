// Необходимо отрендерить в виде двух отдельных списков данные о продуктах.
// Дано два массива vegetables и fruits.
// Задача:
// Создаем объект Product с двумя функциями:
// getPrice() – функция возвращает цену товара в зависимости от того, является ли он сезонным или нет. Если у товара есть свойство season, то цена товара считается по формуле price*seasonKoef, где seasonKoef – коэффициент сезонности для фрукта или овоща.
// getInfo() – функция возвращает строку вида `Product: 🍅 tomato. Type: Vegetable. Price: $2.99.`.
// От объекта Product порождаем два объекта:
// Объект Vegetable. Добавляем объекту два свойства: type = `Vegetable`; и seasonKoef = 1.3;
// Объект Fruit. Добавляем объекту два свойства: type = `Fruit`; и seasonKoef = 2;
// Создаем функцию makePrototype(arr, objectProto) которая принимает на вход два параметра: arr – массив и objectProto – объект, который будет прототипом для всех объектов массива. Например: makePrototype(vegetables, Vegetable) и makePrototype(fruits, Fruit); Функция должна вернуть массив, в котором все объекты входящего массива arr имеют в прототипе объект objectProto.
// Создаем функцию renderList(arr), которая принимает на вход массив и возвращает отренедеренный массив в виде списка. Для каждого элемента массива применяется функция getInfo().

const vegetables = [
    {
        name: `tomato`,
        icon: `🍅`,
        price: 2.3
    },
    {
        name: `carrot`,
        icon: `🥕`,
        price: 1.5
    },
    {
        name: `corn`,
        icon: `🌽`,
        price: 2.78,
        season: true
    }
];

const fruits = [
    {
        name: `watermelon`,
        icon: `🍉`,
        price: 7.7,
        season: true
    },
    {
        name: `cherries`,
        icon: `🍒`,
        price: 8.5,
        season: true
    },
    {
        name: `pineapple`,
        icon: `🍍`,
        price: 9.8
    }
];

const Product = {
    getPrice(){
    return this.season ? this.price*this.seasonKoef : this.price;
    },
    getInfo() {
        return `Product: ${this.icon} ${this.name}. Type: ${this.type}. Price: $${this.getPrice()}.`
    }
}

const Vegetable = Object.create(Product);
Vegetable.type = `Vegetable`;
Vegetable.seasonKoef = 1.3;

const Fruit = Object.create(Product);
Fruit.type = `Fruit`;
Fruit.seasonKoef = 2;

console.log(Vegetable);
console.log(Fruit);


function makePrototype(arr, objectProto) {
    return arr.map(item => {
        let newArr = Object.create(objectProto);

        for (let key in item) {
            newArr[key] = item[key];
        };
        return newArr;
    });
};

const renderList = arr => {
    let LIs = arr.map(product => `<li>${product.getInfo()}</li>`)
                .join('');
    return `<ul>${LIs}</ul>`;
};

document.write( renderList (makePrototype(fruits, Fruit)));
document.write( renderList (makePrototype(vegetables, Vegetable)));
