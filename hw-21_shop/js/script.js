const PRODUCTS = [
	{
		id: 1,
		title: "Aircraft Carrier",
		img: "aircraft-carrier",
		price: 30000,
		sale: true,
		salePercent: 2,
		categories: ['Boat']
	},
	{
		id: 2,
		title: "Boat",
		img: "boat",
		price: 700,
		sale: false,
		categories: ['Boat']
	},
	{
		id: 3,
		title: "Bus",
		img: "bus",
		price: 300,
		sale: true,
		salePercent: 10,
		categories: ['Bus']
	},
	{
		id: 4,
		title: "Cabriolet",
		img: "cabriolet",
		price: 900,
		sale: true,
		salePercent: 25,
		categories: ['Car']
	},
	{
		id: 5,
		title: "Commercial Plane",
		img: "commercial-plane",
		price: 1000,
		sale: false,
		categories: ['Aircraft']
	},
	{
		id: 6,
		title: "Electric car",
		img: "electric-car",
		price: 3000,
		sale: false,
		categories: ['Car']
	},
	{
		id: 7,
		title: "Helicopter police",
		img: "helicopter-police",
		price: 1000,
		sale: true,
		salePercent: 15,
		categories: ['Aircraft', 'Helicopter']
	},
	{
		id: 8,
		title: "Helicopter",
		img: "helicopter",
		price: 900,
		sale: true,
		salePercent: 35,
		categories: ['Aircraft', 'Helicopter']
	},
	{
		id: 9,
		title: "Minibus",
		img: "minibus",
		price: 700,
		sale: true,
		salePercent: 5,
		categories: ['Car', 'Bus']
	},
	{
		id: 10,
		title: "Motorbike",
		img: "motorbike",
		price: 200,
		sale: true,
		salePercent: 25,
		categories: ['Bike']
	},
	{
		id: 11,
		title: "Off Road",
		img: "off-road",
		price: 600,
		sale: false,
		categories: ['Car']
	},
	{
		id: 12,
		title: "Police Car",
		img: "police-car",
		price: 100,
		sale: false,
		categories: ['Car']
	},
	{
		id: 13,
		title: "School Bus",
		img: "school-bus",
		price: 150,
		sale: true,
		salePercent: 8,
		categories: ['Bus']
	},
	{
		id: 14,
		title: "Scooter",
		img: "scooter",
		price: 80,
		sale: true,
		salePercent: 13,
		categories: ['Bike']
	},
	{
		id: 15,
		title: "Small Plane",
		img: "small-plane",
		price: 3000,
		sale: false,
		categories: ['Aircraft']
	},
	{
		id: 16,
		title: "Speed Boat",
		img: "speed-boat",
		price: 2000,
		sale: true,
		salePercent: 34,
		categories: ['Boat']
	},
	{
		id: 17,
		title: "Sport Car",
		img: "sport-car",
		price: 10000,
		sale: true,
		salePercent: 3,
		categories: ['Car']
	},
	{
		id: 18,
		title: "Suv",
		img: "Suv",
		price: 300,
		sale: true,
		salePercent: 13,
		categories: ['Car', 'Bus']
	}
];

const USERS = [
	{
		name: 'Ivan',
		email: 'ivan@gmail.com',
		password: '123',
		favourites: [9, 18, 7],
		status: false
	}
];


// ------------- login ---------------

getStorageUsers = () => {
	const storageUsers = localStorage.getItem(`users`) 
	? JSON.parse(localStorage.getItem(`users`)) 
	: localStorage.setItem(`users`, JSON.stringify(USERS));
	
	console.log(`users from storage:`, storageUsers); // [{…}]
	return storageUsers;
}

const storageUsers = getStorageUsers();

const loginForm = document.querySelector(`#LoginForm`);
if(loginForm) {

	loginForm.addEventListener(`submit`, (event) => {
		event.preventDefault();
		let userEmail = event.target.querySelector(`input[data-name="email"]`).value;
		let userPassword = event.target.querySelector(`input[data-name="password"]`).value;
		let divError = document.querySelector(`.error`);
	
		let userEmailExists = storageUsers.find(user => user.email === userEmail);
		
		if (userEmailExists) {
			let userPasswordTrue = storageUsers.find(user => user.password === userPassword);
			// console.log(userPasswordTrue); // {name: 'Ivan', email: 'ivan@gmail.com', password: '123', favourites: Array(3), status: false}
			if (!userPasswordTrue) {
				divError.classList.add('active');
				divError.innerHTML = `Invalid password`;
			} else {
				divError.classList.remove(`active`);
	
				let currentUserIndex = storageUsers.findIndex(user => user.password === userPasswordTrue.password);
				storageUsers[currentUserIndex].status = true;
				localStorage.setItem(`users`, JSON.stringify(storageUsers));

				setTimeout(()=>{document.location.href =`index.html`},500)
			}
		} else {
			divError.classList.add(`active`);
			divError.innerHTML = `Invalid email`;
		}
	});
}

// ------------ registration ----------------

const registrationForm = document.querySelector(`#RegistrationForm`);

if(registrationForm){

	registrationForm.addEventListener(`submit`, (event) => {
		event.preventDefault();
	
		let registrationName = event.target.querySelector(`input[data-name="name"]`).value,
			registrationEmail = event.target.querySelector(`input[data-name="email"]`).value,
			registrationPassword = event.target.querySelector(`input[data-name="password"]`).value,
			verifyPassword = event.target.querySelector(`input[data-name="passwordVerify"]`).value,
			divError = registrationForm.querySelector(`.error`);
	
		let userEmailExists = storageUsers.find(user => user.email === registrationEmail);
		
		if (userEmailExists) {
			divError.classList.add(`active`);
			divError.innerHTML = `User with email ${registrationEmail} already exist!`;
			return;
		} else {

			if(registrationPassword !== verifyPassword) {
				divError.classList.add(`active`);
				divError.innerHTML = `Password not matches!`;
				return;
			}

			divError.classList.contains(`active`) && divError.classList.remove(`active`);
			
			let newUser = {
				name: registrationName,
				email: registrationEmail, 
				password: registrationPassword,
				favourites: [],
				status: true
			}
	
			storageUsers.push(newUser);
			localStorage.setItem(`users`, JSON.stringify(storageUsers));
			// console.log(`All users list`, storageUsers);

			setTimeout(()=>{document.location.href =`index.html`},500) 
	
		}
	});
}

// ------------ user in session ------------

const userInSession = storageUsers.find(user => user.status === true),
	  headerUser = document.querySelector(`#headerUser`), 
	  headerLogout = document.querySelector(`#headerLogout`),
	  headerFavourites = document.querySelector(`#headerFavourites`);

const renderUserName = ()=>{
	headerUser.innerHTML = userInSession.name;
	headerUser.href = `index.html`;
}

const renderNumberFavs = () =>{
	headerFavourites.href = `favourites.html`;
	const headerFavouritesCount = document.querySelector(`#headerFavouritesCount`);
	headerFavouritesCount.innerHTML = userInSession.favourites.length;
}

if (userInSession) {
	// console.log(`User in session`, userInSession);
	
	renderUserName();
	renderNumberFavs();
	
	headerLogout.classList.add(`active`);
	
	headerLogout.addEventListener(`click`, (event) => {
		event.preventDefault();

		const userInSession = storageUsers.find(user => user.status === true);
		userInSession.status = false;
		localStorage.setItem(`users`, JSON.stringify(storageUsers));
		document.location.href =`index.html` 
	})
};

// --------------- product cards --------------

const categoriesContainer = document.querySelector(`#categoriesContainer`);

const renderCategories = () => {
	let uniqueCategories = [];

	PRODUCTS.forEach(product => {
		let productCategory = product.categories;
		productCategory.forEach(category => {
			uniqueCategories.indexOf(category) === -1 && uniqueCategories.push(category);
			})
		})
		// console.log(uniqueCategories); //  ['Boat', 'Bus', 'Car', 'Aircraft', 'Helicopter', 'Bike']

		uniqueCategories.map(cat => {
			let section = document.createElement(`section`);
			section.className = `category`;
			section.dataset.name = cat;

			let h2 = document.createElement(`h2`);
			h2.innerHTML = cat;
			section.prepend(h2);

			let categoryContainer = document.createElement(`div`);
			categoryContainer.className = `category__container`;
			section.append(categoryContainer);

			categoriesContainer.append(section);
		});
};

const getProductPrice = product => {
	let productPrice = product.price;
	if(product.salePercent) {
		let saleSum = (product.salePercent*productPrice) / 100;
		 productPrice -= saleSum;
	}
	return productPrice;
};

const renderProductSale = product => {
	let productSale = ``;
	if(product.sale) {
		productSale = `<div class="product__sale">
							 <span class="product__sale--old">${product.price}</span>
							 <span class="product__sale--percent">-${product.salePercent}%</span>
						 </div>`
	}
	
	return productSale;
};

const renderProducts = () => {
	PRODUCTS.forEach(product => {
		product.categories.forEach(category => {

			let productCard = document.createElement(`div`);
			productCard.className = `product`;

			productCard.innerHTML = `<img src="images/products/${product.img}.png" class="product__img" alt="${product.title}" height="80">
		 				<p class="product__title">${product.title}</p>
		 				${renderProductSale(product)}
		 				<div class="product__info">
		 					<span class="product__price">$${getProductPrice(product)}</span>
		 				</div>
						`;

			let favBtn = document.createElement('button');
			favBtn.className = `product__favourite`;
			favBtn.dataset.fav = false;
			favBtn.dataset.id = product.id;

			let favBtnImage = document.createElement('img');
			favBtnImage.alt = `favourite`;
			favBtnImage.height = `20`;
			favBtnImage.src = `images/product__favourite.png`;
			favBtn.append(favBtnImage);

			if (userInSession) {
				let productInFavIndex = userInSession.favourites.findIndex(productID => productID === product.id);
				if(productInFavIndex !== -1) {
					favBtnImage.src = `images/product__favourite--true.png`;
					favBtn.dataset.fav = true;
				};
			}
		
			favBtn.addEventListener(`click`, ()=> {

				if(userInSession) {
					let productBtns = document.querySelectorAll(`button[data-id="${product.id}"]`);
					let productInFavIndex = userInSession.favourites.findIndex(productID => productID === product.id);

					if (productInFavIndex === -1 ){ 
						userInSession.favourites.push(product.id);
						// console.log(`new product with id:`, product.id, `added to favourites`, userInSession.favourites)
						localStorage.setItem(`users`, JSON.stringify(storageUsers));
						renderNumberFavs();
					} else {
						userInSession.favourites.splice(productInFavIndex, 1)
						// console.log(`existing product id:`, product.id, `deleted from favourites`,  userInSession.favourites)
						localStorage.setItem(`users`, JSON.stringify(storageUsers));
						renderNumberFavs();
					}

	// ----- функционал для добавления в избранное одного товара в разных секциях ------
					productBtns.forEach(btn => {
							// меняем дата-атрибут кнопки на противоположный
							let btnFav = btn.dataset.fav === `false` ? `true` : `false`;
			
							let btnImg = btn.querySelector(`img`);
							// меняем src картинки внутри кнопки в зависимости от значения дата-атрибута
							btnImg.src = btnFav === `false` ? "images/product__favourite.png" : "images/product__favourite--true.png";
		
							// присваиваем новое значение, которое получилось в результате цикла, дата-атрибуту Fav
							btn.dataset.fav = btnFav;
					})
				} else {
					document.location.href =`login.html` 
				}	
			})

			productCard.prepend(favBtn);

			let catSection = document.querySelector(`section[data-name="${category}"] .category__container`);
			catSection.append(productCard);
		});
	});
};

if(categoriesContainer){
	renderCategories();
	renderProducts();
}

// --------------- favourites page render --------------

const favouriteTable = document.querySelector('#favouriteTable');

getSalePersent = favproductData => {
	let salePercent = favproductData.salePercent;

	if (salePercent) {
		salePercent = `<td><span class="item__sale">-${favproductData.salePercent}%</span></td>`;
	} else {
		salePercent = `<td>-</td>`;
	}
	return salePercent;
}

const renderFavItem = (favProductData) => {
	let productFavItem = document.createElement('tr');
	productFavItem.innerHTML = `
	<td>
	<div class="item__info">
		<img src="images/products/${favProductData.img}.png" alt="${favProductData.title}" height="100">
		<div>
			<p class="item__info--title">${favProductData.title}</p>
		</div>
	</div>
	</td>
	<td>${favProductData.price}</td>
	${getSalePersent(favProductData)}
	<td>${getProductPrice(favProductData)}</td>
	`;
	
	favouriteTable.append(productFavItem);

	let buttonTD = document.createElement('td');
	productFavItem.append(buttonTD);

	let removeFavButton = document.createElement('button');
	removeFavButton.className = 'item__favourite';
	removeFavButton.innerHTML = `<img src="images/product__favourite--true.png" alt="favourite" height="20">`;
	buttonTD.append(removeFavButton);

	removeFavButton.addEventListener(`click`, () => {
		
		let productToDeleteIndex = userInSession.favourites.findIndex(id => id === favProductData.id);
		userInSession.favourites.splice(productToDeleteIndex, 1)
		// console.log(`current favs list:`, userInSession.favourites);
		localStorage.setItem(`users`, JSON.stringify(storageUsers));
		
		productFavItem.remove();

		renderNumberFavs();
	})

}

if(userInSession) {
	const userFavIDs = userInSession.favourites;
	// console.log(userFavIDs);

	userFavIDs.forEach(productID => {
		let favProductData = PRODUCTS.find(product => product.id === productID);
		renderFavItem(favProductData);
	})
}