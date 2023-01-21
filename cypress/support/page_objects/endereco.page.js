class EnderecoPage {

    EnderecoPagee(nome, sobrenome, empresa, pais, endereco, numero, cidade, estado, cep, telefone, email ){
        cy.get('#billing_first_name').click().type(nome)
        cy.get('#billing_last_name').click().type(sobrenome)
        cy.get('#billing_company').click().type(empresa)
        cy.get('#select2-billing_country-container').click().type(pais + '{enter}')
        cy.get('#billing_address_1').click().type(endereco)
        cy.get('#billing_address_2').click().type(numero)
        cy.get('#billing_city').click().type(cidade)
        cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
        cy.get('#billing_postcode').click().type(cep)
        cy.get('#billing_phone').click().type(telefone)
        cy.get('#billing_email').click().type(email)
        cy.get('#terms').click()
        cy.get('#place_order').click()
    }

}

export default new EnderecoPage()