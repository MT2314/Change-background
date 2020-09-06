document.getElementById("button").addEventListener("click", changeC);
let container = document.getElementById("container")
let colors = [
    "red", "blue", "green", "black"
]

function changeC(){
    let color = (colors[Math.floor(Math.random() * colors.length)]);
    container.style.backgroundColor = color;
};