const userName = document.querySelector('#name-input');
userName.addEventListener('input', handlerInput);
const str = document.querySelector('#name-output');

function handlerInput(evt) {
    if (evt.currentTarget.value === '') {
        str.textContent = 'Anonymous';
    } else {
        str.textContent = evt.currentTarget.value;
    }  
}

