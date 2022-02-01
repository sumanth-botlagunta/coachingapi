var express = require('express');
const app = express();
var cors = require('cors');
var mongo = require('mongodb');
const mongoclient = mongo.MongoClient;
const port = process.env.PORT || 5000;
const mongourl = 'mongodb://localhost:27017/';

app.use(cors());
var db;
app.get('/', (req, res) => {
    res.send('<h1>welcome to the coaching api</h1>')
})

app.get('/courses',(req, res) => {
    db.collection('courses').find().toArray((err, result) => {
        if(err) throw err;
        res.send(result);
    })
})

mongoclient.connect(mongourl,(err, client) => {
    if (err) {
        console.log(err)
    }
    db = client.db('coachingapp');
    app.listen(port, (req, res) => {
        console.log(`listening on port ${port}`)
    })
})
