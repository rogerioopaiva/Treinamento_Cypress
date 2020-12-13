// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('backgroundLogin', () => {
    cy.setCookie(
        'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
        'R6xmma6F4U6edNQuu67M0iOWXGC1cJcK8%2FeDn968CDMV99GrKeA4E%2FlCoYd6BG1MtXibJ2GM7axdE2UarqDhgBs5qom830eBtww1qu9k6seemapgpNbCKLraX4kxVzlYRcU%2BUhm%2B0xac8wcVEQIiuIi2wcBFfkh0Ffs7WMnMWHwWlNEU94dPPDi8tyMHHBrmQd8D36tGRML8fIb%2Bs%2BGRNr1hjlhz0%2Bth2O5xU06ovvP5nwHGJfRzyyik3H0vBtpSx6M1P3fa8%2BTj5fVATqdZS24Pq8xBsqfi59px%2FZCvLNVL%2FcIcPM593cE%2BUSm%2FtIq6YJR4NUGnkWVCkzGxGB1LgtYpcUl918NuQ9GelrlBJIhbLHjifEfiULZd9mXXQWAWmVoiW28PoA9okGfKjPbTY%2F0XCqPaHmSUub4NYO7xiQw%3D000317'
    )
})
