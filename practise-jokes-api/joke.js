const API = `https://api.chucknorris.io/jokes`;

const getFile = (path) => {
    return fetch(API + path).then(response => response.status === 200 ? response.json() : Promise.reject(response))
}

// ------------ render categories list ------------

const jokeCategories = document.querySelector('#jokeCategories');

getFile(`/categories`)
.then(categories => {
  
    jokeCategories.innerHTML = categories.map((category, index) => 
        `<li>
        <label>
            <input type="radio" value="${category}" name="jokeCategory" ${index === 0 ? `checked` : ""}> ${category}
        </label>
    </li>`).join('')
}
)
.catch(err => console.log(`Error, ${err.status}`));

// ------------ joke form ------------

const jokeForm =  document.querySelector(`#jokeForm`);
jokeForm.addEventListener(`submit`, event => {
    event.preventDefault();

    let jokeType = event.target.querySelector(`input[name="jokeType"]:checked`).value;
    let url;
    switch(jokeType){
        case 'random': 
        url = `/random`;
        break;

        case 'categories':
        let jokeCategory = jokeForm.querySelector(`input[name="jokeCategory"]:checked`).value;
        url = `/random?category=${jokeCategory}`;
        break;

        case 'search':
        let jokeSearch = jokeForm.querySelector(`input[id="jokeSearch"]`).value;
        if (jokeSearch.length < 3 || jokeSearch.length > 120) {
            alert(`Search should be from 3 to 120 symbols👀`)
            return;
        } 
        url = `/search?query=${jokeSearch}`;
        break;  
    }
    
    getFile(url).then(
        data => data.result ? data.result.forEach(joke => renderJoke(joke)) : renderJoke(data)
    )
})

// ------------ render joke ------------

const jokesContainer = document.querySelector('#jokesContainer');
const jokesContainerFavourite = document.querySelector('#jokesContainerFav');

const renderJoke = (joke, container=jokesContainer) => {
    let jokeCard = document.createElement('div');
    jokeCard.className = 'joke__card';
    jokeCard.dataset.id = joke.id

    let jokeCats = '';
    if (joke.categories.length) {
        jokeCats = `<section>
        ${joke.categories.map(category => `<p class="joke__category">Categories: ${category}</p>`).join(', ')}
        </section>`;
    }

    jokeCard.innerHTML = ` 
    <p class="joke__text">${joke.value}</p>${jokeCats}`
    container.append(jokeCard);

    let jokeLikeBtn = document.createElement('button');
    jokeLikeBtn.className = 'joke__like';
    jokeLikeBtn.dataset.favourite = joke.favourite ? true : false;
    jokeLikeBtn.innerHTML = joke.favourite ? '❤️' : '💜';
    jokeCard.prepend(jokeLikeBtn);

    jokeLikeBtn.addEventListener(`click`, () => {
        let storageJokes = localStorage.getItem('jokes') ? JSON.parse(localStorage.getItem('jokes')) : [];
        
        if (jokeLikeBtn.dataset.favourite === 'true') {
            let jokeFavCard = jokesContainerFavourite.querySelector(`.joke__card[data-id="${joke.id}"]`);
            jokeFavCard.remove();

            let favouriteJokeIndex = storageJokes.find(item => item.id === joke.id);
            storageJokes.splice(favouriteJokeIndex, 1);
            localStorage.setItem(`jokes`, JSON.stringify(storageJokes));

            let jokeCard = jokesContainer.querySelector(`.joke__card[data-id="${joke.id}"]`);
            if (jokeCard) {
                jokeCardBtn = jokeCard.querySelector('button');
                jokeCardBtn.dataset.favourite = false;
                jokeCardBtn.innerHTML = '💜'
            }
        } else {
            joke.favourite = true;

            storageJokes.push(joke);
            localStorage.setItem('jokes', JSON.stringify(storageJokes));

            renderJoke(joke, jokesContainerFavourite);
            jokeLikeBtn.innerHTML = '❤️';
            jokeLikeBtn.dataset.favourite = true;
        }
    })
}

// ------------ render storage jokes ------------

const renderStorageJokes = () => {
    let storageJokes = localStorage.getItem('jokes') ? JSON.parse(localStorage.getItem('jokes')) : [];
    storageJokes.forEach(joke => renderJoke(joke, jokesContainerFavourite));
}
renderStorageJokes();
