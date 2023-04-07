/**
 * Get the current page url
 * 
 * @returns The current page url
 */
export const getURL = () => cy.url();

/**
 * Search an article for a given search criteria
 * 
 * @param {*} searchTerm 
 * eg: "Capture"
 */
export const searchArticle = (searchTerm) => {
    cy
      .xpath('//input[@class="fl-search-input form-control"]')
      .clear()
      .type(searchTerm)
      .should('have.value', searchTerm)
      .type('{enter}');
  };

  /**
   * Click on the "More Information" button
   * 
   */
  export const clickOnMoreInfo = () => {
    cy
        .xpath('//a[@class="fl-button fl-node-5fcde6ed9e989 fl-button-lightbox"]')
        .click();
  };

  /**
   * Click on the Search icon
   * 
   */
  export const clickOnSearch = () => {
    cy
        .xpath('//a[@class="fas fa-search"]')
        .click();
  };

  /**
   * Verify the search page error message 
   */
  export const verifySearchErrorMessage = () => {
    cy
        .xpath('//div[@class = "fl-post-content clearfix"]/p')
        .should('have.text', "Sorry, but nothing matched your search terms. Please try again with some different keywords.");
  };