import StudyLinkConfigs from '../../../config/StudyLinkConfigs.json';

/**
 * Open Solutions page by passing url
 * 
 */
export const openSolutionsPage = () => {
    cy.visit(StudyLinkConfigs.baseUrl + StudyLinkConfigs.solutionsPageUrl);
    cy.title().should('include', 'Solutions – connect.studylink'); 
};

/**
 * Open Partner Portal page by passing url
 * 
 */
export const openPartnerPotalPage = () => {
    cy.visit(StudyLinkConfigs.baseUrl + StudyLinkConfigs.partnerPortalPageUrl);
    cy.xpath('.//a[@class="uabb-tab-link"]/span[contains(text(), "The challenge")]', { timeout: Cypress.config('longCommandTimeout') }).should('be.visible');
    cy.title().should('include', 'For Agents – connect.studylink'); 
  };

  /**
   * Open Capture product page
   * 
   */
  export const openCapturePage = () => {
    cy.visit(StudyLinkConfigs.baseUrl + StudyLinkConfigs.capturePageUrl);
    cy.title().should('include', 'Capture – connect.studylink'); 
  };
