describe('Google success search', () => {
    
    it('https://luis1y0.github.io/challenge-frontendmentor/index.html', () => {
        cy.visit('https://www.google.com') 
    })

    it('Search for a video', () => {
        cy.get('[name="q"]')
        .type('never gonna give you up youtube')
        .should('have.value', 'never gonna give you up youtube')
        .type('{enter}')
    })
  })