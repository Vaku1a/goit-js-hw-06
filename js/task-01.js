const categoriesNumber = document.querySelector("#categories");
console.log('Number of categories:', categoriesNumber.childElementCount);


const items = document.querySelectorAll('.item');

items.forEach(item => {
   
    const categoryName = item.querySelector('h2').textContent;
    console.log('Category:', categoryName);

    const itemNumber = item.querySelectorAll('ul > li');
    console.log('Elements:', itemNumber.length);
});
