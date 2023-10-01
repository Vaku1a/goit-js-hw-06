const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const spanValue = document.querySelector('#value')


decrementButton.addEventListener("click", handlerClickDecrement);
incrementButton.addEventListener("click", handlerClickIncrement);

let value = 0;

function handlerClickDecrement() {
    value -= 1;
    // console.log(value)
    spanValue.textContent = value;
}

function handlerClickIncrement() {
    value += 1;
    // console.log(value)
    spanValue.textContent = value;
}