import { Given, When } from "cypress-cucumber-preprocessor/steps";
 
const url = 'https://google.com'
Given('I open Google page', () => {
    cy.visit(url)
})

When('I search for Cypress Cucumber', () => {
    cy.get('.gLFyf.gsfi').type('Cypress Cucumber{enter}');
});

Then('I see "Google" in the title', (title) => {
    cy.title().should('include', 'Google');
});