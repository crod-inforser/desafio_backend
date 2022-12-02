import request from 'supertest';
import app from '../../../../src/server';

describe('GET /products/search?search=XXXX', () => {
  it('should respond with a 200 status code', async () => {
    const response = await request(app).get('/products/search?search=XXXX')
    expect(response.statusCode).toBe(200);
  });

  it('should respond with a 400 status code', async () => {
    const response = await request(app).get('/products/search');
    expect(response.statusCode).toBe(400);
  });

  it('should respond an Object', async () => {
    const response = await request(app).get('/products/search?search=XXXX');
    expect(response.body).toBeInstanceOf(Object);
  });

  it('should have a Content-Type: application/json header', async () => {
    const response = await request(app).get('/products/search?search=XXXX');
    expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
  });

  test('should respond with an products Array', async () => {
    const response = await request(app).get('/products/search?search=XXX');
    expect(response.body.products).toBeDefined();
  });

  test('should respond with an undefined', async () => {
    const response = await request(app).get('/products/search?search=');
    expect(response.body.products).toBeUndefined();
  });
});
