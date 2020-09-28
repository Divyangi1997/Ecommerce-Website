const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

PORT = 3000

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(cors(
    {
        origin:['http://localhost:4200','http://127.0.0.1:4200'],
        credentials: true
    }
));

const dbConfig = require('./config/database.config')

mongoose.Promise = global.Promise

mongoose.connect(dbConfig.url, {
    useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true
}).then(() => {
    console.log("Successfully connected to database");
}).catch(err => {
    console.log("Could not connect to database. Existing now...");
    process.exit();
});

//define a simple route 
app.get('/',(req,res)=>{
    res.send("Welcome to aliens application");
});

const categoryRoute = require('./app/routes/category.route');
app.use('/ecommerce', categoryRoute)

const productRoute = require('./app/routes/product.route');
app.use('/ecommerce', productRoute);

// error handler
app.use((err, req, res, next) => {
    if(err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});

app.listen(PORT, () => {
    console.log("server is listening on port" + PORT);
})