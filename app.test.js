const request = require('supertest');
const app = require('./app'); // Assuming your Express app is in app.js
describe('GET /', () => {
it('should return Hello, World!', async () => {
const res = await request(app).get('/');
expect(res.text).toBe('Hello world');
expect(res.statusCode).toBe(200);
});
});

// new comment 1
