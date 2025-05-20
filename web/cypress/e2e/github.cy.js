describe('Gerenciamento de Perfis no Github', () => {
    beforeEach(() => {
        cy.login()
        cy.goTo('Tabela', 'Perfis do GitHub')
    });

    it('Deve poder cadastrar um novo perfil do github', () => {
        cy.get('#name').type('Alessandro Andrade')
        cy.get('#username').type('andrade30')
        cy.get('#profile').type('QA')

        cy.contains('button', 'Adicionar Perfil')
            .click()

        cy.contains('table tbody tr', 'andrade30')
            .should('be.visible')
            .as('trProfile')

        cy.get('@trProfile')
            .contains('td', 'Alessandro Andrade')
            .should('be.visible')

        cy.get('@trProfile')
            .contains('td', 'QA')
            .should('be.visible')
    });

    it('Deve poder remover um perfil do github', () => {
        const profile = {
            name: 'Alessandro Andrade',
            usermame: 'andrade30',
            desc: 'QA'
        }

        cy.get('#name').type(profile.name)
        cy.get('#username').type(profile.usermame)
        cy.get('#profile').type(profile.desc)

        cy.contains('button', 'Adicionar Perfil')
            .click()

        cy.contains('table tbody tr', profile.usermame)
            .should('be.visible')
            .as('trProfile')

        cy.get('@trProfile')
            .find('button[title="Remover perfil"]')
            .click()

        cy.contains('table tbody', profile.usermame)
            .should('not.exist')
    });

     it('Deve validar o link do github', () => {
        const profile = {
            name: 'Alessandro Andrade',
            usermame: 'andrade30',
            desc: 'QA'
        }

        cy.get('#name').type(profile.name)
        cy.get('#username').type(profile.usermame)
        cy.get('#profile').type(profile.desc)

        cy.contains('button', 'Adicionar Perfil')
            .click()

        cy.contains('table tbody tr', profile.usermame)
            .should('be.visible')
            .as('trProfile')

        cy.get('@trProfile')
            .find('a')
            .should('have.attr', 'href', 'https://github.com/' + profile.usermame)
            .and('have.attr', 'target', '_blank')
    });
});