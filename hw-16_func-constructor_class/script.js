// Исходный код проекта находится в архиве code.zip

// Файл script.js содержит данные:

// users – массив юзеров системы.
// gradation – объект с диапазоном оценок.

// Папка images содержит данные:

// папка users с иконками юзеров.
// папка roles с иконками ролей.

// Что нужно сделать: отрендерить для каждого юзера с массива users соответствующего вида блок.

// Для каждого юзера в блоке выводим:

// Картинку юзера – свойство img
// Имя юзера – свойство name
// Возраст юзера – свойство age
// Роль юзера – свойство role.


// Если у юзера свойство courses есть, то выводим перечень пройденных курсов.

// Делаем основной класс User, в котором будет созданы метод render и renderCourses.

// Для каждой роли делаем свой класс Student, Lector, Admin, который наследует класс User.

// В классах Lector, Admin переопределяем метод renderCourses для того, что бы в нужном виде отобразить список курсов.

const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};

const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "JackSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20
			},
			{
				"title": "Java Enterprise",
				"mark": 100
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "AmalSmith",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "NoahSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "CharlieSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			},
			{
				"title": "Java Enterprise",
				"mark": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "EmilySmith",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 253,
		img: "LeoSmith",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 78,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 85,
				"studentsScore": 85
			}
		]
	}
];

const usersTypeList = {
	student: user => new User(user),
	admin: user => new Admin(user),
	lector: user => new Lector(user)
};

class User {
	constructor(object) {
		for (let key in object) {
			this[key] = object[key];
		}
	}
	render() {
		return `<div class="user">
		<div class="user__info">
			<div class="user__info--data">
				<img src="images/users/${this.img}.png" alt="${this.name}" height="50">
				<div class="user__naming">
					<p>Name: <b>${this.name}</b></p>
					<p>Age: <b>${this.age}</b></p>
				</div>
			</div>
			<div class="user__info--role ${this.role}">
				<img src="images/roles/${this.role}.png" alt="${this.role}" height="25">
				<p>${this.role}</p>
			</div>
		</div>
		<div class="user__courses">
			${this.courses ? this.renderCourses() : ``}
		</div>
	</div>`
	}
	renderCourses() {
		return this.courses.map(course => {
			return `<p class="user__courses--course student"> ${course.title} <span class="${this.getScore(course.mark)}">${this.getScore(course.mark)}</span></p>`
		}).join('')
	}

	getScore(value) {
		let wordMark = '';
		switch(true) {
			case (value <= 20):
				wordMark = `satisfactory`;
				break;
			case (value > 20 && value <= 55):
				wordMark = `good`;
				break;
			case (value > 55 && value <= 85):
				wordMark = `very-good`;
				break;
			case (value > 85 && value <= 100):
				wordMark = `excellent`;
		}
		return wordMark;
	};
};

class Lector extends User{
	constructor(user) {
		super(user);
	}

	renderCourses() {
		return this.courses.map(course => {
			return `<div class="user__courses admin--info">
			<div class="user__courses--course lector">
			<p>Title: <b>${course.title}</b></p>
			<p>Lector's score: <span class="${this.getScore(course.score)}">${this.getScore(course.score)}</span></p>
			<p>Average student's score: <span class="${this.getScore(course.score)}">${this.getScore(course.score)}</span></p>
		</div>
		</div>`
		}).join('')
	}
};

class Admin extends User{
	constructor(user) {
		super(user);
	}

	renderCourses() {
		return this.courses.map(course => {
			return `<div class="user__courses admin--info">
			<div class="user__courses--course admin">
				<p>Title: <b>${course.title}</b></p>
				<p>Admin's score: <span class="${this.getScore(course.score)}">${this.getScore(course.score)}</span></p>
				<p>Lector: <b>${course.lector}</b></p>
			</div>
		</div>`
		}).join('')
	};
};

modifiedUsers = users.map(user => usersTypeList[user.role] ? usersTypeList[user.role](user) : new User(user))
	.map(user => {
		console.log(user)
		return user})
	.map(user => user.render())
	.join('');

document.write(modifiedUsers);
