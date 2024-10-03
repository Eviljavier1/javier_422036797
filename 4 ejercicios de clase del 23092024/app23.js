let frutas = ["Platano"];
frutas.push("Manzana");
console.log(frutas); // ["Platano", "Manzana"]
frutas.unshift("Sandia");
console.log(frutas); // ["Sandia", "Platano", "Manzana"]
frutas.unshift("Aguacate");
console.log(frutas); // ["Aguacate", "Sandia", "Platano", "Manzana"]

function xvertical() {
    for (let i = 0; i < 4; i++) { 
        console.log("X");
    }
}

function xhorizontal() {
    let line = "";
    for (let i = 0; i < 4; i++) { 
        line += "X";
    }
    console.log(line);
}

function prom() {
    let x1 = prompt("Ingrese números separados por comas");
    for (let i = 0; i < x1.length; i++) {
        console.log("x");
    }
}

function multiplicacion() {
    for (let i = 1; i <= 10; i++) {
        let line = "";
        for (let j = 1; j <= 10; j++) {
            line += (i * j) ;
        }
        console.log(line);
    }
}

function indfrutas() {
    let fru = ["Liche", "Piña", "Manzana", "Platano", "Melon", "Limon", "Coco", "Mango", "Jobo", "Naranja"];
    fru.forEach((fruit) => {
        console.log(fruit.length);
    });
}
