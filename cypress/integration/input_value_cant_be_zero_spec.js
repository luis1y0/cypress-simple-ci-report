
describe('Mostrar "Can\'t be zero" cuando se escribe 0 en un campo de texto', function () {
    beforeEach(() => {
        cy.visit('https://luis1y0.github.io/challenge-frontendmentor/index.html')
    })
    it('Mostrar error al poner "0" en el campo de la cuenta', function () {
        cy.get('#input-bill').type('0')
        cy.get('#error-bill').should('have.css', 'visibility', 'visible')
    })
    it('Mostrar error al poner "0" en el campo del numero de personas', function () {
        cy.get('#input-people').type('0')
        cy.get('#error-people').should('have.css', 'visibility', 'visible')
    })
})

