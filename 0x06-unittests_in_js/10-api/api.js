const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (request, response) => {
    response.send(`Payment methods for cart ${request.params.id}`);
});

app.get('/available_payments', (request, response) => {
    response.set("Content-Type", "application/json");
    const payMethods = {
	payment_methods: {
          credit_cards: true,
          paypal: false
	}
    }
    response.send(payMethods);
});

app.post('/login', (request, response) => {
    const userName = request.body.userName;
    if (userName) {
	response.send(`Welcome ${userName}`);
    } else {
	response.status(404).send();
    }
});

app.listen(7865, () => {
    console.log(`API available on localhost port 7865`);
});

module.exports = app;
