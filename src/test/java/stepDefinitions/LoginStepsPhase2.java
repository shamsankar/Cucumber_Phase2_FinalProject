package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;


import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginStepsPhase2 {
	
	WebDriver driver = BaseClassPhase2.driver;
	@Given("I have opened the Sauce Demo application")
	public void i_have_opened_the_Sauce_Demo_application() throws InterruptedException{
		driver.get("https://www.saucedemo.com/");
		 Thread.sleep(5000);
	}
	   
	
	@When("I Enter the UserName {string}")
	public void i_Enter_the_UserName(String string) {
		WebElement UserName = driver.findElement(By.id("user-name"));
		UserName.sendKeys(string);
	}

	@When("I Enter the Password {string}")
	public void i_Enter_the_Password(String string)  {
		WebElement Password = driver.findElement(By.name("password"));
		Password.sendKeys(string);

		
	}

	@Then("I Click on the Login Button")
	public void i_Click_on_the_Login_Button() {
		WebElement LoginBtn = driver.findElement(By.name("login-button"));
		LoginBtn.click();
	 
	}

	@Then("I should be Landed on the SWAGLABS Page")
	public void i_should_be_Landed_on_the_SWAGLABS_Page() {
		System.out.println("Inside the Swag Labs page");
	
	}
	  

	@When("I Enter the {string} in UserName Field")
	public void i_Enter_the_in_UserName_Field(String string) {
		
		WebElement UserName = driver.findElement(By.id("user-name"));
		UserName.sendKeys(string);
	}

	@When("I Enter the {string} in Password Field")
	public void i_Enter_the_in_Password_Field(String string) {
		WebElement Password = driver.findElement(By.name("password"));
		Password.sendKeys(string);
	   
	}

	@Then("I should get the error Message as {string}")
	public void i_should_get_the_error_Message_as(String ExpMsg) {
		 WebElement ErrorMsg = driver.findElement(By.xpath("//div[@class='error-message-container error']")); 
	       String ActualMsg = ErrorMsg.getText();
	       Assert.assertEquals(ExpMsg, ActualMsg);
	   
	}
}
	
	 
