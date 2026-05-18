const button = document.getElementById("bttn-primary");

button.addEventListener("click", function () {
    alert("Form send it");
});

const buttonColor = document.getElementById("btn-color");

buttonColor.addEventListener("click", function () {
    document.body.style.backgroundColor = "grey";
    document.body.style.color = "black"
});
