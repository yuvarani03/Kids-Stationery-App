//registration
const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
router.post("/registration", async (req, res) => {
  const { fname, lname, email, password } = req.body;
  const newUser = new User({ fname, lname, email, password });

  try {
    newUser.save();
    res.send("User Registered Successfully");
  } catch (err) {
    return res.status(400).json({ message: err });
  }
});

//login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.find({ email, password });
    if (user.length > 0) {
      const currentUser = {
        fname: user[0].fname,
        lname: user[0].lname,
        email: user[0].email,
        isAdmin: user[0].isAdmin,
        _id: user[0]._id,
      };
      res.send(currentUser);
    } else {
      return res.status(400).json({ message: "User Login Failed" });
    }
  } catch (error) {
    return res.status(400).json({ message: "Something went weong" });
  }
});

router.get("/getallusers", async(req, res) => {

  try {
      const users = await User.find({})
      res.send(users)
  } catch (error) {
      return res.status(400).json({ message: error });
  }

});

router.post("/deleteuser", async(req, res) => {

  const userid = req.body.userid

  try {
      await User.findOneAndDelete({_id : userid})
      res.send('User Deleted Successfully')
  } catch (error) {
      return res.status(400).json({ message: error });
  }

});
module.exports = router;
