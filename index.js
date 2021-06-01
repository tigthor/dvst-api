const express = require('express');
const fetch = require('node-fetch');

require('dotenv').config();

const app = express();

app.get('/pairs', async (req, res) => {

    const response = await fetch('https://serum-api.bonfida.com/pairs');
    const data = await response.json();
    res.send(data);
});

app.get('/trades/:marketName', async (req, res) => {

    const response = await fetch(`https://serum-api.bonfida.com/trades/${req.params.marketName}`);
    const data = await response.json();

    console.log(data);
    res.send(data);
});

app.get('/trades/address/:marketAddress', async (req, res) => {

    const response = await fetch(`https://serum-api.bonfida.com/trades/address/${req.params.marketAddress}`);
    const data = await response.json();

    console.log(data);
    res.send(data);
});

app.get('/trades/all/recent', async (req, res) => {

    const response = await fetch('https://serum-api.bonfida.com/trades/all/recent');
    const data = await response.json();

    console.log(data);
    res.send(data);
});

app.get('/volumes/:marketName', async (req, res) => {

    const response = await fetch(`https://serum-api.bonfida.com/volumes/${req.params.marketName}`);
    const data = await response.json();

    console.log(data);
    res.send(data);
});

app.get('/orderbooks/:marketName', async (req, res) => {

    const response = await fetch(`https://serum-api.bonfida.com/orderbooks/${req.params.marketName}`);
    const data = await response.json();

    console.log(data);
    res.send(data);
});

app.get('/pools', async (req, res) => {

    const response = await fetch(`https://serum-api.bonfida.com/pools`);
    const data = await response.json();

    console.log(data);
    res.send(data);
});

app.get('/trades', async (req, res) => {

    const response = await fetch(`https://serum-api.bonfida.com/pools/trades?symbolSource=BTC&symbolDestination=USDC&bothDirections=true`);
    const data = await response.json();

    console.log(data);
    res.send(data);
});

app.get('/pools/volumes/recent', async (req, res) => {

    const response = await fetch(`https://serum-api.bonfida.com/pools/volumes/recent`);
    const data = await response.json();

    console.log(data);
    res.send(data);
});

app.get('/latency-order', async (req, res) => {

    const response = await fetch(`https://bonfida.com/api/latency-order`);
    const data = await response.json();

    console.log(data);
    res.send(data);
});

app.get('/open-interest', async (req, res) => {

    const response = await fetch(`https://bonfida.com/api/open-interest`);
    const data = await response.json();

    console.log(data);
    res.send(data);
});

const PORT = 4000 || process.env.PORT

app.listen(PORT, () => {
    console.log('Example app listening on port 4000!');
});

//Run app, then load http://localhost:4000 in a browser to see the output.