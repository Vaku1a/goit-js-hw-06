const str = document.querySelector('#validation-input');
const dataLength = str.dataset.length;
console.log(dataLength)
str.addEventListener('blur', handlerInput);


function handlerInput(evt) {
    console.log(evt.currentTarget.value.length);
    if (evt.currentTarget.value.length == dataLength) {
        str.classList.add('valid');
        str.classList.remove('invalid');

    } else {
        str.classList.add('invalid');
        str.classList.remove('valid');
    }
}
