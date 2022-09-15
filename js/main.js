class Producto{
    constructor(id,nombre,precio,categoria){
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
        this.categoria=categoria;
    }
}
let productos= [
    new Producto(10,"Naruto",2000,"mangas"),
    new Producto(11,"Sailor Moon",2000,"mangas"),
    new Producto(12,"Comix Zone",3500,"mangas"),
];

let cantidad=0;
let seguirComprando =true;
let carrito=[];


let nombre = prompt("Por favor, ingrese su nombre :)")


do{
    let opcion =Number(prompt( `Bienvenido : ${nombre}  \n¿Qué mangas desea comprar \n 1- Naruto \n 2- Sailor Moon \n 3- Comix Zone`))
   
        
    switch(opcion){

         case 1:
        
            alert("Seleccionaste: Naruto")
            carrito.push(productos[0]);
            break;

         case 2:
            alert("Seleccionaste: Sailor Moon")
             carrito.push(productos[1]);
            break;

         case 3:
             alert("Seleccionaste: Comix Zone");
            carrito.push(productos[2])
             break;

        default:
            alert("No seleccionó ningún producto, intente nuevamente")
            break;
    }


seguirComprando = confirm("¿Desea agregar más productos al carrito?")


}while(seguirComprando);

let detalleDeCarrito = carrito.map((el) => ` ${el.id}  ${el.nombre}  = $ ${el.precio}`);

const filtrar = (deleteId) => {
    const result = carrito.filter((el) => el.id != deleteId);
    return result;
    
}

let total = carrito.reduce((acc, el) => acc + el.precio  ,0);

let eliminar = prompt(`${detalleDeCarrito.join("\n")} \n ¿Desea eliminar algún producto? Sí o No`);
while(eliminar != "Sí" && eliminar != "No"){
    
    alert("Por favor elija Sí o No")
    eliminar = prompt("¿Desea eliminar algun producto? Si o No")

}
    
        if(eliminar === "Sí"){
            let productoEliminado = parseInt(prompt(`${detalleDeCarrito.join("\n")} \n Seleccione el id el producto que desea eliminar.`));
           console.log( filtrar(productoEliminado))
             carrito = filtrar(productoEliminado);
             total = carrito.reduce((acc,el)=> acc +el.precio,0 )
             alert(`El total es de  $ ${total} \n Muchas gracias por su compra `)
             
             
            }else if(eliminar === "No"){
                
                
                alert(`Muchas gracias por su compra, el total es de : $ ${total}`)}
