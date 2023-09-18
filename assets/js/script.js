function pintar(elemento, color = 'green') {
  elemento.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");
ele.addEventListener("click", function() {
  pintar(ele,'yellow');
});

// Tuve unos problemas para entender este problema:
// En la ayudantia, indicaba que el color del div deberia ser amarillo por defecto y pintarlo verda al hacer click.
// pero eso no es lo que dice la guia, ya que dice "al hacer clic en elpárrafo se debe pasar amarillo como color. " 
// por eso viene pintar con el parametro yellow...
// entiendo que green es por defecto, pero en ningun momento se menciona que la funcion debe ejecutarse en el load, por eso
// no entendi en que momento deberia quedar verde, si es que deberia quedar en ese color.