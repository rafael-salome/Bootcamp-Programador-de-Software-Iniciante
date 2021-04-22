var fs = require("fs")
var arquivoFuncionarios = "funcionarios.json"
var arraySalario = []
var arraySetor = []
var arraySalarioSetor = []
var entradaSetor =  process.argv[2]

fs.readFile(arquivoFuncionarios, "utf-8", function(err, data){
    if(err) {
        console.log(err)
    }else {
        var obj = JSON.parse(data)
        var tamanhoArray = obj.funcionarios.length
        
        for(i = 0; i < tamanhoArray; i++){
            var salario = obj.funcionarios[i]['salario']
            var setor = obj.funcionarios[i]['setor']
            var salarioSetor = obj.funcionarios[i]['salario']
                       
            if(setor === entradaSetor){
                arraySetor.push(obj.funcionarios[i])
            } else{
                continue
            } 
            arraySalario.push(salario)
            arraySalarioSetor.push(salarioSetor)       
        }
       
        var max = arraySalario.reduce(function(a,b){
            return Math.max(a,b)
        })
        var indiceArraySalarioMax = arraySalario.findIndex((indice) => indice == max)

        var min = arraySalario.reduce(function(a,b){
            return Math.min(a,b)
        })
        var indiceArraySalarioMin = arraySalario.findIndex((indice) => indice == min)

        var soma = arraySalario.reduce(function(a,b){
            return a + b
        })
        var media = soma/tamanhoArray   
        
        var maxSetor = arraySalarioSetor.reduce(function(a,b){
            return Math.max(a,b)
        })
        var indiceArraySalarioSetorMax = arraySalarioSetor.findIndex((indice) => indice == maxSetor)

        var minSetor = arraySalarioSetor.reduce(function(a,b){
            return Math.min(a,b)
        })
        var indiceArraySalarioSetorMin = arraySalarioSetor.findIndex((indice) => indice == minSetor)
                    
        console.log("Maior sálario da empresa: ", obj.funcionarios[indiceArraySalarioMax]['nome'], " R$",parseFloat(max.toFixed(2)))     
        console.log("Menor sálario da empresa: ", obj.funcionarios[indiceArraySalarioMin]['nome'], " R$", parseFloat(min.toFixed(2)))
        console.log("Media salarial da empresa: R$",parseFloat(media.toFixed(2)) ) 
        console.log("Maior sálario do setor", entradaSetor,":", arraySetor[indiceArraySalarioSetorMax]['nome'], " R$", parseFloat(maxSetor.toFixed(2)))
        console.log("Menor sálario do setor", entradaSetor,":",arraySetor[indiceArraySalarioSetorMin]['nome'], " R$", parseFloat(minSetor.toFixed(2)))       
        
    }
})


