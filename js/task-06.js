const inputEl = document.querySelector('#validation-input');


inputEl.addEventListener('blur', onInputChange);

function onInputChange(event) {
    const dataDefaultLength = inputEl.getAttribute('data-length');

    if (event.currentTarget.value.length > dataDefaultLength) {
        console.log('event.currentTarget.value.length', event.currentTarget.value.length);
       
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    } else {
        console.log('event.currentTarget.value.length', event.currentTarget.value.length);
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    }
    console.log(inputEl);
};