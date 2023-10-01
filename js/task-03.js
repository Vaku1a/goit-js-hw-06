const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryContainer = document.querySelector('.gallery');
console.log(galleryContainer);

const markup = images.map(({url, alt }) => `
<li>
  <img class="item-img" src="${url}" 
  alt="${alt}"
  width=300>
</li>
`).join('');

galleryContainer.insertAdjacentHTML('afterbegin', markup);

// galleryContainer.style.display = 'flex';
galleryContainer.style.display = 'grid';
galleryContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
galleryContainer.style.gridAutoRows = '200px';
galleryContainer.style.border = '2px solid #f76707';
galleryContainer.style.borderRadius = '5px';
galleryContainer.style.backgroundColor = '#fff4e6';
galleryContainer.style.padding = '10px';
galleryContainer.style.listStyle = 'none'
const img = document.querySelectorAll('.item-img')
img.forEach(item => {
  item.style.borderRadius = '50%';
})
