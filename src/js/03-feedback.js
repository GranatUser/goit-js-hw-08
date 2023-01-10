import Lodash from 'lodash';

let formData = {};

const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const input = document.querySelector(".feedback-form input");
const textarea = document.querySelector(".feedback-form textarea");

update();
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (input.value === undefined || input.value === "") {
        window.alert("Введіть свій email!");
        return;
    }
    delete formData.email;
    delete formData.message;
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
});

form.addEventListener("input", Lodash.throttle(updateFormData), 500);

function updateFormData(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function update() {
    if ((JSON.parse(localStorage.getItem(STORAGE_KEY))) !== null) {
        formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
        input.value = formData.email === undefined ? "" : formData.email;
        textarea.value = formData.message === undefined ? "" : formData.message;
    }
}


