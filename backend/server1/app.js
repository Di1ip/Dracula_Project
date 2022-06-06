const express = require('express')
const app = express()

var cors = require('cors')
app.use(cors())

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/backendtry1')
.then(con=>
	{
		console.log("db Connected")
	})
.catch(err=>
	{
		console.log("Error!, Not connected",err)
	})

// fetch data from body in postman
app.use(express.urlencoded({extended:false}));

//insert seed data 
const seed = require('./config/seed')
seed.insertUser()

// Admin Routes
const adminroute = require('./routes/adminroute')
app.use('/admin',adminroute)

// Book Routes
const bookroute = require('./routes/bookroute')
app.use('/books',bookroute)

// Category Routes
const categoryroute = require('./routes/categoryroute')
app.use('/cat',categoryroute)

// User Routes
const userroute = require('./routes/userroute')
app.use('/users',userroute)

// Server run on 3000 port
app.listen(3000,function(req,res)
	{
		console.log('Server run at 3000 port')
	})