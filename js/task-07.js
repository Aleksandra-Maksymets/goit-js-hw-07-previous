const rangeInputEl = document.getElementById('font-size-control');
const textEl = document.querySelector('#text');


rangeInputEl.addEventListener('input', onRangeInputChange);

function onRangeInputChange(event) {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
    console.log(textEl.style.fontSize);
};
    
