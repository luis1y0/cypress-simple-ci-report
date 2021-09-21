
describe('Los elementos regresan a su estado incial al dar click en el boton "RESET"', function () {
    beforeEach(() => {
        cy.visit('https://luis1y0.github.io/challenge-frontendmentor/index.html')
    })
    it('El boton "RESET" no funciona si no se han completado todos los campos', function () {
        cy.get('#input-bill').type('1')
        cy.get('#input-people').type('2')
        cy.contains('RESET').click()
        cy.get('#input-bill').should('have.value', '1')
        cy.get('#input-people').should('have.value', '2')
    })
    it('Los campos de texto regresan a su estado original al dar click en "RESET"', function () {
        cy.get('#input-bill').type('100')
        cy.get('#input-custom').type('12')
        cy.get('#input-people').type('2')
        cy.contains('RESET').click()
        cy.get('#input-bill').should('have.value', '')
        cy.get('#input-custom').should('have.value', '')
        cy.get('#input-people').should('have.value', '')
    })
    it('Los campos de texto y los botones regresan a su estado original al dar click en "RESET"', function () {
        cy.get('#input-bill').type('100')
        cy.get('#input-people').type('2')
        cy.contains('50%').click()
        cy.contains('RESET').click()
        cy.get('#input-bill').should('have.value', '')
        cy.get('#input-people').should('have.value', '')
    })
})