/* eslint-disable no-undef */
/* eslint-disable no-global-assign */
import validator from './validator.js';

const card = document.querySelector('#card'),
  btnOpenForm = document.querySelector ('#btn-open-form'),
  form = document.querySelector('#card-form'),  
  cardNumber = document.querySelector ('#card .number'),
  cardName = document.querySelector ('#card .name'),
  brandLogo = document.querySelector ('#logo-brand'),
  Signature = document.querySelector ('#card .Signature p'),
  monthExpiration = document.querySelector ('#card .month'),
  yearExpiration = document. querySelector ('#card .year'),
  cvv = document.querySelector ('#card .cvv'),
  btnSend = document.querySelector ('#btn-send');
  


//VOLTEAR LA TARJETA PARA VER EL FRENTE
const showFront = () => {
  if(card.classList.contains ('active')){
    card.classList.remove ('active');
  }
}


//*GIRO DE TARJETA
card.addEventListener('click', () => {
  card.classList.toggle('active');
});

//*BOTON DE ABRIR
btnOpenForm.addEventListener('keyup', () => {
  btnOpenForm.classList.toggle ('active');
  form.classList.toggle('active');
});


//*RELLENAR SELECT MONTH
for(let i = 1; i <= 12;i++){
  const  option = document.createElement ('option');
  option.value =i;
  option.innerText = i;
  form.selectMonth.appendChild(option);

}

//RELLENAR SELECT YEAR
const yearActual = new Date().getFullYear();
for (let i= yearActual; i <= yearActual + 8; i++){
  const option = document.createElement ('option');
  option.value = i;
  option.innerText = i;
  form.selectYear.appendChild(option);
}
//for (let i= 2023; i <= 2023 + 8; i++){
// console.log (i)
//}

//INPUT NUMERO DE TARJETA
form.inputNumber.addEventListener('keyup', (e) => {
  const valueInput = e.target.value;

  form.inputNumber.value = valueInput
    //PARA ELIMINAR ESPACIOS EN BLANCO
    .replace(/\s/g,'')
    //ELIMINAR LAS LETRAS 
    .replace(/\D/g,'')
    //PONER ESPACIOS CADA 4 NUMEROS
    .replace(/([0-9]{4})/g,'$1 ')
    //ElIMINAR EL ULTIMO ESPACIADO
    .trim();

  //* MASKITY
  cardNumber.innerText = validator.maskify (valueInput);
  
  //form.cardNumber = validator.maskify (valueInput);

  //* ISVALID 
  //cardNumber.innerText = validator.Isvalid (valueInput);


  //cardNumber.textContent = valueInput;

  if(valueInput === ''){
    cardNumber.textContent = '################';

    brandLogo.innerHTML = '';

  }

  if(valueInput [0]=== 4){
    brandLogo.innerHTML = '';
    const img = document.createElement('img');
    img.src= '/img/visa.png';
    brandLogo.appendChild(img);
  }
  else if (valueInput [0]=== 5){
    brandLogo.innerHTML = '';
    const img = document.createElement('img');
    img.src= '/img/mastercard.png';
    brandLogo.appendChild (img);
  }

  //VOLTEAR TARJETA PARA QUE SE VEA EL FRENTE.
  showFront();
});

//iNPUT NOMBRE DE TARJETA 
form.inputName.addEventListener('keyup', (e) => {
  const  valueInput = e.target.value;

  form.inputName.value = valueInput.replace(/[0-9]/g, '');
  cardName.textContent = valueInput;
  Signature.textContent = valueInput;
    
  if(valueInput === ''){
    cardName.textContent = 'Diana Contreras';

  }
  showFront();

});

// * SELECT MONTH
form.selectMonth.addEventListener('change', (e) => {
  monthExpiration.textContent = e.target.value;
  showFront();
});

//* SELECT YEAR
form.selectYear.addEventListener ('change', (e) => {
  yearExpiration.textContent = e.target.value.slice (2);
  showFront();
});

//* CVV
form.inputCVV.addEventListener ('keyup', () => {
  if (!card.classList.contains ('active')){
    card.classList.toggle ('active');
  }

  form.inputCVV.value = form.inputCVV.value
    //ELIMINAR ESPACIOS 
    .replace(/\s/g, '')
  //ELIMINAR LAS LETRAS 
    .replace(/\D/g, '');

  cvv.textContent = form.inputCVV.value;
});


//* ALERTA 

btnSend.addEventListener ('click', (e) => {
  const  valueInput = document.querySelector ('#inputNumber').value;
  e.preventDefault ();
  alert(validator.Isvalid(valueInput))
});


//const cardNumber = document.getElementById("inputNumber").value;
  

/*if (Isvalid(cardNumber) === true ) {
  confirm("TARJETA VALIDA");
} 
else {
  confirm("TARJETA INVALIDA" );
}*/




//alert(validator.Isvalid(valueInput));
//console.log(validator);
