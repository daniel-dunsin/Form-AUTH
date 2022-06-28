const passwordInput = document.querySelector(".input-group");
passwordInput.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-eye")) {
    const targetInput = e.target.previousElementSibling;
    if(e.target.classList.contains('password-visible')){
        targetInput.setAttribute('type', 'password');
        e.target.classList.remove('password-visible');
    }else{
        targetInput.setAttribute('type', 'text');
        e.target.classList.add('password-visible');
    }
  }
});