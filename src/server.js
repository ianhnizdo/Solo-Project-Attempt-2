// import 'dotenv/config';
//This doesn't work

const express = require('express');

// import cors from 'cors';
const cors = require('cors');

const app = express();

//What cors does is it secures our application on a domain level. The idea is it shouldn't be possible to access data from other domains.
//we do this at an application-level so we don't have to do it ourselves for every route.
app.use(cors());

app.get('/heroes', )

app.get('/', (req,res)=>{

})

app.listen(3000, ()=>{
    console.log('App listening on port 3000.'
    )
})

console.log('hello I am stressed');

console.log(process.env.MY_SECRET)