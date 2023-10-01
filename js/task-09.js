function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const wrapper = document.querySelector('.widget');
// console.log(wrapper)
const btnColorEl = document.querySelector('.change-color');
// console.log(btnColorEl);
const spanEl = document.querySelector('.color');
btnColorEl.addEventListener('click', changeColor);

function changeColor() {
  wrapper.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
}