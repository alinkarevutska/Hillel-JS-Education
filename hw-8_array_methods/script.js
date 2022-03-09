// Задача:

// 1. С массива sports с помощью метода .slice() скопировать в новый массив summer_sports массивы, которые относятся к летним видам спорта.

// 2. С массива sports с помощью метода .slice() скопировать в новый массив winter_sports массивы, которые относятся к зимним видам спорта.

// 3. С полученных массивов summer_sports и winter_sports вырезать в новый массив fruits те массивы, которые относятся к фруктам.

// 4. Вывести все элементы полученных массивов summer_sports, winter_sports, fruits в консоль в виде, который изображен на рисунке console.png.

sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];
empty = `   `;
stars = `***`;

winter_sports = sports.slice(0, 5);
fruits_2 = winter_sports.splice(2, 1);
console.log(`${stars} Winter sports ${stars}`);
for (i=0; i < winter_sports.length; i++) {
    winterSports = winter_sports[i].join().replaceAll(',', ': ');
    console.log(winterSports);
};
console.log(empty);

summer_sports = sports.slice(5);
fruits_1 = summer_sports.splice(2,2);
console.log(`${stars} Summer sports ${stars}`);

for (i=0; i < summer_sports.length; i++) {
    summerSports = summer_sports[i].join().replaceAll(',', ': ');
    console.log(summerSports);
};
console.log(empty);

fruits = fruits_2.concat(fruits_1);
console.log(`${stars} Fruits ${stars}`);
for (i=0; i < fruits.length; i++) {
    fruitsType = fruits[i].join().replaceAll(',', ': ');
    console.log(fruitsType);
};
