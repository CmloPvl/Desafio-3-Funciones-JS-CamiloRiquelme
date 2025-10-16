
// function pintar(){
// ele.style.backgroundColor = 'yellow'
// }
// const ele = document.getElementById("ele1")
// ele.addEventListener("click", pintar);


2.2
// function pintar(elemento) {
// elemento.style.background = "yellow";
// }

// const ele = document.getElementById("ele1");

// ele.addEventListener("click", function() {
//     pintar(ele);
// });


// 2.3
function pintar(elemento, color = 'green') {
    elemento.style.background = color;
}

const ele = document.getElementById("ele1");

ele.addEventListener("click", function() {
    pintar(ele, 'yellow');
});


