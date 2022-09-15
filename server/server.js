// import 'dotenv/config';
//This doesn't work

//This brings in the path module
const path = require('path');

const mongoose = require('mongoose');

const apiRouter = require('./routes/api');

//This brings in the express module
const express = require('express');

// import cors from 'cors';
// const cors = require('cors');

const app = express();
const PORT = 3000;

//What cors does is it secures our application on a domain level. The idea is it shouldn't be possible to access data from other domains.
//we do this at an application-level so we don't have to do it ourselves for every route.
// app.use(cors());

//reads any request with req.body. Request object gets parsed into json object. Allows us to recieve information from the front end in json format.
app.use(express.json());

//reads any request with a form, html forms
app.use(express.urlencoded({extended: false}));

//handle request for static files
//serving anything that is inside client
//Without this we serve anything in our front end.
//Any folders inside of the client folder will be served up here.
// app.use(express.static(path.resolve(__dirname, '../client')));

// app.use(apiRouter)

//Front end, onClick()=> fetch request, fetch request comes here and will look for a get, put, post etc.
app.use('/api', apiRouter);

//default
app.get('/', (req,res)=>{
    //index.html as opposed to App? The index.html is our web page, the App is the one building the webpage.
    return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
})


//http:localhost:3000/index.html

//catch-all
app.use('*', (req, res) => {
    res.status(404).send('Not Found');
})

/**
 * Global error handler
 */

 app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send({ error: err });
  });
  

app.listen(PORT, ()=>{
    console.log('App listening on port 3000.'
    )
})

console.log('hello I am stressed');

console.log(process.env.MY_SECRET)