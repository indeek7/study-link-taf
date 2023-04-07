import * as Navbar from '../../lib/functions/common/NavBarFunctions';
import * as Common from '../../lib/functions/common/CommonFunctions';

describe('Top Panel Tests', () => {

  beforeEach(() => {
    cy.visit('https://connect.studylink.com/')
  });

    it('Verify solutions navigation bar menu functions', () => {
 
      // verify Partner Portal page navigation
      Navbar.clickSolutionsSubMenuItem("Partner Portal");
      Common.getURL().should('include', '/for-agents');
  
      // verify Capture page naviagtion
      Navbar.clickSolutionsSubMenuItem("Capture");
      Common.getURL().should('include', '/capture');
  
      // verify Capture page naviagtion
      Navbar.clickSolutionsSubMenuItem("Admit");
      Common.getURL().should('include', '/admit');
    });

    it('Verify recruitment parterns navigation bar menu functions', () => {
 
      // verify Partner Portal page navigation
      Navbar.clickRecruitmentPartnersSubMenuItem("Partner Portal");
      Common.getURL().should('include', '/for-agents');
    });

    it('Verify education providers navigation bar menu functions', () => {
 
     // verify Capture page naviagtion
     Navbar.clickEducationProvidersSubMenuItem("Capture");
     Common.getURL().should('include', '/capture');
 
     // verify Capture page naviagtion
     Navbar.clickEducationProvidersSubMenuItem("Admit");
     Common.getURL().should('include', '/admit');
    });

    it('Verify why us navigation bar menu functions', () => {
 
      // verify About Us page naviagtion
      Navbar.clickWhyUsSubMenuItem("About Us");
      Common.getURL().should('include', '/about-us');
  
     });

     it('Verify resources navigation bar menu functions', () => {
 
      // verify The Hub page naviagtion
      Navbar.clickResourcesSubMenuItem("The Hub");
      Common.getURL().should('include', '/the-hub-copy');

      // verify Case Studies page naviagtion
      Navbar.clickResourcesSubMenuItem("Case Studies");
      Common.getURL().should('include', '/case-studies');
  
     });
});