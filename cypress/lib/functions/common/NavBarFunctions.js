
/**
 * Click on the "Solutions" Menu and click on it's sub menus
 * 
 * @param {*} subMenu Sub menus in "Solutions" menu
 * eg : "Partner Portal"
 * 
 */
export const clickSolutionsSubMenuItem = (subMenu) => {
    cy.xpath('//li[@id="mega-menu-item-42"]/a[@class="mega-menu-link"]').click();
    switch (subMenu) {
        case 'Partner Portal':
    cy.xpath(`//parent::li[@id="mega-menu-item-38"]/a[@href="https://connect.studylink.com/for-agents/"]`).should('be.visible');
    cy.xpath(`//parent::li[@id="mega-menu-item-38"]/a[@href="https://connect.studylink.com/for-agents/"]`).click();
    break;
        case 'Capture':
    cy.xpath(`//parent::li[@id="mega-menu-item-41"]/a[@href="https://connect.studylink.com/capture/"]`).should('be.visible');
    cy.xpath(`//parent::li[@id="mega-menu-item-41"]/a[@href="https://connect.studylink.com/capture/"]`).click();
    break;
    case 'Admit':
    cy.xpath(`//parent::li[@id="mega-menu-item-40"]/a[@href="https://connect.studylink.com/admit/"]`).should('be.visible');
    cy.xpath(`//parent::li[@id="mega-menu-item-40"]/a[@href="https://connect.studylink.com/admit/"]`).click();
    break;
    default:
        cy.log("Sub Menu not found");
    }
  };

  /**
   * Click on the "Recruitment Partners" Menu and click on it's sub menus
   * 
   */
  export const clickRecruitmentPartnersSubMenuItem = () => {
    cy.xpath('//li[@id="mega-menu-item-39"]/a[@class="mega-menu-link"]').click();
    cy.xpath(`//parent::li[@id="mega-menu-item-8542"]/a[@href="https://connect.studylink.com/for-agents/"]`).should('be.visible');
    cy.xpath(`//parent::li[@id="mega-menu-item-8542"]/a[@href="https://connect.studylink.com/for-agents/"]`).click();
  };

/**
 * Click on the "Education Providers" Menu and click on it's sub menus
 * 
 * @param {*} subMenu Sub menus in "Solutions" menu
 * eg : "Capture"
 * 
 */
  export const clickEducationProvidersSubMenuItem = (subMenu) => {
    cy.xpath('//li[@id="mega-menu-item-8537"]/a[@class="mega-menu-link"]').click();
    switch (subMenu) {
        case 'Capture':
    cy.xpath(`//parent::li[@id="mega-menu-item-8545"]/a[@href="https://connect.studylink.com/capture/"]`).should('be.visible');
    cy.xpath(`//parent::li[@id="mega-menu-item-8545"]/a[@href="https://connect.studylink.com/capture/"]`).click();
    break;
    case 'Admit':
    cy.xpath(`//parent::li[@id="mega-menu-item-8544"]/a[@href="https://connect.studylink.com/admit/"]`).should('be.visible');
    cy.xpath(`//parent::li[@id="mega-menu-item-8544"]/a[@href="https://connect.studylink.com/admit/"]`).click();
    break;
    default:
        cy.log("Sub Menu not found");
    }
  };

  /**
   * Click on the "Why Us" Menu and click on it's sub menus
   * 
   */
  export const clickWhyUsSubMenuItem = () => {
    cy.xpath('//li[@id="mega-menu-item-8538"]/a[@class="mega-menu-link"]').click();
    cy.xpath(`//parent::li[@id="mega-menu-item-8776"]/a[@href="https://connect.studylink.com/about-us/"]`).should('be.visible');
    cy.xpath(`//parent::li[@id="mega-menu-item-8776"]/a[@href="https://connect.studylink.com/about-us/"]`).click();
  };

/**
 * Click on the "Resources" Menu and click on it's sub menus
 * 
 * @param {*} subMenu Sub menus in "Solutions" menu
 * eg : "The Hub"
 * 
 */
  export const clickResourcesSubMenuItem = (subMenu) => {
    cy.xpath('//li[@id="mega-menu-item-37"]/a[@class="mega-menu-link"]').click();
    switch (subMenu) {
        case 'The Hub':
    cy.xpath(`//parent::li[@id="mega-menu-item-8879"]/a[@href="https://connect.studylink.com/the-hub-copy/"]`).should('be.visible');
    cy.xpath(`//parent::li[@id="mega-menu-item-8879"]/a[@href="https://connect.studylink.com/the-hub-copy/"]`).click();
    break;
    case 'Case Studies':
    cy.xpath(`//parent::li[@id="mega-menu-item-8777"]/a[@href="https://connect.studylink.com/case-studies/"]`).should('be.visible');
    cy.xpath(`//parent::li[@id="mega-menu-item-8777"]/a[@href="https://connect.studylink.com/case-studies/"]`).click();
    break;
    default:
        cy.log("Sub Menu not found");
    }
  };