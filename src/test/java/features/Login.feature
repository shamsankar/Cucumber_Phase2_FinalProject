Feature: This feature would be used to design the Login page of the Sauce Demo application

  Background: Open the Sauce Demo Application
    Given I have opened the Sauce Demo application
@Sanity
  Scenario Outline: Validate the Positive Login
    When I Enter the UserName "<UserName>"
    When I Enter the Password "<Password>"
    Then I Click on the Login Button
    Then I should be Landed on the SWAGLABS Page

    Examples: 
      | UserName      | Password     |
      | standard_user | secret_sauce |
@Regression
  Scenario Outline: Validate the Negative Login
    When I Enter the "<UserName>" in UserName Field
    When I Enter the "<Password>" in Password Field
    Then I Click on the Login Button
    Then I should get the error Message as "Epic sadface: Username and password do not match any user in this service"

    Examples: 
      | UserName | Password  |
      | sham     | wrong_pwd |
