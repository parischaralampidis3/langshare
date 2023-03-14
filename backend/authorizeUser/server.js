const config = require("config");
const express = require ("express");
const connectDB = require( "./config/db" );
const cors = require('cors');
const app = express();

connectDB();

//init middleware 

app.use(express.json({extended:false}));

app.get("/",( req, res )=>
    res.json({msg:"Welcome to the the Auth API"})
)



app.use(cors()) // Use this after the variable declaration



//Define routes

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/password-reset', require ('./routes/passwordReset'));

//register route
/*app.get("/register",(req,res)=>{
    res.send("register route is listening")
})

//login route

/*app.get("/login",(req,res)=>{
    res.send("login route is listening")
})*/



const PORT = process.env.PORT||5000;




app.listen (PORT,console.log(`Server is listening on ${PORT}`));