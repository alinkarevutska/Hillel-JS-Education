// Необходимо запросить у юзера товары с меню и вывести в body список со всеми выбранными продуктами и общую сумму заказа.

// 1. Запрашиваем у юзера вид булки `Hamburger or Cheeseburger`.

// 1.1. Если юзер вводит `Hamburger`, то к общей стоимости заказа прибавляем $10.

// 1.2 Если юзер вводит `Cheeseburger`, то к общей стоимости заказа прибавляем $15.

// 1.2.1 Предлагаем пользователю добавить Double cheese `Would you like double cheese?`.

// 1.2.1.1 Если пользователь соглашается на Double cheese, то к общей стоимости заказа прибавляем $5.

// 1.3 Если юзер ввел не Hamburger, и не Cheeseburger, то продолжаем запрашивать название булки до тех пор, пока юзер не введет либо Hamburger, либо Cheeseburger.



// 2. Предлагаем пользователю добавить к заказу картошку `Would you like potato?`.

// 2.1. Если пользователь соглашается на картошку, то предлагаем ему выбрать ее размер `Choose potato size: small/middle/big`:

// 2.1.1 Если юзер вводит 'small', или пустую строку, или нажимает Отмена, то к общей стоимости заказа прибавляем $10. То есть, значение 'small' для картошки является значением по умолчанию.

// 2.1.2 Если юзер вводит 'middle', то к общей стоимости заказа прибавляем $15. 

// 2.1.3 Если юзер вводит 'big', то к общей стоимости заказа прибавляем $20. 



// 3. Предлагаем пользователю добавить к заказу соус `Would you like sauce?`.

// 3.1. Если пользователь соглашается на соус, то предлагаем ему выбрать его тип `Choose sauce: ketchup/mayonnaise`:

// 3.1.1 Вне зависимости от выбранного типа соуса, или если пользователь оставляет пустую строку, или нажимает Отмена, к общей стоимости заказа прибавляем $10. Дефолтное название типа соуса: ketchup.



// 4. Вывод данных в body имеет следующий вид:

// document.write(`<h2>Your order:</h2>
// 	<ul>
// 		<li>Bulka 🍔: <НАЗВАНИЕ БУЛКИ> </li>
// 		<li>Potato 🍟: <РАЗМЕР КАРТОШКИ> </li>
// 		<li>Sauce 🧂: <ТИП СОУСА> </li>
// 	</ul>

// 	<p>Price: $<ФИНАЛЬНАЯ ЦЕНА> </p>
// `);
// Если пользователь не выбрал какой-то из предложенных продуктов (potato/sauce), то информацию о нем не нужно выводить в li.


burger = prompt(`Do you like Hamburger or Cheeseburger? 🍔`, `hamburger`);
if(burger) {
    burger = burger.replaceAll(" ", "").toLowerCase();
    burger = burger[0].toUpperCase() + burger.slice(1);
} else {
    alert('Please choose hamburger or cheeseburger !');
}
while (burger !== 'Hamburger' && burger !== 'Cheeseburger') {
    burger = prompt(`Do you like Hamburger or Cheeseburger? 🍔`);
    if(burger) {
        burger = burger.replaceAll(" ", "").toLowerCase();
        burger = burger[0].toUpperCase() + burger.slice(1);
    } else {
        alert('Please choose hamburger or cheeseburger !');  
    }
};

price = 0;

switch (burger) {
    case "Hamburger":
        price += 10;
        console.log(price);
        break;
    case "Cheeseburger":
        price += 15;
        console.log(price);
        break;
}
 
cheese = confirm(`Would you like double cheese?`);
    switch(cheese) {
        case true:
        price +=5;
        console.log(price);
        break;
        };

potato = confirm(`Would you like potato? 🍟`);
    switch(potato) {
        case true:
        potatoSize = prompt(`Choose potato size: small/middle/big`, `small`).replaceAll(" ", "").toLowerCase();
            switch (potatoSize) {
                case 'middle': 
                price += 15;
                break;
                case 'big':
                price += 20;
                break;
                default: 
                potatoSize = 'small'; 
                price += 10;
                break;
            };
        };
      
sause = confirm(`Would you like sause?🧂`);
    switch(sause) {
        case true:
        sauseType = prompt(`Choose sauce: ketchup/mayonnaise`, `ketchup`).replaceAll(" ", "").toLowerCase();
            switch (sauseType) {
                case 'mayonnaise':
                price +=10;
                console.log(price);
                break;
                default:
                sauseType = 'ketchup';
                price += 10;
                console.log(price);
                break;
            }; 
        };

document.write(
    `<h2>Your order:</h2>
    <ul>
        <li>Bulka 🍔: ${burger}</li>
        ${potato ? `<li>Potato 🍟: ${potatoSize}</li>` : ``}
        ${sause ? `<li>Sauce 🧂: ${sauseType}</li>` : ``}
    </ul>
    <p>Price: $${price} </p>`
);
