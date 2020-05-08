const express=require('express');
var router=express.Router();
const Rental=require('../models/rental')



router.get('',(req,res)=>{
	Rental.find({},(err,foundrental)=>{
	res.send(foundrental)
	})
})
router.get('/:id',(req,res)=>{
	const rentalid=req.params.id
	console.log("zfdsf",rentalid)
	Rental.findById(rentalid, function (err, foundrental) {
		if(err){
			res.status(422).send("erroe ACCOURS")
		}else{
			res.send(foundrental)
		}

	})
})

module.exports=router;