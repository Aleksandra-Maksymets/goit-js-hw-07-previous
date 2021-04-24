const inputEl = document.querySelector('#validation-input');


inputEl.addEventListener('blur', onInputChange);

function addAndRemoveClass(classToAdd, classToRemove) {
    inputEl.classList.add(classToAdd);
    inputEl.classList.remove(classToRemove);
 };

function onInputChange(event) {
    const dataDefaultLength = inputEl.getAttribute('data-length');

    if (event.currentTarget.value.length > dataDefaultLength) {
        console.log('event.currentTarget.value.length', event.currentTarget.value.length);
        addAndRemoveClass('invalid', 'valid');
    
    } else {
        console.log('event.currentTarget.value.length', event.currentTarget.value.length);
       addAndRemoveClass('valid', 'invalid' );
        
    }
    console.log(inputEl);
};