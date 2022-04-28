const alphabet = `abcdefgh`;
const alpArray = [...alphabet];
const figures = [`rook`,`horse`,`bishop`,`queen`,`king`,`bishop`,`horse`,`rook`];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
numbers.reverse();

const renderChessBoard = () => {
	let tableRows = [];
	for (let tr=0; tr < 8; tr++) {
		let tableDatas = [];
		let color = tr === 0 || tr === 1 ? 'white' : 'black';
		
		for (let td = 0; td < 8; td++) {
			let value = '';
			
			if (tr === 0 || tr === 7 ) {
				value = `<td><img src="img/${color}/${figures[td]}.svg"></td>`
				tableDatas.push(value);
			} else if (tr === 1 || tr === 6) {
				value = `<td><img src="img/${color}/pawn.svg"></td>`
				tableDatas.push(value);
			}
			else {
				tableDatas.push(`<td>${value}</td>`)
			}
		}
		tableRows.push(`<tr><td>${numbers[tr]}</td>${tableDatas.join('')}<td>${numbers[tr]}</td></tr>`)
	}
	return tableRows.join('')	
}


document.write(`<table>
	<thead>
		<tr>
			<th></th>
			<th>${alpArray.join(`</th><th>`)}</th>
		</tr>
	</thead>
    <tbody>
    ${renderChessBoard()}
    </tbody>
    <tfoot>
			<th></th>
			<th>${alpArray.join(`</th><th>`)}</th>
	</tfoot>
</table>`);
