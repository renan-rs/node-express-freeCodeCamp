const express = require('express');
const app = express();
const logger = require('./logger');

// req => middleware => res

//must be on top
app.use(logger);

// starts in /api, will log /api/products and /api/items
//app.use('/api', logger); 

app.get('/', (req,res) => {
  res.send('Home');
});
app.get('/about', (req,res) => {
  res.send('About');
});
app.get('/api/products', (req,res) => {
  res.send('Products');
});
app.get('/api/items', (req,res) => {
  res.send('Items');
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});