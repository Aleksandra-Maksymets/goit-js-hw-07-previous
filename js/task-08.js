// Elements references
const refs = {
input: document.querySelector('input'),
createBtn: document.querySelector('[data-action="render"]'),
clearBtn: document.querySelector('[data-action="destroy"]'),
container: document.getElementById('boxes'),
}

// adding EventListeners
refs.createBtn.addEventListener('click', onCreateBtnClick);
refs.clearBtn.addEventListener('click', onClearBtnClick);

// Callback functions
function getRandomRgbColor() {
    
    const rgbNumer = () => Math.floor(Math.random() * 256);
    
    const r = rgbNumer();
    const g = rgbNumer();
    const b = rgbNumer();

    return `rgb(${r}, ${g}, ${b})`
};

function createBoxes(amount) {
    const boxes = [];
    for (let i = 0; i <= amount; i += 1) {
        const box = document.createElement('div');
        box.style.width = `${30 + i * 10}px`;
        box.style.height = `${30 + i * 10}px`;
        box.style.backgroundColor = getRandomRgbColor();
        boxes.push(box);
    };
    refs.container.append(...boxes);
};
 

//Event handlers functions
function onCreateBtnClick() {
   createBoxes(refs.input.value);
 };

function onClearBtnClick() {
    refs.container.innerHTML = '';
    refs.input.value = '';
    refs.input.focus();
};