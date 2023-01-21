/// <reference types="cypress" />
import EnderecoPage from '../support/page_objects/endereco.page';
const dadosEndereco = require('../fixtures/endereco.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    it('Selecionando e adicionando produtos', () => {
        cy.visit('produtos/')
        cy.addProdutos('Abominable Hoodie', 'M', 'Red', 4)
        cy.visit('checkout/')// Tive que usar um direcionamento direto para o carrinho, pois estava zerando o carrinho sempre.
    });

    it('Realizando o preenchimento das informações', () => {
        EnderecoPage.EnderecoPagee(
            dadosEndereco[0].nome,
            dadosEndereco[0].sobrenome,
            dadosEndereco[0].empresa,
            dadosEndereco[0].pais,
            dadosEndereco[0].endereco,
            dadosEndereco[0].numero,
            dadosEndereco[0].cidade,
            dadosEndereco[0].estado,
            dadosEndereco[0].cep,
            dadosEndereco[0].telefone,
            dadosEndereco[0].email
            )
            cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')

    });
})