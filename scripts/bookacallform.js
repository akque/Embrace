import { inputAnimation } from "./animation.js"

const form = document.querySelector(".book-call-form")
const formOverlay = document.querySelector(".book-call-form-overlay")
const formOpenBtn = document.querySelector(".header-call-booking")
const formCloseBtn = document.querySelector(".book-call-form-close-btn")
const formOpenBtn2 = document.querySelector(".cta-banner-second-cont-btn")


function formSubmit(e) {
    e.preventDefault()
    formOverlay.classList.add("hidden")
    const { phoneNumber, firstName, dateTime } = form.elements
    const bookingObj = {
        phone: phoneNumber.value,
        firstName: firstName.value,
        date: dateTime.value,
    }
    console.log(bookingObj)
}

function initValidation(inputSelector, submitSelector) {
    const inputs = document.querySelectorAll(inputSelector)
    const submit = document.querySelector(submitSelector)
    inputs.forEach((input) => input.addEventListener('input', () => validation(input, submit, inputs)))
}

function validation(input, submit, inputs) {
    const errorMessage = input.nextElementSibling
    if (input.validity.valueMissing) {
        errorMessage.textContent = "Input is empty!"
        input.animate(inputAnimation.params, inputAnimation.delay);
    }
    else if (input.validity.patternMismatch) {
        errorMessage.textContent = errorMessage.getAttribute("data-error-pattern")
        input.animate(inputAnimation.params, inputAnimation.delay);
    }
    else if (input.validity.tooLong || input.validity.tooShort) {
        errorMessage.textContent = errorMessage.getAttribute("data-error-length")
        input.animate(inputAnimation.params, inputAnimation.delay);
    }
    else {
        errorMessage.textContent = ""
    }
    submit.disabled = ![...inputs].every((inp) => inp.validity.valid)
}



form.addEventListener("submit", formSubmit)
formOpenBtn.addEventListener("click", () => formOverlay.classList.remove("hidden"))
formCloseBtn.addEventListener("click", () => formOverlay.classList.add("hidden"))
formOpenBtn2.addEventListener("click", () => formOverlay.classList.remove("hidden"))

initValidation(".book-call-form-data-input", ".book-call-form-send-btn")