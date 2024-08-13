
var salario= new Array(5);
        var aumento= new Array(5);
        var aumento2= new Array(5);
        var x=0;//Inicializada
        while(x<salario.length) //comprobando
        {
            
            salario[x]=parseFloat(prompt("Ingrese el salario")); //como salario esta declarado como arreglo, se le agregarn los corchetes y la variable x 
            if (salario[x]>=365)
            {
            aumento[x]= salario[x]*1.20;
            aumento2[x]= salario[x]*1.35;


            x++ //actualizando
            }
            else if (salario[x]<365)
            {
                salario[x]=parseFloat(prompt("Vuelva a ingresar el salario"));

            }
        }//fin while
        

        //Mostrando el contenido de los arreglos
        var j=0;
        document.write("_________________________________________________________<br>");
        document.write("SALARIO -------------AUMENTO ----------------- AUMENTO 35%<br>");
        document.write("_________________________________________________________<br>");
        while(j<salario.length)
        {
            document.write(salario[j]+" --------------------------"+aumento[j].toFixed(2)+"------------------"+aumento2[j].toFixed(2)+"<br>");
            document.write("<br><br>");


            j++;
        }
        document.write("_________________________________________________________<br>");

    