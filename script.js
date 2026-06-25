const submitButton = document.querySelector("button[type='submit']");
const startState = document.querySelector(".start-state");
const endState = document.querySelector(".end-state");
const valueSpan = document.querySelector("#rating-selected-value");

submitButton.addEventListener("click", e => {
    const selectedRating = document.querySelector('input[name="rating"]:checked');

    if(!selectedRating) return;

    let result = selectedRating.value;
    console.log(result);
    startState.classList.add("hide");
    endState.classList.remove("hide");
    valueSpan.textContent = result;
});