const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const container = document.querySelector('#ingredients');

ingredients.map(element => {
  const li = document.createElement('li')
  li.classList.add('item')
  li.textContent = element
  container.append(li);
});
