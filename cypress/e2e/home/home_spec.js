import * as Home from '../../lib/functions/home/HomeFunctions';
import * as Common from '../../lib/functions/common/CommonFunctions';

describe('Home Page Tests', () => {

beforeEach(() => {
    cy.visit('https://connect.studylink.com/')
  });

it.skip('Verify View Solutions button functionality', () => {
 
    Home.clickViewOurSolutions();
    Common.getURL().should('include', '/solutions');

   });


   it.skip('Verify Education Providers Flyout functionality', () => {
 
    // Open Education Providers Flyout
    Home.openFlyout('Education Provider');
    Home.verifyFlyoutOpenSatate(true, 'Education Provider');

    // Close Education Providers Flyout
    Home.closeFlyout('Education Provider');
    Home.verifyFlyoutOpenSatate(false, 'Education Provider');

   });

   it.skip('Verify Recruitment Partners Flyout functionality', () => {
 
    // Open Recruitment Partners Flyout
    Home.openFlyout('Recruitment Partners');
    Home.verifyFlyoutOpenSatate(true, 'Recruitment Partners');

    // Close Recruitment Partners Flyout
    Home.closeFlyout('Recruitment Partners');
    Home.verifyFlyoutOpenSatate(false, 'Recruitment Partners');

   });

   it('Verify sub sections in "Convert More Quality Applications" section', () => {
 
    const testData = ["Complete data onsubmission","Integration","Automation","Speed"];

    Home.verifyItems(testData);
    

   });

});