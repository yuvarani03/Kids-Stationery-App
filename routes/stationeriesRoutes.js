const express = require("express");
const router = express.Router();
const Stationery = require("../models/stationeryModel");

router.get("/getallstationeries", async (req, res) => {
  try {
    const stationeries = await Stationery.find({});
    res.send(stationeries);
  } catch (err) {
    return res.status(400).json({ message: err });
  }
});

router.post("/addstationery", async (req, res) => {
  try {
    const stationery = req.body.stationery;
    const newstationery = new Stationery({
      name: stationery.name,
      price: stationery.price,
      category: stationery.category,
      image: stationery.image,
      description: stationery.description,
    });
    await newstationery.save();
    res.send("New Stationery Added Successfully");
  } catch (err) {
    return res.status(400).json({ message: err });
  }
});

router.post("/getstationerybyid", async (req, res) => {
  const stationeryid = req.body.stationeryid;
  try {
    const stationery = await Stationery.findOne({ _id: stationeryid });
    res.send(stationery);
  } catch (err) {
    return res.status(400).json({ message: err });
  }
});

router.post("/updatestationery", async (req, res) => {
  const updatedstationery = req.body.updatedstationery;
  try {
    const stationery = await Stationery.findOne({ _id: updatedstationery._id });
    (stationery.name = updatedstationery.name),
      (stationery.description = updatedstationery.description),
      (stationery.image = updatedstationery.image),
      (stationery.category = updatedstationery.category),
      (stationery.price = updatedstationery.price);
    await stationery.save();
    res.send("Stationery Details Updated Successfully");
  } catch (err) {
    return res.status(400).json({ message: err });
  }
});

router.post("/deletestationery", async(req,res)=>{
  const stationeryid = req.body.stationeryid
  try{
    await Stationery.findOneAndDelete({_id : stationeryid})
    res.send('Stationery Deleted Successfully')
  } catch (err){
    return res.status(400).json({message : err});
  }
})

module.exports = router;
