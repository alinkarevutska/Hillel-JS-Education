var users = [
    ["john","red",5,["ball", "book", "pen"]],
    ["becky","blue",10,["tape", "backpack", "pen"]],
    ["susy","red",55,["ball", "eraser", "pen"]],
    ["tyson","green",1,["book", "pen"]],
   ];
const tableHeads = ["Name", "Team", "Score", "Items"];

// Task: 

// 1. Create a new array using forEach that has all usernames with a "!" to each of the usernames. Example: ["john!", "becky!", ...].

// 2. Create another new array using map that has all usernames with a "?" to each of the usernames. Example: ["john?", "becky?", ...].

// 3. Filter the original array of users to only include users who are on team: red.

// 4. In filtered array find out the total score of all filtered users and print all user's data into table with <tfoot>Final summ</tfoot> tag.

renderArray = (array, method, action) => document.write(`<p>${action} array with ${method}: [${array.join(' ')}]</p>`);

renderArrays = (array, method) => {
    document.write (Array.isArray(array) && (`${method} arrays: [${array[0].join(', ')}], [${array[1].join(', ')}]`));
}

// ---- 1) -----
let newArray = [];
users.forEach(function(item) {
    // console.log(item);  // ['john', 'red', 5, Array(3)], 
                        // ['becky', 'blue', 10, Array(3)] ...
    item.forEach((element, index) => {
        // console.log(element); // john
                            // red
                            // 5 ...
        if (index === 0) 
        newArray.push(element + "!");
    });
});

console.log(newArray); 
renderArray(newArray, 'forEach', 'Creating');

// ---- 2) -----

let arrayOfNames = users.map((item) => {
    // console.log(item); // ['john', 'red', 5, Array(3)] ... 
    return item[0] + '?'; 
});

console.log(arrayOfNames); 
renderArray(arrayOfNames, 'Map', 'Creating');

// ---- 3) -----

let filteredArray = users.filter((item) => item[1] === 'red');

console.log(filteredArray); 
renderArrays(filteredArray, 'Filtered');

// ---- 4) -----

let tableRows = filteredArray.map((item) => {
    // console.log(item); // ['john', 'red', 5, Array(3)]
    let tableData = item.map((element, index) => {
        if (index === 0) {
            element = element[0].toUpperCase() + element.slice(1).toLowerCase();
        } else if (index === 1) 
        element = element.toUpperCase(); 
        return (`<td>${element}</td>`);
    })
    return `<tr>${tableData.join('')}</tr>`;
});

let finalSum = 0; 
filteredArray.map((item) => {
    console.log(item);
    if (typeof item[2] === 'number') {
        finalSum += item[2];
        return finalSum;  
    };
});

document.write(`<table>
	<thead>
		<tr>
        <th>${tableHeads.join(`</th><th>`)}</th>
		</tr>
	</thead>
	<tbody>
    <tr>
    ${tableRows.join('')}
    </tr>
	</tbody>
    <tfoot>
    <th colspan="4"> Final sum: ${finalSum}</th>
    </tfoot>
</table>`)
