const digits = document.querySelectorAll('.digits button, .modifiers button, .operations button');
const result = document.querySelector('h1');


for (let digit of digits) {
    digit.addEventListener('click', (event) => {

        let pressed = event.target.innerHTML

        if (pressed == 'AC')
            result.innerHTML = '0';
        else if (pressed == '+/-')
            result.innerHTML  = eval(`-1 *${result.innerHTML}`);
        else if (pressed == '%') 
            result.innerHTML = eval(`${result.innerHTML}/100`);
        else if (pressed == '=')
            result.innerHTML = eval(`${result.innerHTML}`);
        else if (result.innerHTML === '0' && pressed != '.')
            result.innerHTML = pressed
        else if ('0123456789+-/'.includes(pressed))
            result.innerHTML += pressed
        else if (pressed == 'x')
            result.innerHTML += '*'

    });
    
};

document.body.addEventListener('keydown', (event)=> {
    if (event.key == "Escape")
      result.innerHTML = '0'
    else if (event.key == '%')
      result.innerHTML = eval(`(${result.innerHTML})/100`)
    else if (event.key == "Enter" || event.key == "=")
      result.innerHTML = eval(result.innerHTML)
    else if (result.innerHTML === '0' && "123456789".includes(event.key))
      result.innerHTML = event.key
    else if ("0123456789+-/".includes(event.key))
      result.innerHTML += event.key
    else if (event.key == "*")
      result.innerHTML += '*'

  });
