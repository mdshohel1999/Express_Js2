const express = require('express');
const app = express();

// get method 

app.get('/', (req, res)=>{
    res.send('This is home page');
});


app.listen(3000, ()=>{
    console.log('Server is running at 3000 port');
});
