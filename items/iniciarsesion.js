//CODIGO HTML DE REFERENCIA
/* <div id="contenedor"></div>  */

//CODIGO JS
let container = document.getElementById("contenedor")
// cambio el código HTML internoS
container.innerHTML = "<h3> Crear Cuenta</h3>";
console.log(container.innerHTML);
// cambio el atributo class
container.className = "paginaprincipal contenedorhijo"


class Cliente {
    constructor(nombre, correo, apellido) {
        this.nombre = nombre
        this.apellido = apellido;
        this.correo = correo;
    
    }

    bienvenida (){
        console.log("Bienvenido", this.nombre);
    }

}

const arrayClientes = [];

arrayClientes.forEach (cliente => console.log("Hola", cliente ));

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombreUsuario = document.getElementById("nombreUsuario");
    const apellido = document.getElementById("apellido");
    const nombreCorreo = document.getElementById("correo");

    const cliente = new Cliente(nombreUsuario.value, nombreCorreo.value, apellido.value);
    arrayClientes.push(cliente);
    localStorage.setItem("arrayClientes", JSON.stringify(cliente));


    console.log(arrayClientes);

    formulario.reset ();

    

});
    


 
