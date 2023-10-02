const str = document.querySelector('#validation-input');
const dataLength = Number(str.dataset.length); // перетворив значення рядка на число 
str.addEventListener('blur', handlerInput);


function handlerInput(evt) {
    console.log(evt.currentTarget.value.length);
    // if (evt.currentTarget.value.length === dataLength) { // додав строгу рівність
    //     str.classList.add('valid');
    //     str.classList.remove('invalid');
    // }

    // } else {
    //     str.classList.add('invalid');
    //     str.classList.remove('valid');
// }
// Замінив досконалішим кодом

    if (evt.currentTarget.value.length  === dataLength) {
        updateClassEl("valid", "invalid");
    } else {
        updateClassEl("invalid", "valid");
    }

    function updateClassEl(a, b) {
        str.classList.add(a);
        str.classList.remove(b);
    }
}



