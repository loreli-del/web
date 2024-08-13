
let empleado= new Array (4);
let salario= new Array (4);
let nuevoSalario= new Array(4);
let renta= new Array(4);
let ISSS= new Array(4); 0.03
let AFP= new Array(4); 0.0625

var x=0;

ISSS[x]= salario[x]*0.03;
AFP[x]= salario[x]*0.0625

var SIT= SIT + salario[x];
var SNT= SNT + nuevoSalario[x];
var ISSST= ISSST + ISSS[x];
var AFPT= AFPT + AFP[x];

//empleado= prompt("Ingrese su nombre: ")
while (x<empleado.length)
    {
        empleado[x]= prompt("Ingrese su nombre: ")
        
        salario[x]= parseFloat(prompt("Ingrese su salario: "))
        while (salario[x]<257 || salario[x]>3000)
    {
        salario[x]= parseFloat(prompt("Ingrese su salario: "))     
    

    }
    nuevoSalario= (salario[x]-ISSS-AFP);
    alert("Salario "+nuevoSalario);


        x++;

    }



    menu=parseInt(prompt("Que desea ver: \n 1- Total de vectores \n2- Impresion de los vectores "))
        while(menu<1 || menu>2)
    {
        menu=parseInt(prompt("Que desea ver: \n 1- Total de vectores \n2- Impresion de los vectores "))
    }


switch(menu){
    case 1:
        {
    
        document.write("_________________________________________________________________________________<br>");
        document.write("SALARIO INICIAL -------- NUEVO SALARIO ------- ISSS --------- AFP -------- RENTA ------- SALARIO FINAL-----<br>");
        document.write("__________________________________________________________________________________<br>");
        
            document.write(SIT + "---------" + SNT + "-------" + ISSST + "------" + AFPT + "------" + renta[x].toFixed(2));
            document.write("<br><br>");
            
        
        

    

            break;
        
    }
    case 2:
        {
     

            if (nuevoSalario<=472){ 
                renta= nuevoSalario;

                document.write("Nombre del empleado: "+empleado+"<br>");
                document.write("Salario: "+salario+ "<br>");
                document.write("El tramo en el que se encuentra es Tramo 1- $0.01--$472.00"+ "<br>");
                document.write("Nuevo salario total: "+ nuevoSalario+ "<br>");
                document.write("ISSS total: "+ ISSS+ "<br>");
                document.write("AFP total: "+ AFP+ "<br>");
                document.write("Renta total: "+ renta+ "<br>")
                document.write("Salario final total: "+ (nuevoSalario-renta)+ "<br>")

            }
            else if (nuevoSalario<=895){
                renta= (nuevoSalario-472.00)*0.10 + 17.67;

                document.write("Nombre del empleado:"+empleado+"<br>");
                document.write("Salario: "+salario+ "<br>");
                document.write("Nuevo salario: "+ nuevoSalario+ "<br>");
                document.write("El tramo en el que se encuentra es  Tramo 2- $472.01 -- $895.24 "+ "<br>");
                document.write("ISSS total: "+ ISSS+ "<br>");
                document.write("AFP total: "+ AFP+ "<br>");
                document.write("Renta: "+ renta+ "<br>");
                document.write("Salario final total: "+ (nuevoSalario-renta)+ "<br>")
            }
            else if(nuevoSalario<=2.038){
                renta= (nuevoSalario-895.24)*0.20 + 60.00;

                document.write("Nombre del empleado: "+empleado+"<br>");
                document.write("Salario: "+salario+ "<br>");
                document.write("Nuevo salario: "+ nuevoSalario+ "<br>");
                document.write("El tramo en el que se encuentra es Tramo 3- $895.25 -- $2,038.11 "+ "<br>");
                document.write("ISSS total: "+ ISSS+ "<br>");
                document.write("AFP total: "+ AFP+ "<br>");
                document.write("Renta: "+ renta+ "<br>");
                document.write("Salario final total: "+ (nuevoSalario-renta)+ "<br>")
            }
            else if(nuevoSalario>=2.038){
                renta= (nuevoSalario-2.038,11)*0.30 + 288.57;
            
                   
                document.write("Nombre del empleado: "+empleado+"<br>");
                document.write("Salario: "+salario+ "<br>");
                document.write("Nuevo salario: "+ nuevoSalario+ "<br>");
                document.write("El tramo en el que se encuentra es  Tramo 4- $2,038.11 -- En adelante"+ "<br>");
                document.write("ISSS total: "+ ISSS+ "<br>");
                document.write("AFP total: "+ AFP+ "<br>");
                document.write("Renta: "+ renta+ "<br>");
                document.write("Salario final total: "+ (nuevoSalario-renta)+ "<br>")
            }
            break;
        
    }
}











