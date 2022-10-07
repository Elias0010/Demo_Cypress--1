describe ("Suite Test - conjunto de Pruebas", () => {
    beforeEach( () => {
         //Runs before each test in the block
        cy.visit("http://zero.webappsecurity.com/")  
    })


    it ("Validar Pagina de Inicio", () => {

       
        cy.get(".active > img").should('be.visible') 
        cy.get(".active > .custom > h4").contains('Online Banking')
    })
    
    it ("Prueba E2E - transferencia de fondos ", () => {
        //Apartado de Login
            
            cy.get("#signin_button").click()
            cy.get("#user_login").type("username")
            cy.get("#user_password").type("password") 
            cy.get(".btn").click()
            
            //Apartado de Transferencia de fondos
            cy.get("#transfer_funds_tab > a").click()
            cy.get("#tf_fromAccountId").select(0)
            cy.get("#tf_toAccountId").select(5)
            cy.get("#tf_amount").type(400)
            cy.get("#tf_description").type("Transferencia de prueba")
            cy.get("#btn_submit").click()
            cy.get("#btn_submit").click()
            cy.get(".alert").contains("You successfully submitted your transaction.")
    })

    it ("Prueba de validacion en actualizacion del grafico", () => {
         
        cy.get("#signin_button").click()
        cy.get("#user_login").type("username")
        cy.get("#user_password").type("password") 
        cy.get(".btn").click()

         //Apartado de actualizacion del grafico
         cy.get("#money_map_tab > a").click()
         cy.get("#ext-sprite-1259").should("be.visible")
         cy.get("#ext-sprite-1167 > tspan ").click()
         cy.get("#ext-sprite-1259").should("not.be.visible")
   
         
         
    })
    after( () => {
        cy.get("#transfer_funds_tab > a").click()
            cy.get("#tf_fromAccountId").select(0)
            cy.get("#tf_toAccountId").select(5)
            cy.get("#tf_amount").type(400)
            cy.get("#tf_description").type("Transferencia de prueba")
            cy.get("#btn_submit").click()
            cy.get("#btn_submit").click()
            cy.get(".alert").contains("You successfully submitted your transaction.")
    })
    })

    