
const today = new Date();
const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
const AfterTomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2);
describe('presentation two', () => {
  it(' make sure the departure date is set to be todays date +1 and the return date is set to be today s date +2', () => {
    cy.visit('https://www.almosafer.com/en')
    cy.get('.cta__saudi').click()
    // part 1
    cy.get('[data-testid="FlightSearchBox__FromDateButton"] > .sc-eSePXt').invoke('text')
    .should('include',`${tomorrow.getDate()}`)
    // part 2
    cy.get('[data-testid="FlightSearchBox__ToDateButton"] > .sc-eSePXt').invoke('text')
    .should('include',`${AfterTomorrow.getDate()}`)
     // part 3
    cy.get('.sc-jWxkHr').invoke('text').should("include","Economy")
   
    
  })
})