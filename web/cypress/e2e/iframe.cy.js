describe('iFrame', () => {
    it('Deve poder tocar o vídeo de exemplo', () => {
        cy.login()
        cy.contains('Video').click()

        // think time
        cy.wait(3000)

        cy.get('iframe[title="Video Player"]')
            .should('exist')
            // É uma função do cypress que pode ser usada obter propriedades de elemento, objetos ao testar API's, propriedades da janela, local storage, cookies e Iframes.
            .its('0.contentDocument.body')
            // cy.wrap -> É um recurso do cypress para obter o valor de um objeto, de um array ou de um elemento que está dentro de uma página do Html.
            .then(cy.wrap)
            .as('iFramePlayer')

        cy.get('@iFramePlayer')
            .find('.play-button')
            .click()

        cy.get('@iFramePlayer')
            .find('.pause-button')
            .should('be.visible')

    });
});