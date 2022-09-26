let aluno = require('./modulos/aluno');
let curso = require('./modulos/curso');

let aluno1 = new aluno('Lucas Santos', 4, [80,70,60])


//***********************Desafio 1****************************

//Dados Alunos  

//console.log(aluno1)

//***********************Desafio 2****************************
//Chamando o método de calcular média
//console.log(aluno1.calcularMedia()) 
//Adicionando Faltando para o aluno
//aluno1.faltas()
//aluno1.faltas()
//console.log(aluno1)

//***********************Desafio 3****************************
//console.log(curso)


//***********************Desafio 4****************************
//Testando Adicionar Aluno

//curso.adicionarAluno(aluno1);
//console.log(curso.listaDeEstudantes)

//***********************Desafio 5****************************
//Testando Aprovação do Aluno

/*if (aluno1.calcularMedia() >= curso.notaDeAprovacao && aluno1.faltas < curso.faltaMaximas ){
 console.log("Aprovado")
}
else {
    return console.log("Reprovado")
}*/
//***********************Desafio 6****************************


//***********************Desafio 7****************************
console.log(curso.listaDeEstudantes)



