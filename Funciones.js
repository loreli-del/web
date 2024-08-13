function opc2 (){


var opc;
opc = parseInt(prompt("Ingrese la opcion que desea ver"));
while(opc<1 || opc>5)
    {
        opc = parseInt(prompt( "Ingrese la opcion que desea ver"));
    }

        switch(opc)
        {
            case 1:
            {
                semana();
                break;
            }
            case 2: 
            {
                document.write(" Imprimiendo la frase"+"<br>");
                frase();
                break;
            }
            case 3: 
            {
                document.write("Imprimiendo la serie en forma asendente"+"<br>");
                serie();
                break;
            }
            case 4: 
            {
                document.write("Imprimiendo la serie en forma desendente "+"<br>");
                hola();
                break;
              
            }
          
           
        }
    }

var final = 100000;
var inicio = 1000;

function serie(){
for (let index= inicio; index<=final; index=index+1000)
{
    document.write(index+"--");
   
}
}

document.write("<br>");

function hola(){
for (let index= final; index>=inicio; index=index-1000)
    {
    document.write(index+"--");
    } 
       
}


var texto="BUENOS DIAS GENTE BELLA";
var k=1;

function frase()
{
    while(k<=10)
        {
            document.write(texto+"<br>");

            k++;
        }

}

var dias = ["lunes", "martes", "miercoles", "jueves", "viernes", " sabado", "domingo"]; //areglo inicializado
function semana()
{
for (let index = 0; index < dias.length; index++) {
   document.writeln(dias[index]+"<br>");
    
}

}

/*
//llamando la funcion
//semana();*/


