alert("Bienvenidos a AcaCcomeRico");

const categorias = ["ALMUERZO Y CENA", "DESAYUNO Y MERIENDA", "POSTRES", "BEBIDAS"];
console.log("Tenemos " + categorias.length + " Categorias en el menú");


class Lista {
    constructor(id, nombre, precio, categoria) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.categoria = categoria;
    }
}

let contador = 0;
let listaProductosMenu = "Estos son nuestros productos";

const listaProductos = [];

listaProductos.push(new Lista(1, "Milanesas con pure", "550", categorias[0]));
listaProductos.push(new Lista(2, "Milanesas con ensalada", 550, categorias[0]));
listaProductos.push(new Lista(3, "Milanesas con Papas Fritas", 550, categorias[0]));
listaProductos.push(new Lista(4, "Asado con pure", 550, categorias[0]));
listaProductos.push(new Lista(5, "Asado con ensalada", 550, categorias[0]));
listaProductos.push(new Lista(5, "Sopa de verduras", 550, categorias[0]));
listaProductos.push(new Lista(6, "Pastafrola", 150, categorias[1]));
listaProductos.push(new Lista(7, "Cafe con Leche", 220, categorias[1]));
listaProductos.push(new Lista(8, "Flan", 170, categorias[2]));
listaProductos.push(new Lista(9, "Fernet con coca", 450, categorias[3]));
listaProductos.push(new Lista(10, "Cerveza pinta", 220, categorias[3]));
listaProductos.push(new Lista(11, "Cerveza Botella", 340, categorias[3]));
listaProductos.push(new Lista(12, "Coca", 170, categorias[3]));
listaProductos.push(new Lista(13, "Sprite", 170, categorias[3]));

console.log(listaProductos);

for (const producto of listaProductos) {
    contador++;
    listaProductosMenu += "\n" + contador + "- " + producto.nombre + " $" + producto.precio + " " + producto.categoria;

}

function menu() {

    let opcion = prompt("Menu: \n1 - Ver productos\nESC - Para Salir");

    switch (opcion) {

        case "1":

            listarProductos();



            break;

        case "ESC":

            saludar("Gracias por visitar");

            break;

        default:

            alert("Opcion Incorrecta");

            menu();

            break;

    }

}

function saludar(saludo) {

    alert(saludo + " nuestra pagina!");

}

function listarProductos() {
    alert(listaProductosMenu);

}


menu();