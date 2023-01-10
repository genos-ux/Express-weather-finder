const express = require('express');

const app = express();
const router = require('./routes');

app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(express.static('public'));
app.set("views","views");
app.set("view engine","hbs");

app.use('/',router);

app.listen(5000,()=>{
    console.log('Server is listening on port 5000');
})