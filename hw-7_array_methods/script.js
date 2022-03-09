hero = ['Ivan'];
    native = ['York','Of'];
    destination = ['Poltava','In'];
        
    rainbow = hero.concat(native, destination);
    rainbow.reverse();
    rainbow.splice(0, 2, 'Richard');
    rainbow.pop()
    rainbow.push('Gave', 'Battle', 'In', 'Vain');
    console.log(rainbow); // ['Richard', 'Of', 'York', 'Gave', 'Battle', 'In', 'Vain']
    rainbow.forEach(function(data) {
        switch(true) {
            case (data === 'Richard'): {
                background = 'red';
                break;
            }
            case (data === 'Of'): {
                background = 'orange';
                break;
            }
            case (data === 'York'): {
                background = 'yellow';
                break;
            }
            case (data === 'Gave'): {
                background = 'green';
                break;
            }
            case (data === 'Battle'): {
                background = 'lightblue';
                break;
            }
            case (data === 'In'): {
                background = 'blue';
                break;
            }
            case (data === 'Vain'): {
                background = 'violet';
                break;
            }
            };
            document.write(`<p style="float:left; padding: 0 30px 0 30px;"><span style="display:block; height:30px; width:30px; border-radius: 20px; background-color: ${background}; margin: 20px auto; "></span>${data}</p>`);   
    });
