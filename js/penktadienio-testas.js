console.log('--------------1--------------');

function palyginti(a, b) {
    if (a > b) {
        return `Pirmas skaicius didesnis uz antra`;
    } else if (b > a) {
        return `Antras skaicius didesnis uz pirma;`
    } else {
        return `Skaiciai yra lygus`
    }
}
console.log(palyginti(5, 5));

console.log('--------------2--------------');

for (i = 1; i <= 10; i++) {
    console.log(i);
}

console.log('--------------3--------------');

for (i = 0; i <= 5; i++) {
    console.log(i * 2);
}

console.log('--------------4--------------');

for (i = 0; i < 5; i++) {
    skaicius = Math.floor(Math.random() * 10) + 1;
    console.log(skaicius);
}

console.log('--------------5--------------');

let n = 0;

while (n !== 5 ) {
    n = Math.floor(Math.random() * 10) + 1;
    console.log(n);
}

console.log('--------------6--------------');
// nespejau paziuret kaip tokius spresti
console.log('--------------7--------------');
// nespejau paziuret kaip tokius spresti
console.log('--------------8--------------');

function lygineSuma(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }   if ((a + b) % 2 !== 0 ) {                 
            return console.log("Suma nelygine");        // nesupratau kaip inestinti
        }
    

    if (typeof a === "object" && typeof b === "object") {
        return a.length + b.length;
        
    }
}
console.log(lygineSuma(3, 4));


console.log('--------------9--------------');

// function pirminis(a) {
//     if ((a === "number") && (a % a === 0) && (a % 1 === 0)) {
//         return "Skaicius yra pirminis";
//     } else {
//         return "Skaicius nepirminis";
//     }
// }


// console.log(pirminis(7));

console.log('--------------10--------------');

function telefonoNumeris(num) {
    if (num.length !== 10) {
        return `Numeris turi tureti 10 skaitmenu`
    } else {
        return `Telefono numeris: (${num.slice(0, 3).join('')}) ${num.slice(3, 6).join('')}-${num.slice(6).join('')}`;
    }
    
}

console.log(telefonoNumeris([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));