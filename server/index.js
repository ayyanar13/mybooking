const express=require("express");
const mongoose=require('mongoose');
var app=express();
const Rental=require("./models/rental")
const FakeDb=require('./fake-db')
const rentalroutes=require('./routes/rentals')

var db_url="mongodb://localhost:27017/mybooking";



mongoose.connect(db_url).then(()=>{
	const fakeDb=new FakeDb();
	fakeDb.seedDb();
})
app.use('/api/v1/rentals',rentalroutes)

mongoose.connection.on('error', function (error) { console.error('Error in MongoDB Connection: ' + error); });
mongoose.connection.on('reconnected', function () { console.log('MongoDB Reconnected !'); });
mongoose.connection.on('disconnected', function () { console.log('MongoDB Disconnected !'); });
mongoose.connection.on('connected', function () {
    console.log("Mongo connected");
    })



app.get("/rentals",(req,res)=>{
	res.json("message")
})

const PORT=process.env.port||3001

app.listen(PORT,()=>{
	console.log("server running on port",PORT)
})