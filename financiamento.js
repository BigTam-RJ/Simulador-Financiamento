import {Parcela} from './parcela.js'

export class Financiamento{
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
            const linha = corpoTabela.insertRow(-1); //inserir uma linha no final da tabela
            for (const dado of parcela.getDadosFormatados()) {
                const celula = linha.insertCell(-1); //inserir uma célula após a última célula da tabela
                celula.textContent = dado; //inserir o contéudo dentro da célula criada
            }
        }
    }
    getParcelas(){
        return this.#parcelas;
    }
}