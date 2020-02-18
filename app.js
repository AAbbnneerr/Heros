//import dependencies 
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import logger from 'morgan'

//Set up dependencies
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false });
app.use(logger('dev'));

//Set up mongoose
mongoose.connect('mongodb://127.0.0.1:27017/Academia')
.then(() =>{
    console.log('success connection');
})
.catch((error) =>{
console.log('error connecting to database');
})

//Setup port
const port = 3000

//Setup route
app.get('/', (req, res)=>{
    res.status(200).json({
        message: 'welcome to project support'
    })
})
app.listen(port, () =>{
    console.log(`Our server is running on port ${port}`);
})