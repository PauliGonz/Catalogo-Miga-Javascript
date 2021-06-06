function validarFormulario(e){
  // e.preventDefault();
  let datos={
      nombre : $(`#name`).val(),
      cargo : $(`#cargo`).val(),
      email : $(`#email`).val(),
      tienda : Number($(`#tienda`).val())
  }
ponerDatos(datos)
}

function ponerDatos(datos){
  let datosObtenidos=localStorage.datosDelUsuario;
  console.log(datosObtenidos)
  if(datosObtenidos != null)
 {
   personas.push(datosObtenidos);
   console.log(personas)
   personas.push(datos);
   console.log(personas);
   localStorage.setItem("datosDelUsuario",JSON.stringify(personas))
   console.log(localStorage);
 }
 else
{
  personas.push(datos);
  localStorage.setItem("datosDelUsuario",JSON.stringify(personas))
}
  console.log(`Hola ${datos.nombre}, tu cargo es ${datos.cargo} ,tu correo ${datos.email} quedará registrado junto a tu tienda número ${datos.tienda}`);
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