const request = require('supertest');
const baseURL = 'http://localhost:3000';

describe('API Automation for List', () => {
  let boardId: number;
  let listId: number;

  beforeAll(async () => {
    const apiResponse = await request(baseURL)
      .post('/api/boards')
      .send({ name: 'API Board' });
    expect(apiResponse.status).toBe(201);
    boardId = apiResponse.body.id;
    expect(boardId).toBeDefined();
  });

  afterAll(async () => {
    if (boardId !== undefined) {
      await request(baseURL).delete(`/api/boards/${boardId}`);
    }
  });

  it('Adding list inside the board', async () => {
    const apiResponse = await request(baseURL)
      .post('/api/lists')
      .send({ boardId, name: 'Sprint Backlog', order: 0 });
    expect(apiResponse.status).toBe(201);
    expect(apiResponse.body.name).toBe('Sprint Backlog');
    listId = apiResponse.body.id;
    expect(listId).toBeDefined();
  });

  it('Deleting created list inside the board successfully', async () => {
    const res = await request(baseURL)
      .delete(`/api/lists/${listId}`);
    expect([200, 204]).toContain(res.status);
  });

});