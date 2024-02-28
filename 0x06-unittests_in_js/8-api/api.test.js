const { expect } = require('chai');
const request = require('request');
// const chaiHttp = require('chai-http');
const app = require('./api');
// const chai = require('chai');

// chai.use(chaiHttp);

describe('Index Page', () => {
  const data = {
    url: 'http://localhost:7865/',
    method: 'GET'
  };
  it('should return the correct status code', (done) => {
    request(data, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct content', (done) => {
    request(data, (err, res, body) => {
      expect(body).to.contain('Welcome to the payment system');
      done();
    });
  });
});
