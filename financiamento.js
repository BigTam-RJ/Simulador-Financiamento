import {Parcela} from './parcela.js'

class Financiamento{
    #taxaJuros; // juros mensais
    #prazo; // em meses
    #parcelas = [];
    constructor(valor,entrada,taxaJuros,prazo){
        this.#taxaJuros = taxaJuros;
        this.#prazo = prazo;
        /* Composição - a classe financiamento "possui" parcelas */
        this.#parcelas.push(new Parcela(0,0,0,0,valor - entrada)); //a parcela [0] vai servir para armazenar o saldo devedor
    }
    static calcJuros(valor, taxaJuros){
        return valor * (taxaJuros / 100);
    }

    calcParcelasMensais(){
        let saldo = this.#parcelas[this.#parcelas.length-1].getSaldo(); //aqui pegamos o saldo da última parcelas do array (parcelas)
        let prazo = this.#prazo - (this.#parcelas.length-1);
        let amortizacao = saldo / prazo;
        for (let i = 0; i < prazo; i++) {
            const numero = this.#parcelas.length; //seta o numero da parcela atual (id no array parcelas)
            const juros = Financiamento.calcJuros(saldo, this.#taxaJuros);
            const valor = juros + amortizacao;
            saldo -= amortizacao;
            if (saldo < 0) {saldo = 0;}
            this.#parcelas.push(new Parcela(numero,valor,juros,amortizacao,saldo));

        }
    }

    exibeParcelas(){
        const parcelas = this.#parcelas.slice(1); //copiar o vetor de parcelas a partir do ID 1 (1ª parcela)
        for (const parcela of parcelas) {
            index
        }
    }
}