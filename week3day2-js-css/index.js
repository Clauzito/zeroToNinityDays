const btnSubmit = document.getElementById("btn-form");

btnSubmit.addEventListener("click", function() {
    alert("Thanks for your Time. Form Send it!")
});

const btnChangeBg = document.getElementById("btn-changeBg");

btnChangeBg.addEventListener("click", function() {
    document.body.style.backgroundColor = "#353535";
    document.body.style.color = "black";
});