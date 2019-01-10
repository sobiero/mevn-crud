var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/crud",  { useNewUrlParser: true } ).then(
          
	  () => {
		  console.log('Database connection is successful') 
	  },
	  
	  err => { 
		  console.log('Error when connecting to the database'+ err)	  
	  }

);
