// const request = require('supertest');
// const app = require('./app'); // Assuming your Express app is in app.js
// describe('GET /', () => {
// it('should return Hello, World!', async () => {
// const res = await request(app).get('/');
// expect(res.text).toBe('Hello world');
// expect(res.statusCode).toBe(200);
// });
// });

// afterAll(() => {
//     server.close();  // Close the server after tests
//   });
  

// // new comment 1



const request = require('supertest');
const app = require('./app'); // Assuming your Express app is in app.js
let server;

beforeAll(() => {
  server = app.listen(3012);  // Start the server before tests
});

afterAll(() => {
  server.close();  // Close the server after tests
});

describe('GET /', () => {
  it('should return Hello, World!', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello world');
    expect(res.statusCode).toBe(200);
  });
});
