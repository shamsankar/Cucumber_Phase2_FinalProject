package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;


import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class ProductStepsPhase2 {
	
	WebDriver driver = BaseClassPhase2.driver;


@Given("I have Opened the Swaglabs Application in Browser")
public void i_have_Opened_the_Swaglabs_Application_in_Browser() throws InterruptedException {
    // Write code here that turns the phrase above into concrete actions
	driver.get("https://www.saucedemo.com/");
	Thread.sleep(5000);
}

@When("I have logged in Successfull")

public void i_have_logged_in_Successfull() {
	
	WebElement UserName = driver.findElement(By.id("user-name"));
	UserName.sendKeys("standard_user");
	
	WebElement Password = driver.findElement(By.name("password"));
	Password.sendKeys("secret_sauce");
	
	WebElement LoginBtn = driver.findElement(By.name("login-button"));
	LoginBtn.click();
	
	System.out.println("Inside the Swag Labs page");
}
   


@Then("Validate the {string} and {string}")

public void validate_the_and(String string, String ExpectedPrice) {
	
			WebElement Backpack = driver.findElement(By.xpath("//div[text()='Sauce Labs Backpack']/following::div[@class='inventory_item_price'][1]"));

			String ActualPrice = Backpack.getText();
			
			Assert.assertEquals(ActualPrice , ExpectedPrice);
		}
	

}	   
	



