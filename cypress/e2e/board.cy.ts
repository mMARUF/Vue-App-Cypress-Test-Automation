import { HomePage } from "cypress/pageObjects/HomePage";
import { BoardPage } from "cypress/pageObjects/BoardPage";




const homepageObject = new HomePage();
const boardpageObject = new BoardPage();

describe('Borad and List full Flow',()=> {

    beforeEach ( () => {
        homepageObject.visit();
    })


    it('Creating New Board', () => {
    homepageObject.createANewBoard('Demo Board');
    homepageObject.boardCreatedVerification('Demo Board');

})

it('create a list inside a project',() => {
    homepageObject.goInsideABoard('Demo Board');
    boardpageObject.createListInsideBoad('DemoList 1');
    boardpageObject.oneDesiredListCreatedSuccessfully('DemoList 1');
    boardpageObject.createListInsideBoad('DemoList 2');
        boardpageObject.oneDesiredListCreatedSuccessfully('DemoList 2');



})

it('Verify Number of Lists present',() => {
    homepageObject.visit();
            homepageObject.goInsideABoard('Demo Board');
    boardpageObject.totlaNumberOfLists(2);


})

it('Delete a specific list from Board Page',() => {
    // homepageObject.visit();
            homepageObject.goInsideABoard('Demo Board');
            boardpageObject.deleteDesiredList('Demo List 1');


})





  it('Deleting the created Board', () => {
    boardpageObject.deleteBoard('Demo Board');


    homepageObject.boardShouldNotExistVerification('Demo Board');
  });

})




