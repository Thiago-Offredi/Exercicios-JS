/*Faça um programa que imprima na tela se um nome é igual ao outro nome digitado.
 Porém, os dois nomes devem estar em dois objetos separados.
  Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true.
   João e Maria, imprime false.Faça um programa que imprima na tela se um nome é igual ao outro nome digitado.
    */
let pessoa = {
    nome: "Thiago",
    profissao: "Programador",
    Cidade: "Samambaia",
    Filhos: "Não",
    Carro: "Não"

};
let pessoa1 = {
    nome: /*"Tatiane"*/"Thiago",
    profissao: "tec-enfermagem",
    Cidade: "Samambaia",
    Filhos: "Não",
    Carro: "Não"
}

console.log(pessoa.nome === pessoa1.nome)