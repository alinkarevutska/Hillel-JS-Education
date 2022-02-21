// Показываем юзеру confirm() с текстом `Tell me three most important words 💚`.
// Если юзер нажимает Cancel, то заканчиваем выполнение программы.
// Если юзер нажимает Ok, то последовательно запрашиваем у юзера через prompt() три слова. Требование к каждому слову:
// Повторно запрашиваем слово если:
// юзер нажал Отмена,
// юзер ввел пустую строку,
// юзер ввел слово, которое содержит хотя бы одну цифру.
// После получения валидного слова предлагаем пользователю выбрать один из вариантов его преобразования:
// uppercase
// lowercase
// capitalize
// Повторно запрашиваем у юзера вариант преобразования слова если он не ввел ни один из предложенных вариантов (Отмена, пустая строка и все, что не равно uppercase, lowercase, capitalize).
// После запроса всех трех слов и преобразования каждого из них выводим в консоль все три слова в виде одной строки: `${первое слово} ${второе слово} ${третье слово}!` (после первого и второго слова должен стоять пробел, а после последнего знак восклицания).

words = confirm(`Tell me three most important words 💚`);

if(words) {
    finalResult = '';
        toMetka: for (wordNumber = 1; wordNumber <=3; wordNumber++) {
            wordFromUser = prompt(`Tell me word №${wordNumber}`);
            while (!wordFromUser) {
                wordFromUser = prompt(`Tell me word №${wordNumber}`);
            }  
                wordFromUser = wordFromUser.replaceAll(" ", "").toLowerCase();
                
                for (letterIndex = 0; letterIndex < wordFromUser.length; letterIndex++) {
                letterOrNumber = +wordFromUser[letterIndex];
                if(!isNaN(letterOrNumber)) {
                    alert(`Please type correct word!`);
                    wordNumber--;
                    continue toMetka;
                }
                }
                do {
                    transformType = prompt(`Choose type of transformation for word №${wordNumber}: uppercase / lowercase / capitalize`, `uppercase`);
    
                    if (transformType) {
                        transformType = transformType.replaceAll(" ", "").toLowerCase();
                    }
                } while (transformType !=="uppercase" && transformType !=="lowercase" && transformType !=="capitalize");
                    
                transformedWord = '';
                switch (transformType) {
                    case "uppercase":
                        transformedWord = wordFromUser.toUpperCase();
                        break;
                    case "lowercase":
                        transformedWord = wordFromUser.toLowerCase();
                        break;
                    case "capitalize":
                        transformedWord = wordFromUser[0].toUpperCase()+wordFromUser.slice(1).toLowerCase();
                        break;
                }
                finalResult += transformedWord;
                wordNumber === 3 ? finalResult +=`!` : finalResult +=` `; 
    } 
    document.write(`<h2>${finalResult}</h2>`);
}
else {
    alert(`Ok, bye :(`);
}
