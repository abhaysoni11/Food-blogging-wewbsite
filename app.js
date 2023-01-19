<<<<<<< HEAD
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

app.use(express.urlencoded( { extended: true } ));
app.use(express.static('public'));
app.use(expressLayouts);

app.use(cookieParser('CookingBlogSecure'));
app.use(session({
  secret: 'CookingBlogSecretSession',
  saveUninitialized: true,
  resave: true
}));
app.use(flash());
app.use(fileUpload());

app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

const routes = require('./server/routes/recipeRoutes.js')
app.use('/', routes);

app.listen(port, ()=> console.log(`Listening to port ${port}`));
=======
const express =require('express');
const bodyParser=require('body-parser');
const path=require('path');
const expressLayouts = require('express-ejs-layouts');
const routes=require('./server/routes/recipeRoutes.js')

const app=express();
const port=process.env.PORT || 3000;

require('dotenv').config();

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(expressLayouts);

app.set('layout','./layouts/main');
app.set('view engine', 'ejs');




app.use('/', routes);

app.listen(port,()=> console.log(`Listening to port ${port}`));
>>>>>>> 40382d3b0b471bff4769d59b78ba05eaee0535c2
