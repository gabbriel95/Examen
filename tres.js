function mostrar()
{
	var nombre;
	var estadoCivil;
	var edad;
	var temperaturaCorporal;
	var sexo;
	var contadorViudos=0;
	var contadorMujer=0;
	var contadorSolteros=0;
	var contadorPasajeros=0;
	var edadMujerJoven;
	var nombreMujerJoven;
	var bandera=0;
	const precio=600;
	var precioBruto;

	do {
		do {
		  nombre = prompt("Ingrese nombre");
		} while (!isNaN(nombre));
	
		do{
			estadoCivil=prompt("Ingrese estado civil (soltero-casado-viudo");
		}while(estadoCivil!="soltero" && estadoCivil!="casado" && estadoCivil!="viudo")
		contadorPasajeros++;
		do {
		  edad = parseInt(prompt("edad"));
		  if(estadoCivil=="viudo" && edad>60){
			  contadorViudos++;
		  }
		  if(estadoCivil=="soltero"){
			  contadorSolteros++;
		  }
		} while (isNaN(edad) || edad < 17 || edad > 100);
	
		do{
			temperaturaCorporal=parseFloat(prompt("Ingrese temperatura corporal"));

		}while(isNaN(temperaturaCorporal) || temperaturaCorporal>42 || temperaturaCorporal<37)

		do {
		  sexo = prompt("Sexo (femenino-masculino-no binario)");
		  if(sexo=="femenino"){
			  contadorMujer++;
		  }
		} while (sexo != "femenino" && sexo != "masculino" && sexo != "no binario");
	
		
		if(bandera==0 && sexo=="femenino" && estadoCivil=="soltero"){
		  edadMujerJoven= edad;
		  nombreMujerJoven= nombre;
		  bandera==1;
		}else if(bandera==1 && sexo=="femenino" && estadoCivil=="soltero" && edad<edadMujerJoven){
		  edadMujerJoven= edad;
		  nombreMujerJoven= nombre;
		}
		
		respuesta = confirm("Desea agregar otro alumno");
	  } while (respuesta);

	  precioBruto=precio*contadorPasajeros;
	  
	  if(contadorViudos>=1){
		  console.log("La cantidad de viudos mayores a 60 años es " + contadorViudos);
		}
		
		if(contadorMujer>=1 && contadorSolteros>=1 ){
			console.log("El nombre de la mujer soltera mas joven es " + nombreMujerJoven + " y tiene " + edadMujerJoven + " años");
		}

		console.log("El precio sin descuento es de " + precioBruto);
		
	}
