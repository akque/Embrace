const form = document.querySelector(".book-call-form")
const formOverlay = document.querySelector(".book-call-form-overlay")
const formOpenBtn = document.querySelector(".header-call-booking")
const formCloseBtn = document.querySelector(".book-call-form-close-btn")
const formOpenBtn2 = document.querySelector(".cta-banner-second-cont-btn")
const inputsArray = []

function formSubmit (e) {
    e.preventDefault()
    initValidation(".book-call-form-data-input", ".book-call-form")
}

function initValidation (inputSelector, submitSelector) {
    const inputs = document.querySelectorAll(inputSelector)
    const submit = document.querySelector(submitSelector)
    inputs.forEach((input) => validation(input, submit, inputs))
}

function validation (input, submit, inputs) {
    const errorMessage = input.nextElementSibling
    if (input.validity.valueMissing) {
        errorMessage.textContent = "Input is empty!"
        input.animate(
            [{color: "red", border: "solid 1px rgba(0, 0, 0, 0.2)"}, {offset: 0.1, border: "solid 1px red", transform: "translateX(-0.5px)"}, {offset: 0.2, transform: "translateX(1px)"}, {offset: 0.3, transform: "transform: translateX(-2px)"}, {offset: 0.4, transform: "translateX(2px)"}, {offset: 0.5, transform: "translateX(-2px)"}, {offset: 0.6, transform: "translateX(2px)"}, {offset: 0.7, transform: "translateX(-2px)"}, {offset: 0.8, transform: "translateX(1px)"}, {offset: 0.9, transform: "translateX(-0.5px)"}, {offset: 1, border: "solid 1px rgba(0, 0, 0, 0.2)", color: "black"}],
            2000
        );
    }
    else if (input.validity.patternMismatch) {
        errorMessage.textContent = errorMessage.getAttribute("data-error-pattern")
        input.animate(
            [{color: "red", border: "solid 1px rgba(0, 0, 0, 0.2)"}, {offset: 0.1, border: "solid 1px red", transform: "translateX(-0.5px)"}, {offset: 0.2, transform: "translateX(1px)"}, {offset: 0.3, transform: "transform: translateX(-2px)"}, {offset: 0.4, transform: "translateX(2px)"}, {offset: 0.5, transform: "translateX(-2px)"}, {offset: 0.6, transform: "translateX(2px)"}, {offset: 0.7, transform: "translateX(-2px)"}, {offset: 0.8, transform: "translateX(1px)"}, {offset: 0.9, transform: "translateX(-0.5px)"}, {offset: 1, border: "solid 1px rgba(0, 0, 0, 0.2)", color: "black"}],
            2000
        );
    }   
    else if (input.validity.tooLong || input.validity.tooShort){
        errorMessage.textContent = errorMessage.getAttribute("data-error-length")
        input.animate(
            [{color: "red", border: "solid 1px rgba(0, 0, 0, 0.2)"}, {offset: 0.1, border: "solid 1px red", transform: "translateX(-0.5px)"}, {offset: 0.2, transform: "translateX(1px)"}, {offset: 0.3, transform: "transform: translateX(-2px)"}, {offset: 0.4, transform: "translateX(2px)"}, {offset: 0.5, transform: "translateX(-2px)"}, {offset: 0.6, transform: "translateX(2px)"}, {offset: 0.7, transform: "translateX(-2px)"}, {offset: 0.8, transform: "translateX(1px)"}, {offset: 0.9, transform: "translateX(-0.5px)"}, {offset: 1, border: "solid 1px rgba(0, 0, 0, 0.2)", color: "black"}],
            2000
        );
    }
    else {
        errorMessage.textContent = ""
        inputsArray.push(input)
    }
    inputsArray.every((inp) => inp.validity.valid) ? formDataUpload(input) : false
}

function formDataUpload (input) {
    formOverlay.classList.add("hidden")
    const {phoneNumber, firstName, dateTime} = form.elements
    const bookingObj = {
        phone:phoneNumber.value,
        firstName:firstName.value,
        date:dateTime.value,
    }
    console.log(bookingObj)
}

form.addEventListener("submit", formSubmit)
formOpenBtn.addEventListener("click", () => formOverlay.classList.remove("hidden"))
formCloseBtn.addEventListener("click", () => formOverlay.classList.add("hidden"))
formOpenBtn2.addEventListener("click", () => formOverlay.classList.remove("hidden"))