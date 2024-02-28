const request = require("request");
const expect = require("chai").expect;

describe("Index page", function() {
    const data = {
	url: "http://localhost:7865/",
	method: "GET"
    }
    it("check correct status code", (done) => {
	request(data, function(err, res, body) {
	    expect(res.statusCode).to.equal(200);
	    done();
	});
    });
    it("check correct content", (done) => {
	request(data, function(err, res, body) {
	    expect(body).to.contain("Welcome to the payment system");
	    done();
	});
    });
});

describe("Cart page", function () {
	it("check correct status code for correct url", function (done) {
		request.get("http://localhost:7865/cart/50", function (err, res, body) {
			expect(res.statusCode).to.equal(200);
			done();
		});
	});
	it("check correct content for correct url", function (done) {
		request.get("http://localhost:7865/cart/50", function (err, res, body) {
			expect(body).to.contain("Payment methods for cart 50");
			done();
		});
	});
	it("check correct status code for incorrect url", function (done) {
		request.get("http://localhost:7865/cart/err", function (err, res, body) {
			expect(res.statusCode).to.equal(404);
			done();
		});
	});
});
