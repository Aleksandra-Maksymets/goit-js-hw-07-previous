const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
  
];

const listContainerEl = document.querySelector('#ingredients');

const createListItems = (itemsArray = []) => {
    return itemsArray.map(item => {
        const listItemEl = document.createElement('li');
        listItemEl.textContent = item;
        return listItemEl;
    });
};

const listItems = createListItems(ingredients);
   
listContainerEl.append(...listItems);
console.log('listEl', listContainerEl);