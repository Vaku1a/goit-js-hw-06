const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const container = document.querySelector('#ingredients');
const arr = []

ingredients.map(element => {
  const li = document.createElement('li')
  li.classList.add('item')
  li.textContent = element
  arr.push(li);
});

container.append(...arr); // створив порожній масив та додав розмітку за одну операцію
