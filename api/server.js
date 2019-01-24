const express    = require('express'),
      app        = express(),
      // bodyParser = require('body-parser'),
      // multer     = require('multer'),
      mongoose   = require('./models/mongoose')
     
//var upload = multer()

// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())
// app.use(require('connect').bodyParser());

// app.use(express.json());
// app.use(express.urlencoded());
app.use(require('./routes'));

app.get('/api', (req, res) => {
  res.json('Hello From CRUD Api')
});

app.listen(10015, () => {
  console.log('listening on 10015..')
});
