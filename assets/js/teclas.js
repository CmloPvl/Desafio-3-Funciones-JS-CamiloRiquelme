
let colorSeleccionado = '';

const keyDiv = document.getElementById('key');

function crearDiv(color) {
  const nuevoDiv = document.createElement('div');
  nuevoDiv.style.width = '200px';
  nuevoDiv.style.height = '200px';
  nuevoDiv.style.backgroundColor = color;
  nuevoDiv.style.border = '1px solid black';
  document.body.appendChild(nuevoDiv);
}

document.addEventListener('keydown', function(event) {
  if(event.key === 'a') {
    colorSeleccionado = 'pink';
    keyDiv.style.backgroundColor = colorSeleccionado;
  } else if(event.key === 's') {
    colorSeleccionado = 'orange';
    keyDiv.style.backgroundColor = colorSeleccionado;
  } else if(event.key === 'd') {
    colorSeleccionado = 'lightblue';
    keyDiv.style.backgroundColor = colorSeleccionado;
  } else if(event.key === 'q') {
    crearDiv('purple');
  } else if(event.key === 'w') {
    crearDiv('gray');
  } else if(event.key === 'e') {
    crearDiv('brown');
  }
});
