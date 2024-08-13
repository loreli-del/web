
 //Declarando variables
    let servicio, forma, costo, tarjeta;
    let descuento=0.25;
    //captura de datos
alert("Servicios disponibles");
servicio=parseInt( prompt("Ingrese \n 1 para alisado \n 2- Uñas \n 3-Tinte \n 4-Masaje \n 5-Pestañas"));
while(servicio<1 || servicio>5)
    {
        servicio=parseInt( prompt("Ingrese \n 1- Alisado \n 2- Uñas \n 3-Tinte \n4-Masaje \n5-Pestañas"));
    }

forma= parseInt(prompt("Ingrese la forma de pago: \n 1-Credito \n 2-Efectivo"));
while(forma<1 || forma>2)
    {
        forma= parseInt(prompt("Ingrese la forma de pago: \n 1-Credito \n 2-Efectivo"));
    }
tarjeta= parseInt(prompt("Posee tarjeta de cliente frecuente: \n 1-Si \n 2-No"));
while(tarjeta<1 || tarjeta>2)
    {
        tarjeta= parseInt(prompt("Posee tarjeta de cliente frecuente: \n 1-Si\n 2-No"));
    }


    //procesos
    switch(servicio)
    {
    case 1:
        {
        costo=50;
        break;
        }
    case 2:
        {
        costo=25;
        break;
        }
    case 3: 
        {
        costo=35;
        break;
        }
    case 4: 
        {
        costo=25;
        break;
        }
    case 5: 
        {
        costo=15;
        break;
        }
    }
//Impresion
//Si paga con tarjeta de credito

    if(forma==1 && servicio==1 && tarjeta==1)
        {
        document.write("Usted se hizo un alisado<br>");
        document.write("Usted ha cancelado con tarjetade credito<br>");
        document.write("El costo inicial del servicio es de: "+costo+"<br>");
        document.write("Se le hara el recargo del 10% ="+(costo*0.10)+"<br>");
        document.write("El descuento con tarjeta de cliente freceunte es: "+(costo*1.10).toFixed(2)*descuento+"<br>");
        document.write("El pago total será de: "+(costo*1.10-(costo*1.10).toFixed(2)*descuento));

     } 
    else if(forma==1 && servicio==1 && tarjeta==2)
    {
        document.write("Usted se hizo un alisado<br>");
        document.write("Usted ha cancelado con tarjetade credito<br>");
        document.write("El costo inicial del servicio es de: "+costo+"<br>");
        document.write("Se le hara el recargo del 10% ="+(costo*0.10)+"<br>");
        document.write("El pago total será de: "+(costo*1.10).toFixed(2));
    
    } 

    else if(forma==1 && servicio==2 && tarjeta==1)
        {
            document.write("Usted se hizo un servicio en uñas<br>");
            document.write("Usted ha cancelado con tarjetade credito<br>");
            document.write("El costo inicial del servicio es de: "+costo+"<br>");
            document.write("Se le hara el recargo del 10% ="+(costo*0.10)+"<br>");
            document.write("El descuento del 25% con tarjeta de cliente freceunte es: "+(costo*1.10)*descuento+"<br>");
            document.write("El pago total será de: "+(costo*1.10-(costo*1.10)*descuento));
    
        } 

    else if (forma==1 && servicio ==2 && tarjeta==2){
        
        document.write("Usted se ha realizado un servicio en uñas<br>");
        document.write("Usted ha cancelado con tarjetade credito<br>");
        document.write("El costo inicial del servicio es de: "+costo+"<br>");
        document.write("Se le hara el recargo del 10% ="+(costo*0.10)+"<br>");
        document.write("El pago total será de: "+(costo*1.10));
    }

    else if(forma==1 && servicio==3 && tarjeta==1)
        {
            document.write("Usted se hizo un servicio en tinte<br>");
            document.write("Usted ha cancelado con tarjetade credito<br>");
            document.write("El costo inicial del servicio es de: "+costo+"<br>");
            document.write("Se le hara el recargo del 10% ="+(costo*0.10)+"<br>");
            document.write("El descuento del 25% con tarjeta de cliente freceunte es: "+(costo*1.10)*descuento+"<br>");
            document.write("El pago total será de: "+(costo*1.10-(costo*1.10)*descuento));
    
        } 
    else if(forma==1 && servicio ==3 && tarjeta==2){
        
        document.write("Usted se ha realizado un servicio en tinte <br>");
        document.write("Usted ha cancelado con tarjetade credito<br>");
        document.write("El costo inicial del servicio es de: "+costo+"<br>");
        document.write("Se le hara el recargo del 10% ="+(costo*0.10)+"<br>");
        document.write("El pago total será de: "+(costo*1.10));
    } 

    else if(forma==1 && servicio==4 && tarjeta==1)
        {
            document.write("Usted se hizo un servicio en masaje<br>");
            document.write("Usted ha cancelado con tarjetade credito<br>");
            document.write("El costo inicial del servicio es de: "+costo+"<br>");
            document.write("Se le hara el recargo del 10% ="+(costo*0.10)+"<br>");
            document.write("El descuento del 25% con tarjeta de cliente freceunte es: "+(costo*1.10)*descuento+"<br>");
            document.write("El pago total será de: "+(costo*1.10-(costo*1.10)*descuento));
    
        } 
    else if(forma==1 && servicio ==4 && tarjeta==2){
        
        document.write("Usted se ha realizado un servicio en masaje<br>");
        document.write("Usted ha cancelado con tarjetade credito<br>");
        document.write("El costo inicial del servicio es de: "+costo+"<br>");
        document.write("Se le hara el recargo del 10% ="+(costo*0.10)+"<br>");
        document.write("El pago total será de: "+(costo*1.10));
    } 

    else if(forma==1 && servicio==5 && tarjeta==1)
        {
            document.write("Usted se hizo un servicio en pestañas<br>");
            document.write("Usted ha cancelado con tarjetade credito<br>");
            document.write("El costo inicial del servicio es de: "+costo+"<br>");
            document.write("Se le hara el recargo del 10% ="+(costo*0.10)+"<br>");
            document.write("El descuento del 25% con tarjeta de cliente freceunte es: "+(costo*1.10)*descuento+"<br>");
            document.write("El pago total será de: "+(costo*1.10-(costo*1.10)*descuento));
    
        } 
    else if(forma==1 && servicio ==5 && tarjeta==2){
        
        document.write("Usted se ha realizado un servicio en pestañas<br>");
        document.write("Usted ha cancelado con tarjetade credito<br>");
        document.write("El costo inicial del servicio es de: "+costo+"<br>");
        document.write("Se le hara el recargo del 10% ="+(costo*0.10)+"<br>");
        document.write("El pago total será de: "+(costo*1.10));
    } 

//Si escogio pagar con efectivo

    else if (forma==2 && servicio==1 && tarjeta==1){
        document.write("Usted se hizo un alisado<br>");
        document.write("Usted ha cancelado en efectivo<br>");
        document.write("El costo inicial del servicio es de: "+costo+"<br>");
        document.write("El descuento del 25% con tarjeta de cliente freceunte es: "+costo*descuento+"<br>");
        document.write("El pago total será de: "+(costo-(costo*descuento)));
    }
    else if (forma==2 && servicio==1 && tarjeta==2){
        document.write("Usted se hizo un alisado<br>");
        document.write("Usted ha cancelado en efectivo<br>");
        document.write("El pago total será de: "+costo);
    }

    else if (forma==2 && servicio==2 && tarjeta==1){
        document.write("Usted se ha realizado un servicio de uñasbr>");
        document.write("Usted ha cancelado en efectivo<br>");
        document.write("El costo inicial del servicio es de: "+costo+"<br>");
        document.write("El descuento del 25% con tarjeta de cliente freceunte es: "+costo*descuento+"<br>");
        document.write("El pago total será de: "+(costo-(costo*descuento)));
    }
    else if (forma==2 && servicio ==2 && tarjeta==2){
        
        document.write("Usted se ha realizado un servicio en uñas<br>");
        document.write("Usted ha cancelado en efectivo<br>");
        document.write("El pago total será de: "+costo);
    }

    else if (forma==2 && servicio==3 && tarjeta==1){
        document.write("Usted se ha realizado un servicio de tintebr>");
        document.write("Usted ha cancelado en efectivo<br>");
        document.write("El costo inicial del servicio es de: "+costo+"<br>");
        document.write("El descuento del 25% con tarjeta de cliente freceunte es: "+costo*descuento+"<br>");
        document.write("El pago total será de: "+(costo-(costo*descuento)));
    }
     else if(forma==2 && servicio ==3 && tarjeta==2){
        
        document.write("Usted se ha realizado un servicio en tinte<br>");
        document.write("Usted ha cancelado en efectivo<br>");
        document.write("El pago total será de: "+costo);
    } 

    else if (forma==2 && servicio==4 && tarjeta==1){
        document.write("Usted se ha realizado un servicio de tintebr>");
        document.write("Usted ha cancelado en efectivo<br>");
        document.write("El costo inicial del servicio es de: "+costo+"<br>");
        document.write("El descuento del 25% con tarjeta de cliente freceunte es: "+costo*descuento+"<br>");
        document.write("El pago total será de: "+(costo-(costo*descuento)));
    }
    else if(forma==2 && servicio ==4 && tarjeta==2){
        
        document.write("Usted se ha realizado un servicio en masaje<br>");
        document.write("Usted ha cancelado en efectivo<br>");
        document.write("El pago total será de: "+costo);
    } 

    else if (forma==2 && servicio==5 && tarjeta==1){
        document.write("Usted se ha realizado un servicio de tintebr>");
        document.write("Usted ha cancelado en efectivo<br>");
        document.write("El costo inicial del servicio es de: "+costo+"<br>");
        document.write("El descuento del 25% con tarjeta de cliente freceunte es: "+costo*descuento+"<br>");
        document.write("El pago total será de: "+(costo-(costo*descuento)));
    }
    else if(forma==2 && servicio ==5 && tarjeta==2){
        
        document.write("Usted se ha realizado un servicio en pestañas<br>");
        document.write("Usted ha cancelado en efectivo<br>");
        document.write("El pago total será de: "+costo);
    } 
   

 
