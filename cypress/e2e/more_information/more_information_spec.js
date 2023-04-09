import * as Common from '../../lib/functions/common/CommonFunctions';
import * as MoreInfo from '../../lib/functions/more_information/MoreInfoFunctions';

describe('Top Panel Tests', () => {

    beforeEach(() => {
      cy.visit('https://connect.studylink.com/')
    });

      it('Verify labels in More Information form', () => {
        Common.clickOnMoreInfo();
        MoreInfo.verifyLabels("Name");
        MoreInfo.verifyLabels("First");
        MoreInfo.verifyLabels("Last");
        MoreInfo.verifyLabels("Organization");
        MoreInfo.verifyLabels("Email");
        MoreInfo.verifyLabels("Title");
        MoreInfo.verifyLabels("Country");
        MoreInfo.verifyLabels("Comment");
      });
  
      it('Verify more information form filling with valid data', () => {
   
        Common.clickOnMoreInfo();
        MoreInfo.fillFirstName("Test");
        MoreInfo.fillLastName("Developer");
        MoreInfo.fillOrganization("Test Developer");
        MoreInfo.fillEmail("test@example.com");
        MoreInfo.fillCountry("Australia");
        MoreInfo.fillTitle("Admission Process");
        MoreInfo.fillComment("I need to know full automated admission process");
        MoreInfo.submit();
        Common.clickOnMoreInfo();
        MoreInfo.verifySuccessfullMessage();
      });

      it('Verify more information form filling function without first name', () => {
   
        Common.clickOnMoreInfo();
        MoreInfo.fillLastName("Developer");
        MoreInfo.fillOrganization("Test Developer");
        MoreInfo.fillEmail("test@example.com");
        MoreInfo.fillCountry("Australia");
        MoreInfo.fillTitle("Admission Process");
        MoreInfo.fillComment("I need to know full automated admission process");
        MoreInfo.submit();
        MoreInfo.verifyErrorMessage("First");
      });

      it('Verify more information form filling function without last name', () => {
   
        Common.clickOnMoreInfo();
        MoreInfo.fillFirstName("Test");
        MoreInfo.fillOrganization("Test Developer");
        MoreInfo.fillEmail("test@example.com");
        MoreInfo.fillCountry("Australia");
        MoreInfo.fillTitle("Admission Process");
        MoreInfo.fillComment("I need to know full automated admission process");
        MoreInfo.submit();
        MoreInfo.verifyErrorMessage("Last");
      });

      it('Verify more information form filling function without organization', () => {
   
        Common.clickOnMoreInfo();
        MoreInfo.fillFirstName("Test");
        MoreInfo.fillLastName("Developer");
        MoreInfo.fillEmail("test@example.com");
        MoreInfo.fillCountry("Australia");
        MoreInfo.fillTitle("Admission Process");
        MoreInfo.fillComment("I need to know full automated admission process");
        MoreInfo.submit();
        MoreInfo.verifyErrorMessage("Organization");
      });

      it('Verify more information form filling function without email', () => {
   
        Common.clickOnMoreInfo();
        MoreInfo.fillFirstName("Test");
        MoreInfo.fillLastName("Developer");
        MoreInfo.fillOrganization("Test Developer");
        MoreInfo.fillCountry("Australia");
        MoreInfo.fillTitle("Admission Process");
        MoreInfo.fillComment("I need to know full automated admission process");
        MoreInfo.submit();
        MoreInfo.verifyErrorMessage("Email");
      });

      
      it('Verify more information form filling function without comment', () => {
   
        Common.clickOnMoreInfo();
        MoreInfo.fillFirstName("Test");
        MoreInfo.fillLastName("Developer");
        MoreInfo.fillOrganization("Test Developer");
        MoreInfo.fillEmail("test@example.com");
        MoreInfo.fillCountry("Australia");
        MoreInfo.fillTitle("Admission Process");
        MoreInfo.submit();
        MoreInfo.verifyErrorMessage("Comment");
      });

      it('Verify error message for blank First Name', () => {
   
        Common.clickOnMoreInfo();
        MoreInfo.fillFirstName("     ");
        MoreInfo.fillLastName("Developer");
        MoreInfo.fillOrganization("Test Developer");
        MoreInfo.fillEmail("test@example.com");
        MoreInfo.fillCountry("Australia");
        MoreInfo.fillTitle("Admission Process");
        MoreInfo.fillComment("I need to know full automated admission process");
        MoreInfo.submit();
        MoreInfo.verifyErrorMessage("First");
      });

      it('Verify error message for blank Last Name', () => {
   
        Common.clickOnMoreInfo();
        MoreInfo.fillFirstName("Test");
        MoreInfo.fillLastName("      ");
        MoreInfo.fillOrganization("Test Developer");
        MoreInfo.fillEmail("test@example.com");
        MoreInfo.fillCountry("Australia");
        MoreInfo.fillTitle("Admission Process");
        MoreInfo.fillComment("I need to know full automated admission process");
        MoreInfo.submit();
        MoreInfo.verifyErrorMessage("Last");
      });

      it('Verify error message for blank comment', () => {
   
        Common.clickOnMoreInfo();
        MoreInfo.fillFirstName("Test");
        MoreInfo.fillLastName("Developer");
        MoreInfo.fillOrganization("Test Developer");
        MoreInfo.fillEmail("test@example.com");
        MoreInfo.fillCountry("Australia");
        MoreInfo.fillTitle("Admission Process");
        MoreInfo.fillComment("                                ");
        MoreInfo.submit();
        MoreInfo.verifyErrorMessage("Comment");
      });

      it('Verify more information form filling function with spaces as Organization', () => {
   
        Common.clickOnMoreInfo();
        MoreInfo.fillFirstName("Test");
        MoreInfo.fillLastName("Developer");
        MoreInfo.fillOrganization("         ");
        MoreInfo.fillEmail("test@example.com");
        MoreInfo.fillCountry("Australia");
        MoreInfo.fillTitle("Admission Process");
        MoreInfo.fillComment("I need to know full automated admission process");
        MoreInfo.submit();
        MoreInfo.verifyErrorMessage("Organization");
      });

      it('Verify more information form filling function with spaces as Email', () => {
   
        Common.clickOnMoreInfo();
        MoreInfo.fillFirstName("Test");
        MoreInfo.fillLastName("Developer");
        MoreInfo.fillOrganization("Test Developer");
        MoreInfo.fillEmail("         ");
        MoreInfo.fillCountry("Australia");
        MoreInfo.fillTitle("Admission Process");
        MoreInfo.fillComment("I need to know full automated admission process");
        MoreInfo.submit();
        MoreInfo.verifyErrorMessage("Email");
      });

      it('Verify error message for incorrect email format', () => {
   
        Common.clickOnMoreInfo();
        MoreInfo.fillFirstName("Test");
        MoreInfo.fillLastName("Developer");
        MoreInfo.fillOrganization("Test Developer");
        MoreInfo.fillEmail("test@example");
        MoreInfo.fillCountry("Australia");
        MoreInfo.fillTitle("Admission Process");
        MoreInfo.fillComment("I need to know full automated admission process");
        MoreInfo.submit();
        MoreInfo.verifyEmailFormatErrorMessage();
      });

      it('Verify error message when First Name with special characters', () => {
   
        Common.clickOnMoreInfo();
        MoreInfo.fillFirstName("!@#$%^&*");
        MoreInfo.fillLastName("Developer");
        MoreInfo.fillOrganization("Test Developer");
        MoreInfo.fillEmail("test@example.com");
        MoreInfo.fillCountry("Australia");
        MoreInfo.fillTitle("Admission Process");
        MoreInfo.fillComment("I need to know full automated admission process");
        MoreInfo.submit();
        Common.clickOnMoreInfo();
        MoreInfo.verifyAndConfirmFailSubmision();
      });

      it('Verify error message when Last Name with special characters', () => {
   
        Common.clickOnMoreInfo();
        MoreInfo.fillFirstName("Test");
        MoreInfo.fillLastName("!@#$%^&*");
        MoreInfo.fillOrganization("Test Developer");
        MoreInfo.fillEmail("test@example.com");
        MoreInfo.fillCountry("Australia");
        MoreInfo.fillTitle("Admission Process");
        MoreInfo.fillComment("I need to know full automated admission process");
        MoreInfo.submit();
        Common.clickOnMoreInfo();
        MoreInfo.verifyAndConfirmFailSubmision();
      });

      it('Verify error message when First Name with digits', () => {
   
        Common.clickOnMoreInfo();
        MoreInfo.fillFirstName("12345678");
        MoreInfo.fillLastName("Developer");
        MoreInfo.fillOrganization("Test Developer");
        MoreInfo.fillEmail("test@example.com");
        MoreInfo.fillCountry("Australia");
        MoreInfo.fillTitle("Admission Process");
        MoreInfo.fillComment("I need to know full automated admission process");
        MoreInfo.submit();
        Common.clickOnMoreInfo();
        MoreInfo.verifyAndConfirmFailSubmision();
      });

      it('Verify error message when Last Name with digits', () => {
   
        Common.clickOnMoreInfo();
        MoreInfo.fillFirstName("Test");
        MoreInfo.fillLastName("123456789");
        MoreInfo.fillOrganization("Test Developer");
        MoreInfo.fillEmail("test@example.com");
        MoreInfo.fillCountry("Australia");
        MoreInfo.fillTitle("Admission Process");
        MoreInfo.fillComment("I need to know full automated admission process");
        MoreInfo.submit();
        Common.clickOnMoreInfo();
        MoreInfo.verifyAndConfirmFailSubmision();
      });
  
  });