(function () {
  const patterns = {
    username: /^[a-z\d\-]{4,}$/i,
    password: /^[\w@\-_?.]{4,}$/,
    email: /^([a-z\d\.\-]+)@([a-z\d]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  };
  const inputFields = document.querySelectorAll(".form-control");
  const submitBtn = document.querySelector(".submit-btn");
  const form = document.querySelector(".form");
  const errorEl = document.querySelector(".error-alert");
  const displayError = (e, text) => {
    e.preventDefault();
    errorEl.classList.add("display-error");
    errorEl.textContent = text;
    setTimeout(() => {
      errorEl.classList.remove("display-error");
    }, 2000);
  };
  form.addEventListener("submit", (e) => {
    const user = {};
    let username;
    inputFields.forEach((input) => {
      const attribute = input.getAttribute("name");
      user[attribute] = input.value;
      if (!input.value) {
        displayError(e, "please fill in all parameters");
        return;
      }
      if (!patterns[attribute].test(input.value)) {
        displayError(e, "please input parameters in a vaild format");
        return;
      }
      if (attribute == "username") {
        username = input.value;
      }
    });
    if(localStorage.getItem(username)){
        displayError(e,'sorry, a user with this details exist already');
        return;
    }else{
        localStorage.setItem(username, JSON.stringify(user))
    }
  });
})();


