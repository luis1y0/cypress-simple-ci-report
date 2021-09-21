
describe('My First Test', function () {
    it('Does not do much', function () {
        cy.visit('https://luis1y0.github.io/challenge-frontendmentor/index.html')
        cy.get('#input-bill').type('15')
        cy.contains('15%').click()
        cy.get('#input-people').type('1')
    })
})

