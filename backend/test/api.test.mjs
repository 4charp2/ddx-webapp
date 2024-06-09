import request from 'supertest';
import { expect } from 'chai';
import app from '../app.mjs'; // Убедитесь, что путь правильный

describe('GET /api', () => {
    it('should return Hello, Hacker!', async () => {
        const response = await request(app)
            .get('/api')
            .expect('Content-Type', /text\/html/)
            .expect(200);
        expect(response.text).to.equal('Hello, Hacker!');
    });
});


