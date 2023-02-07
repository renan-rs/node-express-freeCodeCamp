const express = require('express');
const path = require('path');

const app = express();

//setup static and middleware
app.use(express.static('./public'));

//dont need when setting a static folder with and index.html
// app.get('/', (req, res) => {
//   //or path.join()
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
//   //adding to static assets
//   //SSR
// });

app.all('*', (req, res) => {
  res.status(404).send('<h1>Resource not found</h1>');
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});