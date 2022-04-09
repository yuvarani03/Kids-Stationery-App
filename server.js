const express = require("express");
const Stationery = require("./models/stationeryModel");
const app = express();
const database = require("./database.js");
const path = require("path");
app.use(express.json());
const stationeriesRoutes = require("./routes/stationeriesRoutes");
const userRoute = require("./routes/userRoute");
const orderRoute = require("./routes/orderRoute");
app.use("/api/stationeries/", stationeriesRoutes);
app.use("/api/users/", userRoute);
app.use("/api/orders/", orderRoute);
// app.get("/", (req,res)=>{
//     res.send("Server Connected");
// });

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

const port = process.env.PORT || 4000;
app.listen(port, () => `Server running on port 4000`);
