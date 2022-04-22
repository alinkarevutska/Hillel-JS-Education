// Дано:

// Массив видов спорта sports, который состоит из [Иконка вида спорта, Название вида спорта];
// Массив стран победителей на Олимпийских играх в каждом виде спорта winners, который состоит из [Название вида спорта, Завоеванная медаль, Страна];
// Массив колец с Олимпийской эмблемы olympic, который состоит из [Иконка олимпийского кольца];
// Массив медалей medals, который состоит из [Иконка медали, Название медали];
// Массив стран и континентов continents, который состоит из [Название страны, Название контента];
// Массив флагов стран который состоит из [Флаг страны, Название страны];
// Необходимо вывести таблицу победителей Олимпийских игр в соответствии с видом спорта и континентом команды.

const sports = [
	['🤺','fencing'],
	['⛸','figure skating'],
	['⛷','skier'],
	['🏂','snowboarder'],
	['🏌','golfing'],
	['🚣','rowing boat'],
	['🏊','swimming'],
	['🤸','gymnastics'],
	['🤾','handball']
];

const winners = [
	['fencing','gold','fr'],
	['fencing','silver','it'],
	['fencing','bronze','us'],

	['figure skating','gold','ca'],
	['figure skating','silver','ru'],
	['figure skating','bronze','us'],

	['skier','gold','no'],
	['skier','silver','ru'],
	['skier','bronze','fr'],

	['snowboarder','gold','us'],
	['snowboarder','silver','jp'],
	['snowboarder','bronze','au'],

	['golfing','gold','gb'],
	['golfing','silver','se'],
	['golfing','bronze','us'],

	['rowing boat','gold','us'],
	['rowing boat','silver','gb'],
	['rowing boat','bronze','ro'],

	['swimming','gold','us'],
	['swimming','silver','gb'],
	['swimming','bronze','au'],

	['gymnastics','gold','ru'],
	['gymnastics','silver','ru'],
	['gymnastics','bronze','ua'],

	['handball','gold','dk'],
	['handball','silver','fr'],
	['handball','bronze','de'],
];

const olympic = ['🔵','⚫','🔴','🟡','🟢'];
// Европа — синий, Африка — чёрный, Америка — красный, Азия — жёлтый и Австралия — зелёный  

const medals = [
	['🥇','gold'],
	['🥈','silver'],
	['🥉','bronze'],
];

const continents = [
	['fr','Europe'],
	['it','Europe'],
	['us','The Americas'],
	['ca','The Americas'],
	['ru','Europe'],
	['no','Europe'],
	['jp','Asia'],
	['au','Oceania'],
	['gb','Europe'],
	['se','Europe'],
	['ro','Europe'],
	['ua','Europe'],
	['dk','Europe'],
	['de','Europe']
];

const flags = [
	['fr', '🇫🇷'],
	['it','🇮🇹'],
	['us','🇺🇸'],
	['ca','🇨🇦'],
	['ru','🇷🇺'],
	['no','🇳🇴'],
	['jp','🇯🇵'],
	['au','🇦🇺'],
	['gb','🇬🇧'],
	['se','🇸🇪'],
	['ro','🇷🇴'],
	['ua','🇺🇦'],
	['dk','🇩🇰'],
	['de','🇩🇪']
];

const THs = olympic.map(item => `<th>${item}</th>`).join('');

const getWinnersBySportName = (currentSportName) => {
	let currentWinners = [];
	for (let winner of winners) { // ['fencing','gold','fr'],
		let currentWinnerSport = winner[0];
		
			if (currentWinnerSport === currentSportName) {
			currentWinners.push(winner);
		}
	}
	return currentWinners;
};

const getContinentByCountry = (winnerCountry) => {
	for (let continent of continents) { // ['fr','Europe'],
		let winnerContinent = continent[1];
		
		if (winnerCountry ===  continent[0]) {
			return winnerContinent;
		}
	}
};

const getWinnerFlagByCountry = (winnerCountry) => {
	for (let flag of flags) { // ['fr','🇫🇷'],
		let winnerFlag = flag[1];
		if (winnerCountry === flag[0]) {
			return winnerFlag;
		}
	}
};

const getwinnerIconByMedal = (winnerMedal) => { 
	for (let medal of medals) { // ['🥇','gold'],
		let medalIcon = medal[0];
		if (winnerMedal === medal[1]) {
			return medalIcon;
		}
	}
};


const renderTbody = () => {
	let tableRows = [];
	for (let sport of sports) { // 	['🤺','fencing'],
		let currentSportIcon = sport[0],
		currentSportName = sport[1];

		let Europe = [],
		Africa = [],
		TheAmericas = [],
		Asia = [],
		Oceania = [];

		
		let currentWinners = getWinnersBySportName(currentSportName);
			//console.log(currentWinners);
			// [
			// ['fencing', 'gold', 'fr']
			// ['fencing', 'silver', 'it']
			// ['fencing', 'bronze', 'us']
			// ]
		
		for (let currentWinner of currentWinners) { // 	// ['fencing', 'gold', 'fr']
			let winnerMedal = currentWinner[1],
				winnerCountry = currentWinner[2];

			let winnerContinent = getContinentByCountry(winnerCountry); 
		
			let winnerRender = `<div class="winner ${winnerMedal}">${getWinnerFlagByCountry(winnerCountry)} - ${getwinnerIconByMedal(winnerMedal)}</div>`

			switch(winnerContinent) {
				case 'Europe': 
					Europe.push(winnerRender);
					break;
				case 'Africa':
					Africa.push(winnerRender);
					break;
				case 'The Americas':
					TheAmericas.push(winnerRender);
					break;
				case 'Asia':
					Asia.push(winnerRender);
					break;
				case 'Oceania':
					Oceania.push(winnerRender);
					break;
			}
		};

		tableRows.push(`<tr>
		<td>${currentSportIcon}</td>
		<td>${Europe.join('')}</td>
		<td>${Africa.join('')}</td>
		<td>${TheAmericas.join('')}</td>
		<td>${Asia.join('')}</td>
		<td>${Oceania.join('')}</td>
		</tr>`);
	};
	return `${tableRows.join('')}`;
}

document.write(`
<table>
	<thead>
		<tr>
			<th></th>
			${THs}
		</tr>
	</thead>
		<tbody>
			${renderTbody()}
		</tbody>
</table>
`);

