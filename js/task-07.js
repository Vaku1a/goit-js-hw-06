const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text')

fontSizeControl.addEventListener('input', handlerInput);

function handlerInput(evt) {
    text.style.fontSize = `${evt.currentTarget.value}px`;
};
