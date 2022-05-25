// Написать код, который сформирует 2 запроса за различными файлами json (data.json, data2.json).
// Необходимо соединить из двух полученных объектов массивы children и вывести результат в консоль.

// Результат вывода в консоль:

// ["Jack","Jacky","Alexandr","Anna","Ivan","Alena"]

// ------ old methods code ------

const getFileWithPromise = file => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(`GET`, file);
        xhr.send();
    
        xhr.addEventListener(`readystatechange`, ()=>{
            if(xhr.readyState === 4) {
                xhr.status === 200 ? resolve(JSON.parse(xhr.response)) : reject(xhr.statusText);
                }
            })
        })
}

Promise
    .all([
        getFileWithPromise(`./files/data.json`),
        getFileWithPromise(`./files/data2.json`)
    ])
.then(
    data => {
    console.log(`in 1 resolve 🔥, XHR response:`, data);
    return Promise.resolve(data);
    }
)
.finally(
    () => console.log(`in finally...🌸`)
)
.then(
    data =>{
    
    console.log(`in 2 resolve 🔥, creating new users list...`)
    
    let newArr = [];
    for (let key in data) {
        let children = (data[key].children)
        newArr.push(...children);
    }
    return Promise.resolve(newArr)
})
.then( 
    newArr => {
        console.log(`in 3 resolve 🔥, users list:`, newArr)
        return Promise.resolve(newArr)
    }
)
.finally(
    () => console.log(`in 2 finally...🌸`)
)
.then(newArr => {
    let body = document.querySelector('body');
    let div = document.createElement('div');
    body.append(div);
    let ul = document.createElement('ul');
    div.append(ul);

    let modifiedArray = newArr.map(item => `<li>${item}</li>`).join('');
    div.innerHTML = `<h2>Final users list:</h2>`
    div.innerHTML += modifiedArray;

})
.catch(
    err => console.log(`in catch 💔, error:`, err)
)



// ------ new methods code ------

const newGetFileWithPromise = file => {
    let response = fetch(file);
    return response.then(
        response => response.status === 200 ? response.json() : Promise.reject(response.statusText)
    )
};

Promise
    .allSettled([
        newGetFileWithPromise(`./files/data.json`),
        newGetFileWithPromise(`./files/data2.json`)
    ])
.then(
    files => {
        console.log(`in new 1 resolve 🔥, files:`, files);
        return files.filter(file => file.status === "fulfilled")
        .map(item => item.value)
    }
)
.finally(
    () => console.log(`in new finally...🌸`)
)
.then(
    files => {
    
    console.log(`in new 2 resolve 🔥, creating new users list...`)
    
    let newArr = files.reduce((finalArr, obj)=>{
        finalArr.push(...obj.children);
        return finalArr;
    }, []);

    return newArr;
})
.then( 
    newArr => {
        console.log(`in new 3 resolve 🔥, users list:`, newArr)
        return newArr;
    }
)
.finally(
    () => console.log(`in new 2 finally...🌸`)
)
.then(newArr => {
    let body = document.querySelector('body');
    let div = document.createElement('div');
    body.append(div);
    let ul = document.createElement('ul');
    div.append(ul);

    let modifiedArray = newArr.map(item => `<li>${item}</li>`).join('');
    div.innerHTML = `<h2>Final users list using Fetch method:</h2>`
    div.innerHTML += modifiedArray;

})
.catch(
    err => console.log(`in catch 💔, error:`, err) 
)

