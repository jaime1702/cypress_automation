Feature: answer form
    I as a user would like to fill in the insurance data


    Scenario: answer form sucessfully
        Given I access the tricentis page.
        And I fill in the required fields during the steps.
        When I click send.
        Then I can see success message.