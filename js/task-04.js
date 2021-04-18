const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    }
};

const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const counterValueEl = document.querySelector('#value');

decrementBtnEl.addEventListener('click', () => {
    counter.decrement();
    counterValueEl.textContent = counter.value;
    
 });
incrementBtnEl.addEventListener('click', () => {
    counter.increment();
    counterValueEl.textContent = counter.value;
});