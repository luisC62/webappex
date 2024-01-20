let DATOS=[];
let elID;
const NOMBRE=document.querySelector("#producto");
NOMBRE.addEventListener("keydown", teclado);
document.querySelector(".btInsertar").addEventListener("click", insertar);
document.querySelector(".btEditar").addEventListener("click", editar);
vaciar();
cargarTodos();

function teclado(e){
    let tecla=e.key;
    if(tecla==="Enter"){
        leer();
    }
}

function leer(){
    const ESCRITO=NOMBRE.value.trim();
    if(ESCRITO){
        if(DATOS.length>0 && document.querySelector(".listaInsertar").innerHTML===""){
            DATOS=[];
        }
        DATOS.push({"elNombre": ESCRITO, "estrellas": 1});
        escribir(ESCRITO);
        vaciar();
    }
}

function vaciar(){
    NOMBRE.value="";
    NOMBRE.focus();
}

function escribir(valor){
    document.querySelector(".listaInsertar").insertAdjacentHTML("beforeend", 
    `
        <div class="linea" jab="${DATOS.length-1}">
        <div class="nombre">${valor}</div>
        <div class="estrellas">
            <img src="img/estrella.png" onclick="unaMas(this)">
        </div>
    `); 
}

function unaMas(e){
    let hay=e.parentNode.querySelectorAll("img").length;
    if(hay>=6){
        hay=0;
        e.parentNode.innerHTML=`<img src="img/estrella.png" onclick="unaMas(this)">`;
    }
    let indice=e.parentNode.parentNode.getAttribute("jab");
    DATOS[indice].estrellas=++hay;
    e.parentNode.insertAdjacentHTML("beforeend",`
    <img src="img/estrella.png" onclick="unaMas(this)">
    `);

}

function insertar(){
    const TITULO=document.querySelector("#titulo").value.trim();
    limpiar();
    // Ahora nos comunicamos con PHP
    fetch(
        'php/insertar.php',         // Ruta del archivo inertar.php
        {                           // Datos qeue vamos a insertar
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                aGuardar:DATOS,
                aTitulo:TITULO
            })
        }
    )
    .then(a=>{
        console.log(a.text());
    })
    .then(()=>{
        cargarTodos();
        console.log("cargando datos");
    });
    
}

function cargarTodos(){
    // Antes vaciamos listaCargar
    document.querySelector(".listaCargar").innerHTML="";
    // LLamamos al php correspondiente ()
    fetch("php/cargarTodos.php")
    .then(a=>a.json())
    .then(data=>{
        escribirLista(data);
    })  
      
}
    

function escribirLista(registros){
    // Para recorrer el array de registros utilizaremos map
    registros.map((valor, i)=>{
        document.querySelector(".listaCargar").insertAdjacentHTML("beforeend",
        `
        <div class="bloque" jab="${valor.id}" onclick="ver(this)"> 
            <strong>${JSON.parse(valor.titulo)}</strong>
            <div>(${valor.datos.length} valores)</div>
            <img src="img/papelera.png" onclick="eliminar(this, event)">
        </div>
        `
        )
    });
}

function ver(e){
    console.log("Se ha hecho click en el bloque");
    elID=e.getAttribute("jab");
    fetch("php/cargarUno.php",
    {
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            id:elID
        })
    })
    .then(a=>a.json())
    .then(data=>{
        DATOS=data.losValores;
        escribirTodo(data.elTitulo, data.losValores)
    })
}

function eliminar(e, event){
    console.log("Se ha hecho click en eliminar");
    event.stopPropagation(); // Ya que también se ha hecho click en el bloque
    const id=e.parentNode.getAttribute("jab"); //Este es el id a eliminar de la base de datos
    fetch("php/eliminar.php", 
    {
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            id:id
        }) 
    }
    )
    .then(()=>cargarTodos());
    limpiar();
}

function escribirTodo(titulo, valores){
    document.querySelector(".listaEditar").innerHTML=""; // Vaciamos el <div>
    document.querySelector("#tituloEditar").value=titulo; // Ponemos el titulo
    valores.map((valor, indice)=>{
        //console.log("indice: "+indice);
        //console.log("Nombre: "+valor.elNombre);
        //console.log("Estrellas: "+valor.estrellas);
        document.querySelector(".listaEditar").insertAdjacentHTML("beforeend", `
        <div class="linea" jab="${indice}">
            <div class="nombre">${valor.elNombre}</div>
            <div class="estrellas"></div>
        </div>`);
        for(let k=0; k<valor.estrellas; k++){
            document.querySelectorAll(".estrellas")[indice].insertAdjacentHTML("beforeend", `
            <img src="img/estrella.png" alt="" onclick="unaMas(this)"/>`);
        }


    }); 
}

function editar(){
    const TITULO=document.querySelector("#tituloEditar").value.trim();
    limpiar();
    fetch("php/editar.php",
    {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            aEditar: elID,
            aGuardar: DATOS,
            aTitulo: TITULO
        })
    })
    .then(()=>{
        cargarTodos();
    })
}

function limpiar(){
    document.querySelector(".listaInsertar").innerHTML="";
    document.querySelector(".listaEditar").innerHTML="";
    document.querySelector("#tituloEditar").value="";
    document.querySelector("#productoEditar").value="";
    document.querySelector("#titulo").value="";
    document.querySelector("#producto").value="";
    document.querySelector("#titulo").focus();
}


