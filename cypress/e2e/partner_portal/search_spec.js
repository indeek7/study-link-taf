import * as Common from '../../lib/functions/common/CommonFunctions';

describe('Search Tests', () => {

    beforeEach(() => {
      cy.visit('https://connect.studylink.com/')
    });
  
      it('Verify search article function with invalid search criteria', () => {
        Common.clickOnSearch();
        Common.searchArticle("!23!@#$");
        Common.verifySearchErrorMessage();
      });

      it('Verify search article function with valid search criteria', () => {
        Common.clickOnSearch();
        Common.searchArticle("capture");
      });
  

  });