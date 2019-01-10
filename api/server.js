const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.json('Hello From CRUD Api')
});

app.get('/api/users', (req, res) => {
  res.send('Hello From CRUD Api dd')
});

app.listen(10015, function() {
  console.log('listening on 10015')
});
