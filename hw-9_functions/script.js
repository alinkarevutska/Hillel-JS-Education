// Дано три массива animals, food, universes.

// Задача:

// Написать функцию getInfo, которая принимает на вход два параметра: массив и заглавие таблицы. Вызов данной функции выглядит так: getInfo(animals, `Animals`), getInfo(food, `Food`), getInfo(universes, `Universes`).
// Функция должна вывести в body таблицу, в которой в качестве tr выводится информация по каждому элементу переданного массива. Внешний вид таблицы должен выглядеть так:
// <table>
// 	<caption>Animals info</caption>
// 	<tbody>
// 		<tr>
// 			<td>🐭</td>
// 			<td>mouse</td>
// 			<td>Jerry</td>
// 		</tr>
// 		<tr>
// 			<td>🐹</td>
// 			<td>hamster</td>
// 			<td>Biscuit</td>
// 		</tr>
// 	</tbody>
// </table>
// Если при вызове функции getInfo переданный массив, например universes, в качестве третьего аргумента содержит также массив, например ['🖤', 'DC', ['Superman', 'Batman', 'Wonder Woman']], то все элементы этого массива ['Superman', 'Batman', 'Wonder Woman'] должны выводится в таблицу через символ точка с запятой "; " Например:
// <tr>
//    <td>🖤</td>
//    <td>DC</td>
//    <td>Superman; Batman; Wonder Woman</td>
// </tr>
// Название таблицы должно выводиться в тэге caption и состоять из слова, которое передается при вызове функции в качестве второго аргумента, например getInfo(animals, `Animals`), и слова info. Пример: getInfo(animals, `Animals`) => заглавие таблицы будет <caption>Animals info</caption>

animals = [
	['🐭','mouse','Jerry'],
	['🐹','hamster','Biscuit'],
	['🐰','rabbit','Bugs'],
	['🦊','fox','Mrs. Fox'],
	['🐻','bear','Paddington']
];

food = [
	['🍎','apple',10],
	['🍐','pear',12],
	['🍊','tangerine',15],
	['🍋','lemon',5],
	['🍌','banana',7]
];

universes = [
	['🖤', 'DC', 
	['Superman', 'Batman', 'Wonder Woman']],
	['❤️', 'Marvel', 
	['Iron Man', 'the Hulk', 'Black Widow']]
]
function getInfo(array, caption) {
	document.write(`<table><caption>${caption} info</caption><tbody>`);
	for (i=0; i <array.length; i++) {
		document.write(`
				<tr>`);
			for(j=0; j<array[i].length; j++) {
				if (Array.isArray(array[i][j]))	{
					str = array[i][j].join('; ');
					document.write(`
				<td>${str}</td>`);
				} else {
					document.write(`
					<td>${array[i][j]}</td>`);
				}
				
			}
			document.write(`</tr>`);
	}
	document.write(`</tbody></table>
	<br>`);
}

getInfo(animals, 'Animals');
getInfo(food, 'Food');
getInfo(universes, 'Universes');
