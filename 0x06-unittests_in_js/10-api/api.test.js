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

describe("Available_payments page", () => {
    it("check correct status for url", () => {
	request.get("http://localhost:7865/available_payments", (err, res, body) => {
	    if (err) {
		expect(res.statusCode).to.not.equal(200);
	    } else {
		expect(res.statusCode).to.equal(200);
	    }
	});
    });
    it("check correct body content for url", () => {
	const data = {json: true};
	const payment = {
	    payment_methods: {
		credit_cards: true,
		paypal: false
	    }
	}
	request.get("http://localhost:7865/available_payments", data, (err, res, body) => {
	    if (err) {
		expect(res.statusCode).to.not.equal(200);
	    } else {
		expect(body).to.deep.equal(payment);
	    }
	});
    });
});

describe("Login", function() {
    it("check correct status code for a good request", (done) => {
	const data = {
	    url: "http://localhost:7865/login",
	    json: true,
	    body: {
		userName: 'JOE'
	    }
	};
	request.post(data, function(err, res, body) {
	    expect(res.statusCode).to.equal(200);
	    done();
	});
    });
    it("check correct content for a good request", (done) => {
	const data = {
	    url: "http://localhost:7865/login",
	    json: true,
	    body: {
		userName: 'JOE'
	    }
	};
	request.post(data, function(err, res, body) {
	    if (err) {
		expect(res.statusCode).to.not.equal(200);
	    } else {
		expect(body).to.contain('Welcome JOE');
	    }
	    done();
	});
    });
    it("check correct status code for a bad request", (done) => {
	const data = {
	    url: "http://localhost:7865/login",
	    json: true,
	    body: {
		userName: 'JOE'
	    }
	};
	request.post(data, function(err, res, body) {
	    expect(res.statusCode).to.equal(404);
	    done();
	});
  });
});
