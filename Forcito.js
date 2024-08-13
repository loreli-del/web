    
    var edades =[10,18,60,27];
    var suma=0, promedio=0;
    var mayor=0, menor=0;
    var seleccion;
    
    seleccion=parseInt( prompt("Ingrese \n 1- Imprimir arreglo \n 2- Imprimir edad promedio \n 3-Visualizar contenido"));
    while(seleccion<1 || seleccion>3)
        {seleccion=parseInt( prompt("Ingrese \n 1- Imprimir arreglo \n 2- Imprimir edad promedio \n 3-Visualizar contenido"));
    }
            
    
    //Procesos
    switch(seleccion) 
    {
        case 1: 
        {
            document.write("Imprimiendo el contenido del arreglo: ");
            for (let index = 0; index < edades.length; index++) {
      
            document.writeln(edades[index], "-"); 
            }
            break;
        }
        case 2: 
        {
            document.write("Utilizando acumuladores "+"<br>");
            for (let index = 0; index < edades.length; index++) {
            suma=suma+edades[index]; 
            }
            promedio = suma/edades.length;
            document.write("La edad promedio es: "+promedio.toFixed(2));
            break;
        }
        case 3: 
        {
            document.write("Utilizando conteos ", "<br>");
            for (let index = 0; index < edades.length; index++) {
                if (edades[index]>=18) {
                 mayor++;
            } else {
              menor++;
            }   
            }
            document.write("La cantidad menores a 18 son: ", menor, "<br>");
            document.write("La cantidad mayores a 18 son: ", mayor, "<br>");
            break;
        }
    }
    
      