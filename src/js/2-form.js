

const formData = {
    email: "",
    message: ""
}

const form = document.querySelector(".feedback-form");


form.addEventListener("input", handleInput);

function handleInput(event) {
    const key = event.target.name;

    formData[key] = event.target.value;

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};

function getText() {
    const data = JSON.parse(localStorage.getItem("feedback-form-state"));

    console.log(data);
    if (!data) {
        return;
    }

    const { email, message } = form.elements;
     email.value = data.email;
     message.value = data.message;

}

console.log(getText());


form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

  
    if (formData.email.trim() === '' || formData.message.trim( )=== '') {
        alert(`Fill please all fields`);
    }
    console.log(formData);
   
    localStorage.removeItem("feedback-form-state");
    formData.email = '';
    formData.message = '';
    form.reset();
}
  