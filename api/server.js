const express = require('express')
 , app = express();

app.get('/api', (req, res) => {
  res.json('Hello From CRUD Api')
});

app.use(require('./routes'));

app.listen(10015, function() {
  console.log('listening on 10015..')
});
