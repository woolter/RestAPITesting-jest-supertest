import request from 'supertest';

const schema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    authenticated: {
      type: 'boolean',
    },
    user: {
      type: 'string',
    },
  },
  required: ['authenticated', 'user'],
};

const schemaWrong = {
  type: 'object',
  additionalProperties: false,
  properties: {
    authenticated: {
      type: 'string',
    },
    user: {
      type: 'string',
    },
  },
  required: ['authenticated', 'user'],
};

describe('GET', () => {
  test('Valid credentials', async () => {
    let response;
    response = await request('http://user:password@localhost/basic-auth').get(
      '/user/password'
    );
    expect(response.body).toMatchSchema(schema);
    expect(response.status).toBe(200);
  });
  test('Invalid credentials - FAIL', async () => {
    let response;
    response = await request('http://user:password@localhost/basic-auth').get(
      '/user/invalidPassword'
    );
    expect(response.status).toBe(401);
  });
  test('Valid credentials', async () => {
    let response;
    response = await request('http://user:password@localhost/basic-auth').get(
      '/user/password'
    );
    expect(response.body).toMatchSchema(schemaWrong);
  });
});
