let Estudantes = require('./estudantes');

let curso = {
    nomeDoCurso : 'JavaScript',
    notaDeAprovacao: 60,
    faltaMaximas: 3,
    listaDeEstudantes: Estudantes,

    adicionarAluno: function(aluno){
        this.listaDeEstudantes.push(aluno)
    }

}

module.exports = curso;