// Создать блок по центру экрана.

// 1) При нажатии на стрелки – блок смещается в соответствующем направлении на 10px. Блок должен "упираться в экран", т.е. не может выйти за пределы экрана.
// - блок не вываливается за экран
// - при каждом "врезании" в стенку – блок отпрыгивает на step*2 пикселей в противоположном направлении.
// При каждом отпрыгивании – по центру блока появляется надпись "БЭМС", которая исчезает через 2 секунды

// 2) При нажатии на пробел - блок подпрыгивает на 10px вверх и возвращается на изначальное место. Для плавности анимации можно использовать transition.

// 3) При нажатии на ctrl - блок приседает: уменьшаем его высоту на 40%, и увеличиваем ширину на 25%. Для плавности анимации можно использовать transition.

const body = document.querySelector('body');
const block = document.createElement('div');
block.classList.add('block');
body.append(block);

const STEP = 10;
const max_x = window.innerWidth - block.offsetWidth,
    max_y = window.innerHeight - block.offsetHeight;

const KEYS = {
    ArrowUp: () => {
        if (block.offsetTop > 0 + STEP) {
            block.style.top = !block.style.top ? `-${STEP}px` : `${parseInt(block.style.top)-STEP}px`;
        } else {
            block.style.top = `${parseInt(block.style.top)+STEP*2}px`
            buumFunc();
            block.style.background = RGBColour();
        }  
    },
    ArrowDown: () => {
        if (block.offsetTop < max_y - STEP) {
            block.style.top = !block.style.top ? `${STEP}px` : `${parseInt(block.style.top)+STEP}px`
        } else {
            block.style.top = `${parseInt(block.style.top)-STEP*2}px`
            buumFunc();
            block.style.background = RGBColour();
        }
    },
    ArrowLeft: () => {
        if (block.offsetLeft > 0 + STEP) {
            block.style.left = !block.style.left ? `-${STEP}px` : `${parseInt(block.style.left)-STEP}px`
        } else {
            block.style.left = `${parseInt(block.style.left)+STEP*2}px`
            buumFunc();
            block.style.background = RGBColour();
        }  
    },
    ArrowRight: () => {
        if (block.offsetLeft < max_x - STEP) {
            block.style.left = !block.style.left ? `${STEP}px` : `${parseInt(block.style.left)+STEP}px`
        } else {
            block.style.left = `${parseInt(block.style.left) - STEP*2}px`
            buumFunc();
            block.style.background = RGBColour();
        }
        
    },
    " ": () => {
        block.style.top = !block.style.top ? `-${STEP}px` : `${parseInt(block.style.top)-STEP}px`
        setTimeout(() => {
            block.style.top = !block.style.top ? `+${STEP}px` : `${parseInt(block.style.top)+STEP}px`
            block.style.background = RGBColour();
        }, 300)
    },
    Control: () => {
        block.classList.add('sitting');
        setTimeout(() => {
            block.classList.remove('sitting');
            block.style.background = RGBColour();
        }, 500)
    }
};

const buumFunc = () => {
    block.innerHTML = `<p>БЭМС!!!</p>`
    setTimeout(() => {
        block.innerHTML = ''
    }, 2000)
};

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
};

document.addEventListener('keydown', e => {
    KEYS[e.key] && KEYS[e.key]();
});
