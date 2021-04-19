const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output')

nameInputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
 const inputValue = event.currentTarget.value;
    if (inputValue === '') {
 
        return nameOutputEl.textContent = 'незнакомец';
        
    } else return nameOutputEl.textContent = inputValue;
             
};
