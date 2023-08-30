describe('Login Zendara', () => {
      it('User can login', () => {
        cy.visit('https://app.zendata.dev/login') // comando
        cy.get('[placeholder="johndoe@zendata.dev"]').type('gustavodurandd@gmail.com') //escribir usuario) // comando -> obtiene 1 o mas elementos del DOM
        cy.get('[placeholder="********"]').type('Gjde2112.{enter}')//escribir contraseña
        
      })

    })
