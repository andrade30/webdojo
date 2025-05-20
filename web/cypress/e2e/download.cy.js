describe('Download PDF', () => {
    it('Deve validar o conteúdo do recibo em PDF', () => {
        cy.visit('http://localhost:5173/')

        cy.get('[data-cy="download"]')
            .click()

        cy.task('readPdf', 'cypress/downloads/recibo.pdf')
            .should('contain', 'Papito Shop')
            .and('contain', 'Total124.000')
    });
});