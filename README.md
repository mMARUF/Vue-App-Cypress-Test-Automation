# Transmedia QA Recruitment Technical Test

This project is a QA automation assignment that demonstrates UI and API testing using Cypress and Jest. Below is a detailed overview of the tests implemented, along with instructions to set up and run the project.

---

## **Pre-requisite**

To install and run the app, follow these steps:

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Start the application using `npm start`.

---

## **Tasks**

### **UI Automation**
1. Input a Board name, press enter. Verify the board is created successfully.
2. Add two lists and verify both lists are created successfully.
3. Delete a list and verify it is removed.

### **API Automation**
1. Add a new list via API and verify the response.
2. Delete the newly created list via API and verify the response.

---

## **Testing Overview**

### **Cypress Tests**

Cypress is used for end-to-end (E2E) and component testing. The Cypress tests are located in the `cypress` folder.

#### **Folder Structure**
- **`cypress/e2e/`**: Contains E2E test files.
- **`cypress/pageObjects/`**: Implements the Page Object Model (POM) for reusable UI interactions.
- **`cypress/fixtures/`**: Stores test data used in the tests.
- **`cypress/support/`**: Contains custom commands and global configurations.

#### **Key Tests**

1. **E2E Tests**
   - **File**: `cypress/e2e/board.cy.ts`
     - **Scenarios**:
       - Create a new board and verify its creation.
       - Add two lists to a board and verify their creation.
       - Delete a specific list from the board.
       - Delete the created board and verify its removal.

   - **File**: `cypress/e2e/api.cy.ts`
     - **Scenarios**:
       - Create a new list via API and verify the response.
       - Delete the newly created list via API and verify the response.

2. **Page Object Model**
   - **File**: `cypress/pageObjects/HomePage.ts`
     - Provides methods for interacting with the home page, such as creating a new board and verifying its existence.
   - **File**: `cypress/pageObjects/BoardPage.ts`
     - Provides methods for interacting with boards and lists, such as creating lists, verifying their presence, and deleting them.

3. **Support Files**
   - **File**: `cypress/support/commands.ts`
     - Contains custom Cypress commands for reusable test logic.
   - **File**: `cypress/support/e2e.ts`
     - Configures global Cypress behaviors and imports custom commands.

---

### **Jest Tests**

Jest is used for API testing. The Jest tests are located in the root directory.

#### **Key Tests**

- **File**: `api.jest.spec.ts`
  - **Scenarios**:
    1. Create a new board via API and verify the response.
    2. Add a list to the created board and verify the response.
    3. Delete the created list and verify the response.
    4. Clean up by deleting the created board.

#### **Configuration**
- **File**: `jest.config.ts`
  - Configures Jest to use the `ts-jest` transformer for TypeScript files.
  - Specifies the test environment as `node`.
- **File**: `tsconfig.jest.json`
  - Extends the main `tsconfig.json` to include Jest-specific types.

---

## **Evaluation Criteria**

- **Project Structure (30%)**: Organized and modular codebase.
- **Best Practices and Clean Code (40%)**: Adherence to coding standards and maintainability.
- **Workable Code (30%)**: Fully functional and reliable tests.

---

## **How to Run Tests**

### **Cypress**
1. Open the Cypress test runner: `npm run cypress:open`.
2. Run all E2E tests or select specific tests from the test runner.

### **Jest**
1. Run the Jest tests using: `npm run testunit`.

---

## **Summary**

This project demonstrates comprehensive UI and API testing using Cypress and Jest. The tests ensure the functionality and reliability of the application by covering key scenarios such as board and list creation, deletion, and verification.