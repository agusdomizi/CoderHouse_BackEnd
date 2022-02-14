
/* -------------------------------------------------------------------------- */
/*                                  Clase 01                                  */
/* -------------------------------------------------------------------------- */



/* -------------------------------------------------------------------------- */
/*                             Desafios Genericos                             */
/* -------------------------------------------------------------------------- */




/* ---------------------------- Datos y variables --------------------------- */



let nombre = "pepe"
let edad = 25
let precio = 99.90
const seriesFav = ["Dark","Mr.Robot","Castlevania"]
const pelisFav = {
    nombre: "Rapido y Furioso",
    estreno: 2001,
    protagonistas: ["Paul Walker","Vin Diesel"]
}

console.log(nombre,edad,precio,seriesFav,pelisFav);
edad++;
console.log(edad);
seriesFav.push("Ozark")
console.log(seriesFav);



/* -------------------------- Funciones y Closures -------------------------- */

function mostrarLista(con1){
    const lista=[];
    if(con1 != undefined){
        lista.push(con1)
    }
    
    if (lista.length==0){
        console.log("LISTA VACIA");
    }
    else{
        console.log(lista);
    }
}
mostrarLista();

(function(con2){
    const lista=[];
    if(con2 != undefined){
        lista.push(con2)
    }
    
    if (lista.length==0){
        console.log("LISTA VACIA");
    }
    else{
        console.log(lista);
    }
})([1,2,3]);

let producto = 0;

function crearMultiplicador(numero1)
{return function(numero2){
producto = (numero1*numero2);
console.log(producto)
}(3)    //valor segundo numero
}
crearMultiplicador(2)    //valor primer numero

function duplicar(n1){
    duplicado=n1*2
    console.log(duplicado)
}
duplicar(producto)

function triplicar(n1){
    triplicado=n1*3
    console.log(triplicado)
}
triplicar(producto)




/* --------------------------------- Clases --------------------------------- */




class contador{
    constructor(nombre){
        this.nombre=nombre;
        this.cuentaIndividual=0;
    }

    static totalContado =0

    obtenerResponsable(){
        console.log(this.nombre);
    }
    obtenerCuentaIndividual(){
        console.log(this.cuentaIndividual);
    }
    obtenerCuentaGlobal(){
        console.log(contador.totalContado);
    }
    contar(){
        this.cuentaIndividual++;
        contador.totalContado++;
    }
}

const Agustin = new contador("Agustin");

Agustin.contar();
Agustin.obtenerResponsable();
Agustin.obtenerCuentaIndividual();
Agustin.contar();
Agustin.obtenerCuentaGlobal();

const Lucas = new contador("Lucas");
Lucas.contar();
Lucas.contar();
Agustin.obtenerCuentaGlobal();
Lucas.obtenerCuentaGlobal();




/* -------------------------------------------------------------------------- */
/*                                 Entregable                                 */
/* -------------------------------------------------------------------------- */




class Usuario{
    constructor(nombre,apellido,libros,mascotas)
    {
        this.nombre=nombre;
        this.apellido=apellido;
        this.libros=libros;
        this.mascotas=mascotas;
    }
    getFullName(){
        console.log(`El nombre completo del usuario es: ${this.nombre} ${this.apellido}.`)
    }
    addMascota(nombreMascota){
       this.mascotas.push(nombreMascota);
        console.log(`anadimos a ${nombreMascota} a la lista de sus mascotas.`)
    }
    countMascotas(){
        console.log(`Posee ${this.mascotas.length} mascotas.`)
    }
    addBook(nombreBook,autor){
        this.libros.push({nombre:nombreBook,autor:autor});
         console.log(`anadimos ${nombreBook}, del autor ${autor} a su lista de Libros.`)
     }
     getBookNames(){
         console.log(this.libros.map(libros => libros.nombre));
     }
}


const Ezequiel = new Usuario("Ezequiel","Perez",[],[])
Ezequiel.getFullName();
Ezequiel.addMascota("Scooby Doo");
Ezequiel.addMascota("Stuart Little");
Ezequiel.countMascotas();
Ezequiel.addBook("Mi planta de naranja Lima","Vasconcelos");
Ezequiel.addBook("El Alquimista","Paulo Coelho")
Ezequiel.getBookNames();
