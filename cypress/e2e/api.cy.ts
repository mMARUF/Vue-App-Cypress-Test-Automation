describe('List API Automation', () => {
  let boardId: number;
  let listId: number;

  before(() => {
    // Create a board to attach lists to
    cy.request('POST', '/api/boards', { name: 'API Board' }).then((resp) => {
      boardId = resp.body.id;
      expect(resp.status).to.eq(201);
      cy.log(`Created boardId: ${boardId}`);
    });
  });

  it('adds a new list', () => {
    cy.request('POST', '/api/lists', { boardId, name: 'API List', order: 0 }).then((resp) => {
      expect(resp.status).to.eq(201);
      expect(resp.body.name).to.eq('API List');
      listId = resp.body.id;
      cy.log(`Created List ID: ${listId}`);
    });
  });

  it('deletes the newly created list', () => {
    cy.request('DELETE', `/api/lists/${listId}`).then((resp) => {
      expect(resp.status).to.be.oneOf([200, 204]);
    });
  });

  it('deletes the BOARD', () => {
    cy.request('DELETE', `/api/boards/${boardId}`).then((resp) => {
      expect(resp.status).to.be.oneOf([200, 204]);
    });
  });
  
  
});