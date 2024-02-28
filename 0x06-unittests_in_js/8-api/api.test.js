const { expect } = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');
const chai = require('chai');

chai.use(chaiHttp);

describe('Index Page', () => {
    it('should return the correct status code', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });

    it('should return the correct result', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res.text).to.equal('Welcome to the payment system');
                done();
            });
    });
});