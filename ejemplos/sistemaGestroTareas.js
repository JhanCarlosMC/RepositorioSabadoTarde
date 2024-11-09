
function main() {
    let listTareas = [];
    let option;

    do {
        option = parseInt(prompt("Bienvenido al Sistema Gestor de Tareas." +
            "\nSeleccione la opcion que quiera realizar:" +
            "\n\n1.Crear una nueva tarea." +
            "\n\n0.Salir."
        ));

        switch (option) {
            case 1:
                listTareas.push(crearTarea());
                break;

            case 2:

                break;

            case 3:

                break;

            case 4:

                break;

            case 0:
                alert('Gracias por utilizar nuestra aplicacion.')
                break;
            default:
                break;
        }
    } while (option != 0);


    console.log(listTareas);
}

function crearTarea() {
    let newDescripcion = prompt("Ingrese la descipcion para su nueva tarea:");
    let newFecha = prompt("Ingrese la fecha actual:");
    let newAutor = prompt("Ingrese autor de la tarea:");

    const newTarea = {
        descripcion: newDescripcion,
        fecha: newFecha,
        autor: newAutor
    }

    return newTarea;
}


main();