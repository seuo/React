var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors');

var review = require('./review-model');

//setup database connection
var connectionString = 'mongodb://admin:vanilla@cluster0-shard-00-00-kztj9.mongodb.net:27017,cluster0-shard-00-01-kztj9.mongodb.net:27017,cluster0-shard-00-02-kztj9.mongodb.net:27017/icecream?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(connectionString,{ useNewUrlParser: true });
var  db = mongoose.connection;
db.once('open', () => console.log('Database connected'));
db.on('error', () => console.log('Database error'));


//setup express server
var app = express();
app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(logger('dev'));

//setup routes
var router = express.Router();

router.get('/reviews', (req, res) => {

	review.find()
	.then((items) => {
	    return res.json(items);
	});

})

router.get('/reviews/:id', (req, res) => {

	review.findOne({id:req.params.id})
	.then((items) => {
	    return res.json(items);
	});
})

router.post('/reviews', (req, res) => {

	var review = new review();
	review.id = Date.now();
	
	var data = req.body;
	Object.assign(review,data);
	
	review.save()
	.then((items) => {
	  	return res.json(items);
	});
});

router.delete('/reviews/:id', (req, res) => {

	review.deleteOne({ id: req.params.id })
	.then(() => {
		return res.json('deleted');
	});
});

router.put('/reviews/:id', (req, res) => {

	review.findOne({id:req.params.id})
	.then((items) => {
		var data = req.body;
		Object.assign(items,data);
		return items.save()	
	})
	.then((items) => {
		return res.json(items);
	});	

});

app.use('/api', router);

// launch our backend into a port
const apiPort = 3001;
app.listen(apiPort, () => console.log('Listening on port '+apiPort));