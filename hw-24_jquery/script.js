const URL = `https://raw.githubusercontent.com/brightestsirius/tesla/master/tesla.json`;

const teslaContainer = $('.tesla__container'),
      buttonsContainer = $('.buttons__container');

const colors = ['#2E2E2E', '#43424F', '#000000', '#212252', '#A8A1A2', '#ECEBEC', '#C31130', '#F68B28', '#FBB842', '#BBCBD0', '#0F93DA', '#3D7866']

const descriptions = [
    'Solid Black',
    'Midnight Silver Metallic',
    'Obsidian Black Metallic',
    'Deep Blue Metallic',
    'Silver Metallic',
    'Pearl White Multi-Coat',
    'Red Multi-Coat',
    'Very Orange Multi-Coat',
    'Brilliant Yellow Multi-Coat',
    'Glacier Blue Multi-Coat',
    'Electric Blue Multi-Coat',
    'Green Lotus Multi-Coat'
]
  
const renderCards = (key, value) => {
    let cardImg = $("<div></div>").html(`<img src="${value}" alt="tesla-${key}"><p class="tesla__descr">${key}</p>`);
    cardImg.addClass('tesla__div');
    key === "solid-black" ? cardImg.addClass('active') : '';
    cardImg.attr('data-color', key);
    teslaContainer.append(cardImg);
}

const renderButtons = (key) => {
    let navBtn = $("<button></button>");
    
    navBtn.each((index, element) => {
        navBtn.addClass(`nav__btn ${key}`);
        navBtn.addClass(`nav__btn`);
        key === "solid-black" ? navBtn.addClass('active') : '';
        navBtn.attr('data-color', key);
    })
    
    buttonsContainer.append(navBtn);

    navBtn.on('click', e => {
        e.preventDefault();
        let activeBtn = $('.nav__btn.active');
        activeBtn.removeClass('active')
        navBtn.addClass('active');

        $('.tesla__div').removeClass('active');
        $(`.tesla__div[data-color="${key}"]`).addClass('active');
    })
    
}

$.ajax({
    url: URL,
    method: `GET`,
    success: data => {
        let cardsInfo = JSON.parse(data);

        $.each(cardsInfo, function (key, value) {
            renderCards(key, value)
            renderButtons(key)
        })
    },
    error: error => console.error(error)
})



