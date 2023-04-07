//import { range } from "cypress/types/lodash";

 /**
   * Click on the "View Our Solutions" button
   * 
   */
export const clickViewOurSolutions = () => {
    cy.xpath('//div[@class="fl-button-wrap fl-button-width-custom fl-button-left"]/a[@href="https://connect.studylink.com/solutions/"]').click();
  };

  /**
   * Open "Education Providers" and "Recruitment Partners" flyouts
   * 
   * @param {*} FlyoutMenu Name of the flyout
   * eg: "Education Provider"
   */
export const openFlyout = (FlyoutMenu) => {
    switch (FlyoutMenu) {
        case 'Education Provider':
            cy.xpath('//div[@class="fl-module fl-module-slide-box fl-node-67bnwlrqmc41"]//i[@class="fas fa-angle-down"]').click();
        break;
        case 'Recruitment Partners':
            cy.xpath('//div[@class="fl-module fl-module-slide-box fl-node-k1jid8uzt3ol"]//i[@class="fas fa-angle-down"]').click();
        break;
        default:
            cy.log("Flyout menu not found");
    }
    
  };

/**
   * Close "Education Providers" and "Recruitment Partners" flyouts
   * 
   * @param {*} FlyoutMenu Name of the flyout
   * eg: "Education Provider"
   */
  export const closeFlyout = (FlyoutMenu) => {
    switch (FlyoutMenu) {
        case 'Education Provider':
            cy.xpath('//div[@class="fl-module fl-module-slide-box fl-node-67bnwlrqmc41"]//i[@class="fas fa-angle-up"]').click();
        break;
        case 'Recruitment Partners':
            cy.xpath('//div[@class="fl-module fl-module-slide-box fl-node-k1jid8uzt3ol"]//i[@class="fas fa-angle-up"]').click();
        break;
        default:
            cy.log("Flyout menu not found");
    }
    
  };

  /**
   * Verify the open sates of "Education Providers" and "Recruitment Partners" flyouts
   * 
   * @param {*} State Open state of the flyout
   * eg: true
   * @param {*} FlyoutMenu 
   * eg: "Education Provider"
   */
export const verifyFlyoutOpenSatate = (State, FlyoutMenu) => {
    switch (FlyoutMenu) {
        case 'Education Provider':
            if(State){
                cy
                    .xpath('//div[@class="fl-module fl-module-slide-box fl-node-67bnwlrqmc41"]//i[@class="fas fa-angle-up"]')
                    .should('be.visible');
            } else {
                cy
                    .xpath('//div[@class="fl-module fl-module-slide-box fl-node-67bnwlrqmc41"]//i[@class="fas fa-angle-down"]')
                    .should('be.visible');
            }
        break;
        case 'Recruitment Partners':
            if(State){
                cy
                    .xpath('//div[@class="fl-module fl-module-slide-box fl-node-k1jid8uzt3ol"]//i[@class="fas fa-angle-up"]')
                    .should('be.visible');
            }else {
                cy
                    .xpath('//div[@class="fl-module fl-module-slide-box fl-node-k1jid8uzt3ol"]//i[@class="fas fa-angle-down"]')
                    .should('be.visible');
            }
        break;
        default:
            cy.log("Flyout Menu not found");
    }
};

/**
 * Verify sub items in "Convert More Quality Applications", "Maximise it's Recruitment Effort" and  "Be Compliant and Secure" sections
 * 
 * @param {*} data Sub items of each mentioned section
 * eg: ["Complete data on submission","Integration","Automation","Speed"];
 * @param {*} section Any section name out of "Convert More Quality Applications", "Maximise it's Recruitment Effort" and  "Be Compliant and Secure" sections
 * eg: Convert More Quality Applications
 */
export const verifyItems = (data, section) => {

  const itemArray = [];
  let myElement = '';

switch(section) {
    case 'Convert More Quality Applications':
        myElement = cy.xpath('//div[@class="fl-module fl-module-advanced-accordion fl-node-i68uxpn4tjk3"]//div[@class="uabb-adv-accordion-item"]//h5');
        break;
    case "Maximise it's Recruitment Effort":
        myElement = cy.xpath('//div[@class="fl-module fl-module-advanced-accordion fl-node-l1huedyjqnkc"]//div[@class="uabb-adv-accordion-item"]//h5');
        break;
    case 'Be Compliant and Secure':
        myElement = cy.xpath('//div[@class="fl-module fl-module-advanced-accordion fl-node-5c9hypw7ki12"]//div[@class="uabb-adv-accordion-item"]//h5');
        break;
    default:
        cy.log("Section name not found");
}


  myElement.each(($el) => {
  const item = $el.text();

  itemArray.push(item);

  }).then(() => {
    itemArray.forEach((element, index) => {
        cy.log(element);
        expect(element).to.equal(data[index]);
      });
  });
};
