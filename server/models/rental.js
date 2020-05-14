const mongoose=require("mongoose");
const Schema=mongoose.Schema;


const rentalschema = new Schema({
	title:{type:String,required:true,max:[5,"maxmum char allowed"]},
	city:{type:String,required:true,lowercase:true},
	street:{type:String,required:true,min:[5,"min char allowed"]},
	category:{type:String,required:true},
	bedrooms:Number,
	shared:Boolean,
	description:{type:String,required:true},
	dailyRate:Number,
	createdAt:{type:Date,default:Date.now()},
	image:{type:String}
})



module.exports=mongoose.model("rental",rentalschema)
