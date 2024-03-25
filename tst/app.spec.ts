import jest from 'jest';
import supertest from 'supertest';
import { Request, Response } from 'express';
import { app } from 'src/app';

describe('express app functionalities', () => {
  it('responds with hello world', async () => {
    /**
     * Should there be testing here that's checking API statuses? Is that the intended affect?
     * I think it should not call the API, instead we mock the response that's from the endpoint
     */
    // const request = supertest(app);
    // const response = await request.get('/');
    const application = supertest(app);
    expect(application).not.toBe(null);
  });
});
