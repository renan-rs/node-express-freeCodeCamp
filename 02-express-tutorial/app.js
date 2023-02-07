const express = require('express');
const app = express();

const people = require('./routes/people');
const auth = require('./routes/auth');

// /api/people use methods-public/javascript.html
// /login use methods-public/index.html

// static assets
app.use(express.static('./methods-public'));

app.use(express.urlencoded({ extended:false }));
app.use(express.json());

//api/people routes
app.use('/api/people', people);
app.use('/login', auth);


app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});