// Отрендерить инфо-блок, аналог блока «Мобільний додаток» на сайте https://www.monobank.ua/.

// При нажатии на каждый таб (Платежі, Виписка, Налаштування картки) показываем соответствующий блок описания.


let menu = [
	{
		tab: 'Платежі',
		title: 'Ну де ще ви бачили безкоштовні перекази?',
		description: 'Поповнення картки monobank — безкоштовно! А далі поповнюйте мобільний, сплачуйте комунальні та інші послуги без будь-якої комісії. Навіть за рахунок кредитних коштів! Переказуйте гроші своїм контактам за один клік — це простіше, ніж ви можете собі уявити.',
		icon: 'payment'
	},
	{
		tab: 'Виписка',
		title: 'Усі ваші витрати на кінчиках пальців',
		description: 'Завжди хотіли перевірити, який відсоток ваших витрат припадає на нестримні веселощі? Тепер це просто. Користуйтеся карткою monobank, і ви завжди зможете бачити свої витрати в красивому й структурованому вигляді.',
		icon: 'extract'
	},
	{
		tab: 'Налаштування картки',
		title: 'Забудьте все, що ви знали про банкінг',
		description: 'Установлюйте самостійно будь-які ліміти, зокрема для запиту PIN-коду, коли купуєте. Не можете знайти картку? Заблокуйте її на якийсь час, далі від гріха. Змінюйте ПІН просто в додатку, без походів до банкомата.',
		icon: 'settings'
	}
];

const body = document.querySelector('body');

let tabs__wrapper = document.createElement('div');
tabs__wrapper.className = 'tabs__wrapper'
body.append(tabs__wrapper);

let tabs__panel = document.createElement('div');
tabs__panel.className = 'tabs__panel';
tabs__wrapper.append(tabs__panel);

let tabs__content = document.createElement('div');
tabs__content.className = 'tabs__content';
tabs__wrapper.append(tabs__content);

let tabs__content__icon = document.createElement('div');
tabs__content__icon.className = 'tabs__content__icon';
tabs__content.append(tabs__content__icon);

let tabs__content__img = document.createElement('img');
tabs__content__img.className = 'tabs__content__img';
tabs__content__icon.append(tabs__content__img);

let tabs__content__title = document.createElement('h2');
tabs__content__title.className = 'tabs__content__title';
tabs__content.append(tabs__content__title);

let tabs__content__descr = document.createElement('p');
tabs__content__descr.className = 'tabs__content__descr';
tabs__content.append(tabs__content__descr);

const renderTabs = (item, index) => {
  let tab__button = document.createElement('button');
  tab__button.className = 'tab__button';
  tab__button.innerHTML = item.tab;
  tabs__panel.append(tab__button);

  tab__button.addEventListener('click', () => {
    unactivateTabs();
    tab__button.classList.add('active');
    renderContent(item);
  });

  if(index === 0) {
    tab__button.classList.add('active');
    renderContent(item);
  }
}

const renderContent = (item) => {
  tabs__content__img.src = `./img/icons/${item.icon}.svg`;
  tabs__content__title.innerHTML = item.title;
  tabs__content__descr.innerHTML = item.description;
}

const unactivateTabs = () => {
  document.querySelector('.tab__button.active').classList.remove('active');
}

menu.forEach((item, index) => renderTabs(item, index));
