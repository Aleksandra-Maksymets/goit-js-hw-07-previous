const categoriesItemsEl = document.querySelectorAll('.item');

const getListInfo = function (categoriesItems = []) {
    
console.log(`В списке ${categoriesItems.length} категории.`);

categoriesItems.forEach( category => {
    console.log(`Категория: ${category.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${category.querySelectorAll('li').length}`);
});
    
};

console.log(getListInfo(categoriesItemsEl));









