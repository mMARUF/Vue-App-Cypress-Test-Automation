export class HomePage {

    createNewBoardDiv = '[data-cy="create-board"]';
    boardTitileInputField = '[data-cy="new-board-input"]';
    home = '[data-cy="home"]';
    boardBox = '[data-cy="board-item"]';
    optionsMenu = '[data-cy="board-options"]';
    delBoard = '[data-cy="delete-board"]';


    visit()  {
        cy.visit('/');
    }

    createANewBoard(name: string) {
        cy.get(this.createNewBoardDiv).click();
        cy.get(this.boardTitileInputField).type(`${name}{enter}`);
        cy.get(this.home).click();

    }
        boardCreatedVerification(name:string) {
        cy.contains(this.boardBox,name).should('be.visible');
    }


    goInsideABoard(name: string) {
        cy.contains(this.boardBox,name).click();

        


    }
  boardShouldNotExistVerification(name: string) {
    cy.contains(this.boardBox, name).should('not.exist');
  }
}


