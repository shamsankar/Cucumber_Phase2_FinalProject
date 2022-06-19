@F_Login
Feature: This feature would be used to test the price of the products

  Background: Login to the Application http://www.saucedemo.com
    Given I have Opened the Swaglabs Application in Browser

  Scenario Outline: Validate the Positive Login
    When I Enter the UserName "<UserName>"
    When I Enter the Password "<Password>"
    Then I Click on the Login Button
    Then I should be Landed on the SWAGLABS Page

    Examples: 
      | UserName      | Password     |
      | standard_user | secret_sauce |

  Scenario Outline: Validate the Prices of the Product
    When I have logged in Successfull
    Then Validate the "<Product Name>" and "<Price>"

    Examples: 
      | Product Name        | Price  |
      | Sauce Labs Backpack | $29.99 |
