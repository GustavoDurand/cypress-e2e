describe('Login Zendara', () => {
      it('User can login', () => {
        cy.visit('https://app.zendata.dev/login')
      it('text of back yo homepage', () =>{
        cy.get('#root > main > div.MuiGrid-root.jss10.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-12.MuiGrid-grid-md-6 > a').should('be.visible')
      })
        cy.get('#root > main > div.MuiGrid-root.jss10.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-12.MuiGrid-grid-md-6 > a').should('be.visible');
        cy.get('#root > main > div.MuiGrid-root.jss10.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-12.MuiGrid-grid-md-6 > div > a > svg').should('be.visible');
        cy.get('#root > main > div.MuiGrid-root.jss10.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-12.MuiGrid-grid-md-6 > div > h1').should('be.visible');
        cy.get('#root > main > div.MuiGrid-root.jss10.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-12.MuiGrid-grid-md-6 > div > form > p:nth-child(4) > a').should('be.visible');
        cy.get('#root > main > div.MuiGrid-root.jss10.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-12.MuiGrid-grid-md-6 > div > form > p:nth-child(5)').should('be.visible');
        cy.get('#root > main > div.MuiGrid-root.jss10.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-12.MuiGrid-grid-md-6 > div > footer > p > a').should('be.visible');
        cy.get('#root > main > div.MuiGrid-root.jss10.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-12.MuiGrid-grid-md-6 > div > form > button > span.MuiButton-label.jss36').should('be.visible');
        cy.get('#root > main > div.MuiGrid-root.jss6.MuiGrid-item.MuiGrid-grid-md-6').should('be.visible');
        cy.get('[placeholder="johndoe@zendata.dev"]').type('gustavodurandd@gmail.com').should('be.visible'); //type user)
        cy.get('[placeholder="********"]').type('Gjde2112.{enter}').should('be.visible');//type password and login
        
      })

    })
