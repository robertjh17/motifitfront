describe('to homepage', () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('http://localhost:5173')
    })

    it('displays login form and correct user', () => {
            cy.get('#loginForm').should('be.visible');
            cy.get('#userName').type('TestGebruiker');
            cy.get('#password').type('OpaOpa123!');
            cy.get('#loginForm').submit();
            cy.get('[data-cy="addpost"]').click();
            cy.get('[data-cy="postform"]').should('be.visible');
            cy.get('[data-cy="workoutnaam"]').type('TestWorkout');
            cy.get('[data-cy="beschrijving"]').type('TestBeschrijving');
            cy.get('[data-cy="exercisename"]').type('TestExercise');
            cy.get('[data-cy="sets"]').type('3');
            cy.get('[data-cy="reps"]').type('10');
        cy.get('[data-cy="submit"]').click();

                cy.intercept('POST', 'https://localhost:7150/api/Post/addpost', (req) => {
            req.reply((res) => {
                res.send(200)
            }
            )
        })
    })

it('adds post but doesnt fill everything in', () => {
        cy.get('#loginForm').should('be.visible');
        cy.get('#userName').type('TestGebruiker');
        cy.get('#password').type('OpaOpa123!');
        cy.get('#loginForm').submit();
        cy.get('[data-cy="addpost"]').click();
        cy.get('[data-cy="postform"]').should('be.visible');
        cy.get('[data-cy="workoutnaam"]').type('TestWorkout');
        cy.get('[data-cy="beschrijving"]').type('TestBeschrijving');
        cy.get('[data-cy="submit"]').click();

        cy.intercept('POST', 'https://localhost:7150/api/Post/addpost', (req) => {
            req.reply((res) => {
                res.send(400)
            }
            )
        })
    })


})