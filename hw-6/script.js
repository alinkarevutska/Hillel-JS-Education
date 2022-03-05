arr = [];
do {
    arrLength = +prompt(`Please enter LENGTH of array, from 2 to 10`, `2`);
    arrLength = Math.round(Math.abs(arrLength));
} while (!arrLength || arrLength < 2 || arrLength > 10)
console.log(`Length of array: ${arrLength}`);

do {
    minNumber = +prompt(`Please enter MIN value of element in array, from -10 to 10`, `5`)
    if(minNumber % 1 !== 0) {
        minNumber = Math.round(minNumber);
    }
} while (!minNumber || minNumber < -10 || minNumber > 10)
console.log(`Min value of element in arr: ${minNumber}`);

do {
    maxNumber = +prompt(`Please enter MAX value of element in array, from ${minNumber} to 50`)
    if(maxNumber % 1 !== 0) {
        maxNumber = Math.round(maxNumber);
    }
} while (!maxNumber || maxNumber > 50 || maxNumber <= minNumber)
console.log(`Max value of element in arr: ${maxNumber}`);

for(i=0, min = minNumber, max = maxNumber; i<arrLength; i++) {
 arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(`Array of random numbers: ${arr}`);
arrOfPrimeNumbers = [];

toStart: for(i=0; i<arr.length; i++) {
    currentNumber = arr[i];
    if(currentNumber < 2)
        continue toStart;

    for (divider = 2; divider < currentNumber; divider++) {
        ostatok = arr[i] % divider;
        if(!ostatok) 
            continue toStart; 
    }
    arrOfPrimeNumbers.push(currentNumber);
}
console.log(`Array of prime numbers: ${arrOfPrimeNumbers}`);
finalSum = 0;

for (arrOfPrimeNumbers[i], i=0; i < arrOfPrimeNumbers.length; i++) {
    finalSum += parseInt(arrOfPrimeNumbers[i]);
}
console.log(`Sum of prime numbers is ${finalSum}`);
