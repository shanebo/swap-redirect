# Swap Redirect

Middleware for Dylan which enables res.swapRedirect.

## Install

`npm install @dylan/swap-redirect`

## Usage

``` js
const dylan = require('dylan');
const enableSwapRedirects = require('@dylan/swap-redirect');
const app = dylan();

app.use(enableSwapRedirects());

app.get('/foo', (req, res) => {
  res.swapRedirect();
});
```
