// prompt para preguntar al usuario el numero de la tarjeta
var numCard = prompt('Ingresa el numero de tarjeta. Asegurate de escribir solamente numeros');


// ---- Funcion para validar que el usuario no ingrese un campo vacio o cancele el prompt --- //
function validateNumCard(numCard) {

	while(numCard == '' || numCard == null){
		numCard = prompt('Por favor ingresa un numero de tarjeta');
	} // termina while

	return numCard;
} // termina funcion validateNumCard(numCard);


// ---- Funcion para validar tarjeta ---- //
function isValidCard(num){

	var array = [];
	var reverseArray = [];
	var posPair = [];
	var sumPair = 0;
	var newMultArray = [];
  
	// for para poner valores al reves
	for (var i = 0; i < num.length; i++) {
    	var item = array.push(num[i]);
    	for(var j = 0; j < array.length; j++){
     		var newArray = array.pop();
    		reverseArray.splice(j, 0, newArray);
    	}
 	} // termina for

	console.log(reverseArray);

	// for para sacar posciones pares
	for(var j = 0; j < reverseArray.length; j++){
 		var isOdd = j % 2;
 		//console.log("Es impar: " + isOdd);

 		if(isOdd === 1){
 			var itemPair = posPair.push(reverseArray[j]);
 		}
 	} // Termina for para evaular posiciones pares

 	for(var k = 0; k < posPair.length; k++){
 		var mult = posPair[k] * 2;
 		newMultArray.push(mult);
 	} // termina for

 	console.log(posPair);
 	console.log(newMultArray);
  
	document.getElementById("reverseArray").innerHTML = "Este es el array " + num +" al reves: " + reverseArray;
} // Termina funcion isValidCard();

validateNumCard(numCard);
isValidCard(validateNumCard(numCard));
