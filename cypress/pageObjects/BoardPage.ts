import { HomePage } from "./HomePage";

export class BoardPage{

    boardNameDIv  = '[data-cy="board-title"]';
    addAListButton = '[data-cy="create-list"]';
    listDiv = '[data-cy="list-name"]';
    listMain = '[data-cy="list"]';
    listOptionsMenu = '[data-cy="list-options"]';
    boardOptionsMenu = '[data-cy="board-options"]' ;
    deleteListButton  = '[data-cy="delete-list"]';
    listNameInputBox = '[data-cy="add-list-input"]';
    deleteBoardButton = '[data-cy="delete-board"]';

    homepageObject = new HomePage();


    createListInsideBoad(name:string) {
            cy.get(this.boardNameDIv).click();
            cy.get(this.addAListButton).click();
            cy.get(this.listNameInputBox).type(`${name}{enter}`);  

    
    }

    listcreatedVerification(postition:number,name:string) {
        cy.get(this.listDiv).eq(postition).should('have.value', name);
    }
    oneDesiredListCreatedSuccessfully(name:string) {
          cy.get(this.listDiv).each(($el) => {
    cy.wrap($el).should(($input) => {
      if ($input.val() === name) {
        expect($input.val()).to.eq(name);
      }
    });
  });
    }

    totalListNumberVerification(number:number) {
        cy.get(this.listDiv).should('have.length',number);
    }

  deleteDesiredList(name: string) {
    cy.get(this.listDiv).each(($el) => {
      if ($el.val() === name) {
        cy.wrap($el)
          .parents(this.listMain)
          .within(() => {
            cy.get(this.listOptionsMenu).click();
            cy.get(this.deleteListButton).click();
          });
      }
    });
  }

    totlaNumberOfLists(number: number) {
    
    cy.get(this.listDiv).should('have.length', number);
  }
 

  InvisibilityOfDeletedList(name: string) {
    cy.get(this.listDiv).should('not.have.value', name);
  }

        deleteBoard(name: string) {
      this.homepageObject.goInsideABoard(name);
      cy.get(this.boardOptionsMenu).click();
      cy.get(this.deleteBoardButton).click();
      
  }
}



