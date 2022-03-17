// Задача: необходимо написать функцию, которая принимает на вход три аргумента: два числа и название операции, которую нужно выполнить с этими числами. Допустимые варианты операции: `+`, `-`, `*`, `/`. Функция должна вернуть результат работы операции в виде строки: `${a} ${operationName} ${b} = ${operationResult}`. Пример: `10 / 2 = 5`.
// ТЗ:

// Запрашиваем у пользователя название математической операции. Допустимые варианты: `+`, `-`, `*`, `/`. Если пользователь вводит недопустимую операцию – продолжаем запрашивать.
// Запрашиваем у пользователя значение переменной a. Значение переменной должно быть числом (0 – так же допустимое число). Если пользователь вводить не число, или нажимает Отмена – продолжаем запрос.
// Запрашиваем у пользователя значение переменной b. Значение переменной должно быть числом (0 – так же допустимое число). Но, если ранее пользователь выбрал операцию `/`, то значение переменной b не должно быть равным 0. Если пользователь вводить не число, или нажимает Отмена, или при выбранной ранее операции `/` вводит для b значение 0 – продолжаем запрос.
// Создаем функцию, например calculation, которая принимает на вход значения переменных a, b, operationName. В зависимости от значения переменной operationName (`+`, `-`, `*`, `/`) производим с переменными a и b соответствующую математическую операцию. Функция должна вернуть результат работы операции в виде строки: `${a} ${operationName} ${b} = ${operationResult}`. Пример: `10 / 2 = 5`.
// Важно: каждая математическая операция должна быть оформлена в виде отдельной функции, которая принимает на вход два аргумента и возвращает результат соответствующего математического действия.

let operator;
const OPERATORS = ['+', '-', '*', '/'];
let numberA;
let numberB;
let result;

do {
operator = prompt(`Please enter operator +, or -, or *, or /`, `+`);
	if (operator) {
	operator = operator.replaceAll(' ', '');
}
} while (operator === null || OPERATORS.indexOf(operator) === -1);

do {
	numberA = prompt(`Please enter number A`, 5);
	if (typeof numberA === 'string' && numberA !== '') {
		numberA = numberA.replaceAll(' ', '');
		numberA = Number(numberA);
	} else {
		alert(`Please type correct value!`)
	};
} while (isNaN(numberA) || numberA === null || numberA === '');

do {
	numberB = prompt(`Please enter number B`, 5);
	if (typeof numberB === 'string' && numberB !== '') {
		numberB = numberB.replaceAll(' ', '');
		numberB = Number(numberB);
	} else {
		alert(`Please type correct value!`);
	}
	if (operator === '/' && numberB === 0) {
		alert(`You can't divide by 0, please enter another value!`);
		numberB = +prompt(`Please enter number B`, 5);
	}
} while (isNaN(numberB) || numberB === null || numberB === '');


function calculation() {
	operator === '+' && sum();
	operator === '-' && differ(); 
	operator === '*' && multiply(); 
	operator === '/' && division();
	document.write(`<p>${numberA} ${operator} ${numberB} = ${result}</p>`);
}

function sum() {
	result = numberA + numberB;
};

function differ() {
	result = numberA - numberB;
};

function multiply() {
	result = numberA * numberB;
};

function division() {
	result = (numberA / numberB);
	result = result.toFixed(2);
};

calculation(numberA, numberB, operator);
