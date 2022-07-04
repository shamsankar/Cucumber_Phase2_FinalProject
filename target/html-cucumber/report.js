$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "This feature would be used to design the Login page of the Sauce Demo application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validate the Positive Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I Enter the UserName \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I Enter the Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I Click on the Login Button",
  "keyword": "Then "
});
formatter.step({
  "name": "I should be Landed on the SWAGLABS Page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.background({
  "name": "Open the Sauce Demo Application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the Sauce Demo application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepsPhase2.i_have_opened_the_Sauce_Demo_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Positive Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I Enter the UserName \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepsPhase2.i_Enter_the_UserName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter the Password \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepsPhase2.i_Enter_the_Password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on the Login Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsPhase2.i_Click_on_the_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be Landed on the SWAGLABS Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsPhase2.i_should_be_Landed_on_the_SWAGLABS_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate the Negative Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I Enter the \"\u003cUserName\u003e\" in UserName Field",
  "keyword": "When "
});
formatter.step({
  "name": "I Enter the \"\u003cPassword\u003e\" in Password Field",
  "keyword": "When "
});
formatter.step({
  "name": "I Click on the Login Button",
  "keyword": "Then "
});
formatter.step({
  "name": "I should get the error Message as \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ]
    },
    {
      "cells": [
        "sham",
        "wrong_pwd"
      ]
    }
  ]
});
formatter.background({
  "name": "Open the Sauce Demo Application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the Sauce Demo application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepsPhase2.i_have_opened_the_Sauce_Demo_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Negative Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I Enter the \"sham\" in UserName Field",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepsPhase2.i_Enter_the_in_UserName_Field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter the \"wrong_pwd\" in Password Field",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepsPhase2.i_Enter_the_in_Password_Field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on the Login Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsPhase2.i_Click_on_the_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error Message as \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsPhase2.i_should_get_the_error_Message_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/Products.feature");
formatter.feature({
  "name": "This feature would be used to test the price of the products",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@F_Login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Validate the Positive Login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I Enter the UserName \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I Enter the Password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I Click on the Login Button",
  "keyword": "Then "
});
formatter.step({
  "name": "I should be Landed on the SWAGLABS Page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.background({
  "name": "Login to the Application http://www.saucedemo.com",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have Opened the Swaglabs Application in Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductStepsPhase2.i_have_Opened_the_Swaglabs_Application_in_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Positive Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@F_Login"
    }
  ]
});
formatter.step({
  "name": "I Enter the UserName \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepsPhase2.i_Enter_the_UserName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter the Password \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepsPhase2.i_Enter_the_Password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on the Login Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsPhase2.i_Click_on_the_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be Landed on the SWAGLABS Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsPhase2.i_should_be_Landed_on_the_SWAGLABS_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate the Prices of the Product",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have logged in Successfull",
  "keyword": "When "
});
formatter.step({
  "name": "Validate the \"\u003cProduct Name\u003e\" and \"\u003cPrice\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Product Name",
        "Price"
      ]
    },
    {
      "cells": [
        "Sauce Labs Backpack",
        "$29.99"
      ]
    }
  ]
});
formatter.background({
  "name": "Login to the Application http://www.saucedemo.com",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have Opened the Swaglabs Application in Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductStepsPhase2.i_have_Opened_the_Swaglabs_Application_in_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Prices of the Product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@F_Login"
    }
  ]
});
formatter.step({
  "name": "I have logged in Successfull",
  "keyword": "When "
});
formatter.match({
  "location": "ProductStepsPhase2.i_have_logged_in_Successfull()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the \"Sauce Labs Backpack\" and \"$29.99\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductStepsPhase2.validate_the_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});