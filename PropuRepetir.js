
var canti=0; 
var j=1000; //dolares

canti=parseFloat(prompt("Ingrese el salario")); 
while(j<1000 || j>100000) //comprobando
{
    
    canti=parseFloat(prompt("Ingrese el salario"));  

}

        document.write("_________________________________________________________<br>");
        document.write("DOLARES-----------------------BTC------------------------------- ETH<br>");
        document.write("_________________________________________________________<br>");
        while(j<=canti)
        {
            document.write(j+" ---------------"+j/57810+"------------"+j/3062+"<br>");
            document.write("<br><br>");
            


            j++;
        }
        document.write("_________________________________________________________<br>");

    