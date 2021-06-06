// EJERCICIO DE JQUERY
function validarFormulario(e){
    e.preventDefault();
    let nombre = $(`#name`).val();
    let cargo = $(`#cargo`).val();
    let email = $(`#email`).val();
    let tienda = Number($(`#tienda`).val()); 
    console.log(`Hola ${nombre}, tu cargo es ${cargo} ,tu correo ${email} quedará registrado junto a tu tienda número ${tienda}`);
  }
  
  
  /**
 * API WHATSAPP
 */
  function whatsapp(){
    let numero = +56961576139
    let name = $(`#name`).val();
    window.open(`https://api.whatsapp.com/send/?phone=${numero}&text=${name} Tus datos fueron ingresado exitosamente al catálogo MIGA`)
  }

$(`#submit`).html(
    `<button id="submit" type="submit" class="btn btn-primary" onclick="whatsapp()">Confirmación a Whatsapp</button>`
    )
whatsapp()