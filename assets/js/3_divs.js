// 3

const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const div4 = document.getElementById('div4');

function pintarNegro(elemento) {
  elemento.style.backgroundColor = 'black';
}

div1.addEventListener('click', function() {
  pintarNegro(div1);
});

div2.addEventListener('click', function() {
  pintarNegro(div2);
});

div3.addEventListener('click', function() {
  pintarNegro(div3);
});

div4.addEventListener('click', function() {
  pintarNegro(div4);
});
