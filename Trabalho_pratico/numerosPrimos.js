var numero = parseInt(process.argv[2])
var arrayNumerosPrimos = []
for (var i = 2; i <= numero; i++){
    if (verificaNumeroPrimo(i)) {
        arrayNumerosPrimos.push(i) 
    }
}
console.log(arrayNumerosPrimos)

function verificaNumeroPrimo(numero){
    var numeroPrimo = true
    for (var i = 2; i < numero; i++){
        if (numero % i === 0){
            numeroPrimo = false;
            break
        }
    }
    return numeroPrimo
}
