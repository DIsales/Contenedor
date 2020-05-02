const express =require('express');
const morgan = require('morgan');
const exphbs=require('express-handlebars'); 
const path=require('path');



//initializations
const app = express();

//settings
app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname,'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'list',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    extname: '.hbs'
    
}));
app.set('view engine', '.hbs'); 

//midddlewares

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); 
app.use(express.json());

//Global Variables
 

//Routes


app.use(require('./routes/COVID'));

//Public


//Starting the server
app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
});