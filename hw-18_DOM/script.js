// В html создаем квадрат, например div.block.
// С помощью функции setInterval, каждые пол секунды меняем цвет квадрата на любой рандомный цвет.
// Можно сформировать массив с цветами и с него брать рандомное значение.
// Можно написать функцию, которая будет возвращать строку `rgb(color_1, color_2, color_3)`, в которой color_1, color_2, color_3 это рандомное значение в диапазоне от 0 до 255 включительно.
// С помощью функции setInterval, каждую секунду перемещаем квадрат на любое место в пределах body. Для этого квадрату задаем рандомные значения свойств left и top. Квадрат не должен выходить за пределы body.

const block = document.querySelector(`.block`);
const bodyWidth = (window.innerWidth - 100);
const bodyHeight = (window.innerHeight - 100);

const getRandomNumber = ((min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
});

const RGBColour = () => {
  let numbers = [];
  for (let i=0; i <=2; i++) {
    numbers.push(getRandomNumber(0, 255));
  }
  return `rgb(${numbers.join(`,`)})`
}

setInterval(() => {
  block.style.background = RGBColour();
  block.style.top = `${getRandomNumber(0, bodyHeight)}px`;
  block.style.left = `${getRandomNumber(0, bodyWidth)}px`;
}, 1000);
