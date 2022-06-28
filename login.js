const patterns = {
    username: /^[a-z\d\-]{4,}$/i,
    password: /^[\w@\-_?.]{4,}$/,
    email: /^([a-z\d\.\-]+)@([a-z\d]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
}
const inputFields = document.querySelectorAll(".form-control");
const submitBtn = document.querySelector(".submit-btn");
const form = document.querySelector(".form");
const errorEl = document.querySelector('.error-alert');
const displayError = (e, text)=>{
    e.preventDefault();
    errorEl.classList.add('display-error');
    errorEl.textContent = text
    setTimeout(()=>{
        errorEl.classList.remove('display-error');
    }, 2000)
}

form.addEventListener('submit', (e)=>{

    let savedUser={};
    let currUser = {};
    inputFields.forEach(input=>{
        const attribute = input.getAttribute('name');
        if(!input.value){
            displayError(e, 'please input a value for all the fields');
            return;
        }else if(input.value && !patterns[attribute].test(input.value)){
            displayError(e, 'please fill input fields with valid format');
            return;
        }else{
            currUser[attribute] = input.value;
        }
    });
    savedUser = JSON.parse(localStorage.getItem(currUser.username));
    if(savedUser && savedUser.password == currUser.password){
        localStorage.setItem('nameOfUser', savedUser.username);
    }else{
        displayError(e,"user doesn't exist");
    }
})
