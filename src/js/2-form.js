
const formData = {
    email: "",
    message: ""
}

const form = document.querySelector(".feedback-form");

form.addEventListener("input", handleInput);

document.addEventListener("DOMContentLoaded", getText);

function handleInput(event) {
    const key = event.target.name;
    formData[key] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function getText() {
    const data = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (data) {
        const { email, message } = data;
        form.elements.email.value = email;
        form.elements.message.value = message;
    }
}

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const email = event.target.elements.email.value.trim();
    const message = event.target.elements.message.value.trim();

    if (email === '' || message === '') {
        alert(`Please fill in all fields`);
        return;
    }

    localStorage.removeItem("feedback-form-state");
    Object.keys(formData).forEach(key => {
        formData[key] = '';
    });
    form.reset();
}
