// Cas d'utilisation d'une fonction

// Fonction sans return
function salut(nom = 'Fabi') {
    return "Je m'appelle " + nom
}
console.log(salut());


// Fonction avec return 
function sum(c, d) {
    return c + d
}
console.log(sum(3, 7));
// Les Types de Fonctions
// Fonction anonyme
const soustraction = function (a, b) {
    return a - b
}
console.log(soustraction(15, 4));
// Fonction fléchée 
const addition = (a, b) => {
    return a + b
}
console.log(addition(12, 12));
// Fonction Callback
function operation(a, b, callback) {
    return callback(a, b);
}

function division(x, y) {
    return x / y;
}
console.log(operation(12, 4, division));
// 
// (function () {
//     console.log("Je suis exécutée immédiatement !");
// })();
(function () {
    console.log('YESSS');

})()

