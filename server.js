const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');

const connectDB = require('./server/database/connection');

const app = express();
app.use(cors({
  origin:["htpps://deploy-mern-1whq.vercel.app"],
  method:["POST","GET"],
  credentials:true
}
             });

// log requests
app.use(morgan('tiny'));

// mongodb connection
mongoose.connect('mongodb+srv://admin:admin123@cluster0.gx0g6r4.mongodb.net/?retryWrites=true&w=majority')

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))

// set view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// load routers
app.use('/', require('./server/routes/router'))

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});
