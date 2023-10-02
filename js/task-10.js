
const wrapper = document.querySelector('#boxes');
const inputEl = document.querySelector('[type="number"]');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');

createBtnEl.addEventListener('click', onClickCreate);
destroyBtnEl.addEventListener('click', onClickDestroy);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onClickCreate() {
  wrapper.innerHTML = ''; //затераєм попредні варіанти
  let divNumber = Number(inputEl.value);
  const arr = [];
  for (let i = 1; i <= divNumber; i++) {
    const div = document.createElement("div");
    div.id = i; 
    div.style.width = `${i * 10}px`;
    div.style.height = `${i * 10}px`;
    div.style.background = getRandomHexColor();
    arr.push(div);
  }

  wrapper.append(...arr); // додаємо розмітку за одне звернення
}

function onClickDestroy() {
  wrapper.innerHTML = ''; // видаляєм розмітку
}








