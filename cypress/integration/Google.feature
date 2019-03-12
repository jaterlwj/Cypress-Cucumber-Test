Feature: Google Search
 
  I want to search Cypress Cucumber in Google
  
  @focus
  Scenario: Searching in Google for Cypress
    Given I open Google page
    When I search for Cypress Cucumber
    Then I see "Google" in the title
