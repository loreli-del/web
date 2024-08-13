
function Tablita(inicio, fin)

{
    var inicio= parseInt(prompt("Ingrese el valor inicial de la tabla"));
    var fin = parseInt(prompt("Ingrese el valor final de la tabla"));

let valor = parseInt(prompt("Ingrese que tabla de multiplicar desea obtner: "));
if(inicio<=fin){

    document.write("Mostrando el contenido en forma ascendente"+ "<br>")    
    for( let f=inicio; f<=fin; f++) {
    let tabla = f * valor;
    document.write(f + "*" + valor + " = " + tabla + "<br>")

}
} else {
    document.write("Mostrando el contenido en forma descendente <br>")
    for( let f=inicio; f>=fin; f--) {
    let tabla = f * valor;
    document.write(f + "*" + valor + " = " + tabla + "<br>")
}
}
}
