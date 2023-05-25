const validator = {
// ...validacion de tarjeta //length = TAMAÑO
  Isvalid: (cardNumber) => {
    const IsEmpetyNumber = cardNumber.length === 0
    if (IsEmpetyNumber) {
      return false
    }
 
    //TRANSFORMAR EL NUEMERO DE TARJETA EN ARRAY [1,2,3,4,5,6,7,8,9,9,9,9,9,9,9,9]
    const GetOriginalNumberArray = Array.from(cardNumber);

    //INVERTIR LOS NUMEROS CON UNA CONSTANTE
    const reverseNumber = GetOriginalNumberArray.reverse();

    //CREAMOS CONSTANTE PARA AGREGAR UN ELEMENTO
    const doubleNumber = []

    //METODO forEach para obtener element 
    reverseNumber.forEach((element,index) => {

      //CONDICION PARA SABER SI LA POSICION ES IMPAR
      if (index %2 !== 0 ) {

        //CONSTANTE PARA MULTIPLICAR EL ELEMENT POR 2 SEGUN SU POSICION IMPAR
        const elementImpar = element * 2;

        //RETORNAR CON EL METODO PUSH PARA AGREGAR ELEMENTO AL ARRAY CREANDO doubleNumber
        //METODO toString convierte un numero a un String
        return doubleNumber.push(elementImpar.toString())
      }

      //AGREGAR ELEMENTOS A ARRAY QUE NO SON IMPAR
      doubleNumber.push (element);
    });

    //CREAR UN ARRAY PARA SABER LA SUMA TOTAL
    const arrayTotalAmount = [];

    //RECORREMOS EL ARRAY PARA DOBLAR NUMERO
    doubleNumber.forEach ((num) => {

      //SE CREA VARIABLE PARA SUMAR DIGITO 
      let addDigits = 0;

      //CONDICIONAL SI EL NUMERO ES MAYOR A 9
      //SI EL NUMERO ES 10 ENNTRA EN LA CONDICIONAL
      if (num > 9) {
      //CONSTANTE PARA SUMA DE LOS NUMERO Y CONVERTIMOS EL NUMERO EN UN ARRAY
        const NewAadNumber =  Array.from (num); //ARRAY.FROM = METODO

        //SE RECORRE ESTE ARRAY PARA SUMARLO ENTRE SI
        NewAadNumber.forEach ((digit) => {
          addDigits += Number(digit);
        });
      
        //ARRAY CON EL METODO PUSH
        return arrayTotalAmount.push(addDigits); 
      }

      //SI EL NUMERO ES MAYOR A 9 AGREGAMOS ARRAY PARA SUMAR EL TOTAL
      arrayTotalAmount.push(Number(num));
    });

    //VARIABLE PARA SUMAR 
    let totalAmount = 0;

    //RECORREMOS EL ARRAY CON EL RESULTADO DE TODO EL PROCESO PARA SUMAR
    arrayTotalAmount.forEach((element) => {

      //SUMAMOS LOS ELEMENTOS PARA TENER EL VALOR TOTAL DE LAS TARJETAS
      totalAmount += element;
    });

    //CONDICIONAL PARA SABER SI LA SUMA ES DIVISIBLE A 10 Y SABER SI ES VALIDA 
    if (totalAmount % 10 === 0) return true;

    //SI NO ES DIVISIBLE ES FALSO
    else return false;
  },

  maskify: (cardNumber) => {
    //VARIABLE QUE TRANSFORMA EL NUMERO DE TARJETA EN UN ARRAY
    const cardNumberArray = Array.from(cardNumber);

    //VARIABLE LET  PARA AGREGAR LOS CARACTERES #
    let markedNumber = '';

    //CICLO FOR PARA RECORRER DESDE 0 HASTA LA CANTIDAD DE NUMERO DE TARJETA -4
    for (let i=0; i < cardNumberArray.length -4; i++) {
        
      //SE AGREGAN ### HASTA QUE TERMINE EL CICLO FOR 
        
      markedNumber += "#"
    }

    //METODO PARA SUBSTR ES PARA TOMAT ALGUN DETALLE DEL STRING POR EJEMPLO LOS ULTIMOS 4 
    const lastFourNumber = cardNumber.substr (cardNumberArray.length - 4)

    //AL NUMERO MARCADO LE AGREGAMOS LOS ULTIMOS 4 NUMEROS DE LA TARJETA  //+= (CONCATENAR)
    markedNumber += lastFourNumber

    //RETORNA EL NUMERO DE TARJETA EMASCARADO #### #### 7899
    return markedNumber

  },

};

export default validator;
