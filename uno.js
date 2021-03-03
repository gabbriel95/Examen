
function mostrar()
{
	
	var nombreProducto;
	var precio;
	var cantidadProducto;
	var tipoProducto;
	var marca;

	var acumuladorTipos=0;	
	var acumuladorInifugo=0;
	var acumuladorCombustible=0;
	var acumuladorExplosivo=0
	var contadorTipos=0;
	var contadorInifugos=0;
	var contadorCombustible=0;
	var contadorExplosivo=0;
	var acumuIACbarato=0;

	var promedioInifugo;
	var promedioCombustible;
	var promedioExplosivo;

	var marcaMaxCaro;
	var tipoMaxCaro;
	var precioMaxCaro;
	var flag=0;


	
	for(var i = 0; i<2;i++){
		do{
			nombreProducto=prompt("Ingrese el nombre del producto (alcohol-IAC-QUAT");
		}while(nombreProducto!="alcohol" && nombreProducto!="IAC" && nombreProducto!="QUAT")

		do{
			precio=parseFloat(prompt("Ingrese el precio del producto (100-300)"));
			
		}while(isNaN(precio) || precio>300 || precio<100)

		do{
			cantidadProducto=parseInt(prompt("Ingrese la cantidad de productos (0-1000)"));
		}while(isNaN(cantidadProducto) || cantidadProducto>1000 || cantidadProducto<0)

		do{
			tipoProducto=prompt("Ingrese el tipo de producto (ignifugo-combustible-explosivo")
			if(tipoProducto=="ignifugo"){
				acumuladorInifugo=acumuladorInifugo+cantidadProducto;	
				contadorInifugos++;			
			}else if(tipoProducto=="combustible"){
				acumuladorCombustible=acumuladorCombustible+cantidadProducto;	
				contadorCombustible++;		
			}else{			
				acumuladorExplosivo=acumuladorExplosivo+cantidadProducto;		
				contadorExplosivo++;	
			}
			if(nombreProducto=="IAC" && precio<=200){
				acumuIACbarato=acumuIACbarato+cantidadProducto;

			}
		}while(tipoProducto!="ignifugo" && tipoProducto!="combustible" && tipoProducto!="explosivo")
		acumuladorTipos=acumuladorTipos+cantidadProducto;
		contadorTipos++;
		marca=prompt("Ingrese la marca del producto");

		promedioCombustible=acumuladorCombustible/contadorTipos;
		promedioExplosivo=acumuladorExplosivo/contadorTipos;
		promedioInifugo=acumuladorInifugo/contadorTipos;

		if(flag==0){
			marcaMaxCaro=marca;
			tipoMaxCaro=tipoProducto;
			precioMaxCaro=precio;
			flag=1;
		}else if(flag==1 && precio>precioMaxCaro){
			precioMaxCaro=precio;
			tipoMaxCaro=tipoProducto;
			precioMaxCaro=precio;
			marcaMaxCaro=marca;

		}

	}

	if(contadorCombustible>=1){
		console.log("El promedio de los combustibles es " + promedioCombustible);
	}
	if(contadorExplosivo>=1){
		console.log("El promedio de los explosivos es " + promedioExplosivo);
	}
	if(contadorInifugos>=1){
		console.log("El promedio de los ignifugos es " + promedioInifugo);
	}

	if(acumuladorCombustible>=acumuladorExplosivo && acumuladorCombustible>=acumuladorInifugo){
		console.log("El tipo inflamable con mas cantidad de unidades en el total de la compra es combustible" );
	}else if(acumuladorExplosivo>=acumuladorCombustible && acumuladorExplosivo>=acumuladorInifugo){
		console.log("El tipo inflamable con mas cantidad de unidades en el total de la compra es explosivo" );
	}else if(acumuladorInifugo>=acumuladorCombustible && acumuladorInifugo>=acumuladorExplosivo){
		console.log("El tipo inflamable con mas cantidad de unidades en el total de la compra es inifugo" );
	}
	if(acumuIACbarato>=1){
		console.log("La cantidad de unidades de IAC menores a 200$ es " +acumuIACbarato );
	}
	console.log("La marca del producto mas caro es" + marcaMaxCaro + " Y es de tipo " + tipoProducto);
}		
