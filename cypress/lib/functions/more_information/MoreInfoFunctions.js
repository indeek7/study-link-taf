/**
 * Enter "First Name" field
 * 
 * @param {*} name User's First Name
 * eg: "Test"
 */
export const fillFirstName = (name) => {
    cy
        .get("input#wpforms-606-field_0")
        .eq(0)
        .type(name);
  };

  /**
 * Enter "Last Name" field
 * 
 * @param {*} name User's Last Name
 * eg: "Developer"
 */
  export const fillLastName = (name) => {
    cy
        .get("input#wpforms-606-field_0-last")
        .eq(0)
        .type(name);
  };

   /**
 * Enter "Institute/Organization" field
 * 
 * @param {*} name User's Organization or Institute Name
 * eg: "Test Developer"
 */
  export const fillOrganization = (organization) => {
    cy
        .get("input#wpforms-606-field_3")
        .eq(0)
        .type(organization);
  };

  /**
 * Enter "Email" field
 * 
 * @param {*} name User's Email
 * eg: "@example.com"
 */
  export const fillEmail = (email) => {
    cy
        .get("input#wpforms-606-field_1")
        .eq(0)
        .type(email);
  };

  /**
 * Enter "Tittle" field
 * 
 * @param {*} name User's Title 
 * eg: "Test Title"
 */
  export const fillTitle = (title) => {
    cy
        .get("input#wpforms-606-field_4")
        .eq(0)
        .type(title);
  };

  /**
 * Enter "Country" field
 * 
 * @param {*} name User's Country 
 * eg: "Test Title"
 */
  export const fillCountry = (country) => {
    cy
        .get("input#wpforms-606-field_5")
        .eq(0)
        .type(country);
  };

  /**
 * Enter "Comment" field
 * 
 * @param {*} name User's Comment 
 * eg: "Test Comment"
 */
  export const fillComment = (comment) => {
    cy
        .get("textarea#wpforms-606-field_2")
        .eq(0)
        .type(comment);
  };

/**
 * Click on "Submit" button
 * 
 */
  export const submit = () => {
    cy
        .get("button#wpforms-submit-606")
        .eq(0)
        .click({force: true});
  };

  /**
   * Verify the More Information request failure
   * 
   */
  export const verifyAndConfirmFailSubmision = () => {
    cy
    .xpath('//div[@id = "wpforms-confirmation-606"]/p')
    .eq(0)
    .then(($el) => {
      if($el.is(':visible')) {
          cy.fail('Confirm that the more information submission was successful')
      }

    });
  };

  /**
   * Verify the More Information request success message
   * 
   */
  export const verifySuccessfullMessage = () => {
    cy
    .xpath('//div[@id = "wpforms-confirmation-606"]/p')
    .eq(0)
    .should('have.text', "Thanks for contacting us! We will be in touch with you shortly.");
  };

  /**
   * Verify Field require error message in the "More Information" form
   * 
   * @param {*} field Fields in the "More Information" form
   * eg: "First"
   */
  export const verifyErrorMessage = (field) => {
    switch (field) {
        case 'First':
            cy.get("label#wpforms-606-field_0-error")
            .should('have.text', "This field is required.");
            break;
        case 'Last':
            cy.get("label#wpforms-606-field_0-last-error")
            .should('have.text', "This field is required.");
            break;
        case 'Comment':
            cy.get("label#wpforms-606-field_2-error")
            .should('have.text', "This field is required.");
            break;
        case 'Email':
            cy.get("label#wpforms-606-field_1-error")
            .should('have.text', "This field is required.");
            break;
        case 'Organization':
            cy.get("label#wpforms-606-field_3-error")
            .should('have.text', "This field is required.");
            break;
        default:
            cy.log("Field not found");
    }
  };

  /**
   * Verify email format error message
   * 
   */
  export const verifyEmailFormatErrorMessage = () => {
            cy
            .get("label#wpforms-606-field_1-error")
            .should('have.text', "Please enter a valid email address.");
  };

   /**
   * Verify Field labels in the "More Information" form
   * 
   * @param {*} field Fields in the "More Information" form
   * eg: "Name"
   */
   export const verifyLabels = (field) => {
    switch (field) {
        case 'Name':
            cy.xpath('//div[@class="wpforms-field wpforms-field-name"]/label[@class="wpforms-field-label"]')
            .eq(0)
            .should('have.text', "Name *");
            break;
        case 'First':
            cy.xpath('//div[@class="wpforms-field-row-block wpforms-first wpforms-one-half"]/label[@for="wpforms-606-field_0"]')
            .eq(0)
            .should('have.text', "First");
            break;
        case 'Last':
            cy.xpath('//div[@class="wpforms-field-row-block wpforms-one-half"]/label[@for="wpforms-606-field_0-last"]')
            .eq(0)
            .should('have.text', "Last");
            break;
        case 'Comment':
            cy.xpath('//div[@id="wpforms-606-field_2-container"]/label[@for="wpforms-606-field_2"]')
            .eq(0)
            .should('have.text', "Comment or Message *");
            break;
        case 'Email':
            cy.xpath('//div[@id="wpforms-606-field_1-container"]/label[@for="wpforms-606-field_1"]')
            .eq(0)
            .should('have.text', "Email *");
            break;
        case 'Organization':
            cy.xpath('//div[@id="wpforms-606-field_3-container"]/label[@for="wpforms-606-field_3"]')
            .eq(0)
            .should('have.text', "Institution/Organisation *");
            break;
        case 'Title':
            cy.xpath('//div[@id="wpforms-606-field_4-container"]/label[@for="wpforms-606-field_4"]')
            .eq(0)
            .should('have.text', "Title");
            break;
        case 'Country':
            cy.xpath('//div[@id="wpforms-606-field_5-container"]/label[@for="wpforms-606-field_5"]')
            .eq(0)
            .should('have.text', "Country");
            break;
        default:
            cy.log("Field not found");
    }
  };

