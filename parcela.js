export class Parcela{
    #numero;
    #valor;
    #juros;
    #amortizacao;
    #saldo;
    constructor(numero, valor, juros, amortizacao, saldo){
        this.#numero = numero;
        this.#valor = valor;
        this.#juros = juros;
        this.#amortizacao = amortizacao;
        this.#saldo = saldo;
    }

    getSaldo(){
        return this.#saldo;
    }
    getDadosFormatados(){
        const dados = [];
        dados.push(this.#numero);
        dados.push(this.#valor.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})); // formatar o valor para moeda em R$
        dados.push(this.#juros.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})); // formatar o valor para moeda em R$
        dados.push(this.#amortizacao.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})); // formatar o valor para moeda em R$
        dados.push(this.#saldo.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})); // formatar o valor para moeda em R$
        return dados;
    }
}