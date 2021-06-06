/**VARIABLES GENERALES */
let acumuladorObjetoGrafico = [];
let acumuladorObjetoCategoria = [];

let acumuladorStorageCategoria = localStorage.listaCategorias
// console.log(acumuladorStorageCategoria)
let acumuladorStorageGrafico = localStorage.listaGraficas
console.log(acumuladorStorageGrafico)

function localStorage(){
  AcumuladorObjetoGrafico = [...JSON.parse(acumuladorStorageGrafico)],
  AcumuladorObjetoCategoria = [...JSON.parse(acumuladorStorageCategoria)]
  }

/**OBJETO CATEGORIAS */
class Categorias {
  constructor(categoria) {
    this.categoria = categoria;
  }
}
/**OBJETO GRAFICO*/
class GraficaMiga {
  constructor(codigo, descripcion, material, medidaAncho, medidaAlto, imagen) {
    this.codigo = codigo;
    this.descripcion = descripcion;
    this.material = material;
    this.medidaAncho = medidaAncho;
    this.medidaAlto = medidaAlto;
    this.imagen = imagen
  }
}

function traerDatosJson(){
  fetch(`/secciones/datos.json`)
  .then(res => res.json())
  .then(res => {
    res.forEach(element => {
      let nuevaGrafica = new GraficaMiga(
        element.codigo,
        element.descripcion,
        element.material,
        element.medidaAncho,
        element.medidaAlto,
        element.imagen,   
        )
        acumuladorObjetoGrafico.push(nuevaGrafica)
    })
    console.log(acumuladorObjetoGrafico)
    mostrarDatosCategorias()
    cardsGraficasCategoria()
})
}

/**APLICACION DE FETCH AL JSON*/
let baseDeDatos = fetch(`../secciones/datos.json`)
.then(res => res.json())
.then(res => {
  mostrarDatosGraficos(res)
  mostrarDatosCategorias(res)
})
.catch(error => console.log(error));

function mostrarDatosGraficos(resultadoDelJson){
  console.log(resultadoDelJson.graficaMiga)
  resultadoDelJson.graficaMiga.forEach(element => {
    let nuevaGrafica = new GraficaMiga(
      element.codigo,
      element.descripcion,
      element.material,
      element.medidaAncho,
      element.medidaAlto,
      element.imagen,   
      )
      acumuladorObjetoGrafico.push(nuevaGrafica)
    })
    cardsGraficasObjeto()
  }

function mostrarDatosCategorias(resultadoDelJson){
  console.log(resultadoDelJson.categoria)
  resultadoDelJson.categoria.forEach(element => {
    let nuevaCategoria = new Categorias(
      element.accesoSala,
      element.automovil,
      element.aseo,
      element.bañoYCocina,
      element.cajas, 
      element.carpa,
      element.casaInteligente,
      element.centroDeProyectos,
      element.decoracion
      )
      acumuladorObjetoCategoria.push(nuevaCategoria);
      console.log(acumuladorObjetoCategoria)
      cardsGraficasCategoria(acumuladorObjetoCategoria);
    });
  }
      
    function cardsGraficasCategoria(array){
      let acumuladorCategoria = ` `;
      array.forEach(element => {
        acumuladorCategoria += `<div class="homecenter">
        <p class="textoHomecenter"> Categorías aréa HC </p>
        <select class="custom-select">
        <option id="accesoSala" selected>Acceso Sala</option>
        <option id="acceso1" onclick="cardsGraficasMiga()" value="1">${element.categoria}</option>
        <option id="acceso3" onclick="cardsGraficasMiga()" value="2">${element.categoria}</option>
        <option id="acceso4" onclick="cardsGraficasMiga()" value="3">${element.categoria}</option>
        <option id="acceso2" onclick="cardsGraficasMiga()" value="4">${element.categoria}</option>
        </select>
        </div>`
      })
      // localStorage.setItem("listaCategorias", JSON.stringify(acumuladorObjetoCategoria));
      // localStorage()
      $(`#accesoSala`).html(acumuladorCategoria);
    }
    
    function cardsGraficasObjeto(array){
      let acumuladorGrafica = ` `;
      array.forEach(element => {
        acumuladorGrafica += `<form id="tomarDatos">
        <div class="form-group">
        <label for="formGroupExampleInput">Código M.I.G.A</label>
        <input type="text" class="form-control" id="formGroupExampleInput1" placeholder=${element.codigo}>
        </div>
        <div class="form-group">
        <label for="formGroupExampleInput2">Material</label>
        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder=${element.material}>
        </div>
        <div class="form-group">
        <label for="formGroupExampleInput2">Medida</label>
        <input type="text" class="form-control"  id="formGroupExampleInput3" placeholder="${element.medidaAncho} + ${element.medidaAlto}">
        </div>
        <button type="button" class="btn btn-success" id="graficas">Agregar a la lista
        <i class="fas fa-file"></i>
        </button>
        <div id="agregarBoton" class="pt-10px">
        </div>
        
        </form>`
      })
      // localStorage.setItem("listaGraficas", JSON.stringify(acumuladorObjetoGrafico))
      $(`#tomarDatos`).html(acumuladorGrafica);
    }

/**TRAER CONTENIDO A TABLA*/
function traerDatosTabla(){
  acumuladorObjetoGrafico.forEach(element => {
    devolver += `<tr>
    <th scope="row">${element.codigo}</th>
    <td>${element.descripcion}</td>
    <td class="custom-control custom-switch">
      <input type="checkbox" class="custom-control-input" id="customSwitch1">
      <label class="custom-control-label" for="customSwitch1">Si/No</label>
    </td>
    <td>
      <select name="Cantidad">
        <option value="Numero"> 1 </option>
        <option value="Numero"> 2 </option>
        <option value="Numero"> 3 </option>
      </select>>
    </td>
    <td class="form-check-inline">
      <label class="form-check-label">
        <input type="checkbox" class="form-check-input" value="">
      </label>
    </td>
  </tr>`
  })
  document.getElementById(`tabla`).innerHTML = devolver
}


//APLICANDO JQUERY Y CALLBACK + ANIMACION
function detectarBotonAgregar(){
  $("#botonAgregarALaLista").click(function() {
    $("#botonAgregarALaLista").animate({
      width: "90%",
      opacity: 0.9,
      fontSize: "1em",
      borderWidth: "5px"
    }, 1500 );
    $(`#agregarBoton`).html(`<div class= "btn btn-info">Agregado OK</div>`);
    $(`#agregarBoton`).on(`click`, function(){
      $(`#imagenGrafica`).slideToggle(6000);
      $(`#agregarBoton`).fadeOut(3500)
  });
})
}

$('img').click( function(e) {
  e.preventDefault(); //Sirve para frenar la propagación del click en un (recargar pagina)
  $('html, body').animate({
      scrollTop: $("#graficas").offset().top  
  }, 2000);
  alert(`Aún no haz terminado de agregar gráficas`)
} );


// DOM Y EVENTOS

function detectarValueCode() {
  let dato = document.getElementById("formGroupExampleInput1")
  console.log(dato.value)
}

function detectarValueMaterial() {
  let dato = document.getElementById("formGroupExampleInput2")
  console.log(dato.value)
}

function detectarValueMedida() {
  let dato = document.getElementById("formGroupExampleInput3")
  console.log(dato.value)
}

function botonMercadoPago(){
  let botonCompra = $(`#botonMercadoPago`).on(`click`)
  botonMP()
  console.log(botonCompra)
}

// API MERCADO PAGO
let json = {
  items : [
  {
    title : "GraficaMiga",
    description: "Grafica Acceso",
    picture_url: "http://www.myapp.com/myimage.jpg",
    category_id: "categoría Homecenter",
    quantity: 1,
    currency_id: "CLP",
    unit_price: 30
  },
  ],
};

async function botonMP() {
  let data = await fetch ('https://api.mercadopago.com/checkout/preferences',{
    method: 'POST',
    headers: {
      "Authorization": "Bearer TEST-8829919419990586-060600-f777b8ed75cfa6c50f745460435771cc-53559063"  
    },
    body: JSON.stringify(json),
  }); 
  let responseMP = await data.json()
  window.open(responseMP.init_point)
  location.href = responseMP.init_point
  console.log(responseMP.init_point)
}