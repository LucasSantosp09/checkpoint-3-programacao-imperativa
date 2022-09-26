var aluno = function Aluno(nome, quantidadeFaltas, notas) {
    this.nome = nome;
    this.quantidadeFaltas = quantidadeFaltas;
    this.notas = notas;
    this.calcularMedia = function () {
        let notasAluno = 0
        let mediaNota = 0
        for (i = 0; i < this.notas.length; i++) {
            notasAluno += this.notas[i]
        };
        mediaNota = notasAluno / this.notas.length;
        return mediaNota
    };
    this.faltas = function () {
        this.quantidadeFaltas++
    };
}

module.exports = aluno;