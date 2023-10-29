
describe('to homepage', () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('http://localhost:5173')
    })

    it('displays login form and wrong user credentials', () => {
        // We use the `cy.get()` command to get all elements that match the selector.
        // Then, we use `should` to assert that there are two matched items,
        // which are the two default items.
        cy.intercept('POST', '/login', (req) => {
          req.reply((res) => {
            res.send(400)
          })
        })

        cy.get('#loginForm').should('be.visible');
        cy.get('#userName').type('test');
        cy.get('#password').type('test');
        cy.get('#loginForm').submit();

    })

    it('displays login user logs in, and logs out'), () => {
        cy.get('#loginForm').should('be.visible');
        cy.get('#userName').type('TestGebruiker');
        cy.get('#password').type('OpaOpa123!');
        cy.get('#loginForm').submit();
        cy.get('#loginForm').should('not.exist');
        cy.get('nav').should('be.visible');
        cy.get('[data-cy="account"]').click()
        cy.get('[data-cy="logout"]').click()
        cy.get('nav').should('not.exist');

    }

    it('displays login form and correct user', () => {
        cy.intercept('POST', '/login', (req) => {
            req.reply((res) => {
                res.send(200)
            })
        })

        cy.intercept('GET', '/api/User/GetAllUsers', (req) => {
            req.reply((res) => {
                res.send(200)
            })
        })

        cy.get('#loginForm').should('be.visible');
        cy.get('#userName').type('TestGebruiker');
        cy.get('#password').type('OpaOpa123!');
        cy.get('#loginForm').submit();
        cy.get('#loginForm').should('not.exist');

    })




})