var si,i,desc,desc2, sf,n;
var cant, opc;

let SAL=0;
var DESC1=0;
var DESCUNI=0;
var CANTE=0;
var CANTG=0;

cant = prompt("Ingresar numero de empleados: ");



			document.write('<b>PLANILLA DE EMPLEADOS</b><br><br>');
			document.write('<table border=1>');
			document.write('<tr><td>Número obrero</td><td>Nombre Obrero</td><td>Salario inicial</td><td>Descuento</td><td>Descuento por uniforme</td><td>Salario final</td></tr>');
        
			
            for (i=1;i<=cant;i++)
				{
					n=prompt('Digite el nombre del obrero número '+i+'');
                    si=prompt('Digite el salario inicial del empleado','');
                    while (si<=356)
                        {
                            si=prompt('Digite el salario inicial del empleado','');
                           
                        }
                    opc=prompt("Ejerce el cargo de gerente: \n1-Si \n2-No");
                    while (opc<1 || opc>2)
                        {
                            opc=prompt("Ejerce el cargo de gerente: \n1-Si \n2-No"); 
                        }
                        if (opc==1){
                            desc2=si*0.05;
                            CANTG++;
                        } else if (opc==2){
                            desc2=si*0.025
                            CANTE++;
                        }
                    desc=si*0.05;
					sf=si-desc-(desc2);
                    SAL=SAL+sf;
                    DESC1=DESC1+desc;
                    DESCUNI=DESCUNI+desc2;

					document.write('<tr><td>'+i+'</td><td>'+n+'</td><td>$'+si+'</td><td>$'+desc+'</td><td>$'+desc2+'</td><td>$'+sf+'</td></tr>');
                    
           
                }
			document.write('</table>');

            document.write('<br><br><b>TOTAL DE MONTOS</b><br><br>');
			document.write('<table border=1>');
			document.write('<tr><td>Monto total de salarios</td><td>Monto total descuento</td><td>Monto total desceunto por uniforme</td><td>Cantidad de gerentes</td><td>Cantidad de otros empleados</td></tr>');
            document.write('<tr><td>$'+SAL.toFixed(2)+'</td><td>$'+DESC1.toFixed(2)+'</td><td>$'+DESCUNI.toFixed(2)+'</td><td>'+CANTG+'</td><td>'+CANTE+'</td></tr>');
           
            
           
