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
});