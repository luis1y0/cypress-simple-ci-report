
describe('Calcula correctamente la propina solo si se terminan de llenar los campos', function () {
    beforeEach(() => {
        cy.visit('https://luis1y0.github.io/challenge-frontendmentor/index.html')
    })
    it('Mensaje de error oculto al escribir valores diferentes de 0', function () {
        cy.get('#input-bill').type('1')
        cy.get('#input-people').type('2')
        cy.get('#error-bill').should('not.have.css', 'visibility', 'visible')
        cy.get('#error-people').should('not.have.css', 'visibility', 'visible')
    })
    it('Mostrar "$ 0.0" como resultado si no se terminan de llenar todos los campos', function () {
        cy.get('#input-bill').type('1')
        cy.get('#input-people').type('2')
        cy.get('#result-tip').should('have.text', '$ 0.0')
        cy.get('#result-total').should('have.text', '$ 0.0')
    })
    it('Una cuenta de <100>, <15%> de propina y <2> personas: Tip amount <7.50>, Total <57.50>', function () {
        cy.get('#input-bill').type('100')
        cy.get('#input-people').type('2')
        cy.contains('15%').click()
        cy.get('#result-tip').should('have.text', '$ 7.50')
        cy.get('#result-total').should('have.text', '$ 57.50')
    })
})
