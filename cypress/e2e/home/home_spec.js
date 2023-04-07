import * as Home from '../../lib/functions/home/HomeFunctions';
import * as Common from '../../lib/functions/common/CommonFunctions';

describe('Home Page Tests', () => {

beforeEach(() => {
    cy.visit('https://connect.studylink.com/')
  });

it('Verify View Solutions button functionality', () => {
 
    Home.clickViewOurSolutions();
    Common.getURL().should('include', '/solutions');

   });


   it('Verify Education Providers Flyout functionality', () => {
 
    // Open Education Providers Flyout
    Home.openFlyout('Education Provider');
    Home.verifyFlyoutOpenSatate(true, 'Education Provider');

    // Close Education Providers Flyout
    Home.closeFlyout('Education Provider');
    Home.verifyFlyoutOpenSatate(false, 'Education Provider');

   });

   it('Verify Recruitment Partners Flyout functionality', () => {
 
    // Open Recruitment Partners Flyout
    Home.openFlyout('Recruitment Partners');
    Home.verifyFlyoutOpenSatate(true, 'Recruitment Partners');

    // Close Recruitment Partners Flyout
    Home.closeFlyout('Recruitment Partners');
    Home.verifyFlyoutOpenSatate(false, 'Recruitment Partners');

   });

   it('Verify sub sections in "Convert More Quality Applications" section', () => {
 
    const testData = ["Complete data on submission","Integration","Automation","Speed"];

    Home.verifyItems(testData, "Convert More Quality Applications"); 

   });

   it('Verify sub sections in Maximise its Recruitment Effort section', () => {
 
    const testData = ["Agent and Recruitment Partner management","Diversification","Access","Convenience","Tracking"];

    Home.verifyItems(testData, "Maximise it's Recruitment Effort"); 

   });

   it('Verify sub sections in "Be Compliant and Secure" Effort section', () => {
 
    const testData = ["Less digging","Protection","Privacy","One password"];

    Home.verifyItems(testData, "Be Compliant and Secure"); 

   });

});