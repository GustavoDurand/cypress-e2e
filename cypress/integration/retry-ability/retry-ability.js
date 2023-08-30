describe('Sesion de Retry-Ability', function(){

    before(function(){
        cy.visit('https://app.zendata.dev/login'); // comando
        cy.get('#root > main > div.MuiGrid-root.jss10.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-12.MuiGrid-grid-md-6 > div > form > span:nth-child(1) > label > div > div >input').type('gustavodurandd@gmail.com') //escribir usuario) // comando -> obtiene 1 o mas elementos del DOM
        cy.get('#root > main > div.MuiGrid-root.jss10.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-12.MuiGrid-grid-md-6 > div > form > span:nth-child(2) > label > div > div > input').type('Gjde2112.{enter}')//escribir contraseña
    })
    
    it('Validar aplicaciones en el menú',()=>{
        cy.get('#root > div > div > div > ul > a.MuiButtonBase-root.MuiListItem-root.jss64.-reports.-active.MuiListItem-gutters.MuiListItem-button.active > div.MuiListItemText-root.jss65 > span')
        
    })
})