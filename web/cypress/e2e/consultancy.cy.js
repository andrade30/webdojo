import { personal, company } from '../fixtures/consultancy.json'
describe('Formulário de Consultoria', () => {
  beforeEach(() => {
    cy.login()
    cy.goTo('Formulários', 'Consultoria')
  });

  it('Deve solicitar consultoria individual', () => {
    cy.fillConsultancyForm(personal)
    cy.submitConsultancyForm()
    cy.validateConsultancyModal()

    // cy.contains('Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')
    //   .should('be.visible')
  })

  it('Deve solicitar consultoria In Company', () => {
    cy.fillConsultancyForm(company)
    cy.submitConsultancyForm()
    cy.validateConsultancyModal()

    // cy.contains('Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')
    //   .should('be.visible')
  })

  it('Deve verificar os campos obrigatórios ', () => {
    cy.submitConsultancyForm()

    const requireFields = [
      { label: 'Nome Completo', message: 'Campo obrigatório'},
      { label: 'Email', message: 'Campo obrigatório'},
      { label: 'termos de uso', message: 'Você precisa aceitar os termos de uso'}
    ]

    requireFields.forEach(({label, message }) => {
      cy.contains('label', label)
      .parent()
      .find('p')
      .should('have.text', message)
      .should('be.visible')
      .and('have.class', 'text-red-400')
      .and('have.css', 'color', 'rgb(248, 113, 113)')
    })

    // cy.contains('p', 'Campo obrigatório')
    //   .should('be.visible')
    //   .and('have.class', 'text-red-400')
    //   .and('have.css', 'color', 'rgb(248, 113, 113)')

    // cy.contains('p', 'Campo obrigatório')
    //   .should('be.visible')
    //   .and('have.class', 'text-red-400')
    //   .and('have.css', 'color', 'rgb(248, 113, 113)')

    // cy.contains('p', 'Você precisa aceitar os termos de uso')
    //   .should('be.visible')
    //   .and('have.class', 'text-red-400')
    //   .and('have.css', 'color', 'rgb(248, 113, 113)')
  });
})