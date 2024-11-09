function mensajeEmergente(){
    alert("Hola desde una accion");
}


// let user1 = {
//     nombre: 'JhanCarlos',
//     edad: 23,
//     ciudad: 'Armenia',
//     trabaja: true,
//     saludar: function(){
//         console.log("Hola, soy " + this.nombre);
//     }
// }

// for (const key in user1) {
//     console.log(key + " : " + user1[key])
// }

// console.log(Object.keys(user1));
// console.log(Object.values(user1));
// console.log(Object.entr(user1));


// // console.log(user1.nombre);
// // console.log(user1["edad"]);
// // user1.saludar();




// /**
// function mensajeBienvenida(nombre) {
//     //Codigo
//     return ("Hola " + nombre);
// }

// const response = (nombre) => "Hola " + nombre;

// let nombreUsuario = prompt("Ingrese su nombre");
// //let mensaje = mensajeBienvenida(nombreUsuario);
// alert(response(nombreUsuario));
// */
// //alert(mensaje);



// /**
// let arregloNums = [];
// for(let i = 0; i < 5; i++){
//     arregloNums.push(prompt('Ingrese un numero'));
// }

// arregloNums.sort(function(a, b){return a - b});

// console.log(arregloNums.toString());
//  */
// //Crear un algoritmo para llenar un vector con
// //la cantidad de números primos que ingrese el
// //usuario (este número debe ser positivo y mayor que 0).

// /** 
// let numPrimos = [];
// let cantNumPrimos = prompt('Ingrese la cantidad de numeros primos que quiere ver');
// let num = 1;
// let cantiNumPrimosEncontrados = 0;

// while (cantiNumPrimosEncontrados < cantNumPrimos) {
//     let contDivi = 0;
//     for (let i = 2; i < num; i++) {

//         if (num % i == 0) {
//             contDivi++;
//         }
//     }

//     if (contDivi == 0 && num != 1) {
//         numPrimos.push(num);
//         num++;
//         cantiNumPrimosEncontrados++;
//     } else {
//         num++;
//     }
// }
// console.log(numPrimos.toString());
// */





// /** 
// let miArreglo = [];

// let cantNumeros = prompt('Ingrese la cantidad de numeros que quiere almacenar');

// for (let i = 0; i < cantNumeros; i++) {
//     //miArreglo[i] = prompt('Ingrese un numero: ');
//     console.log('Ingreso');
//     miArreglo.push(prompt('Ingrese un numero: '));
// }

// console.log("ForEach");
// miArreglo.forEach((element,index) => {
//     console.log(element + " . "+ index);
// });
// */
// /**
// let cantNumPrimos = prompt('Ingrese un numero, para ver cuales son los numeros primos de 1 hasta ese rango');

// let mensaje = '';
// for (let num = 2; num <= cantNumPrimos; num++) {
//     let contDivi = 0;
//     for (let i = 2; i < num/2; i++) {

//         if (num % i == 0) {
//             contDivi++;
//         }
//     }

//     if (contDivi == 0) {
//         mensaje += num + ' ';
//     }
// }
// //console.log('El listao de numeros primos identificados es: ['+ mensaje+']');
// console.log(`El listao de numeros primos identificados es: [${mensaje}]`);
//  */