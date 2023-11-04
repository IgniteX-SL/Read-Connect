const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT=process.env.PORT || 8070;
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true, //access-control-allow-credentials:true
  };
  
app.use(cors(corsOptions));
app.use(bodyParser.json());

const URL=process.env.MONGODB_URL;
mongoose.connect(URL,{
    //useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    //useFindAndModify:false
});
const connection=mongoose.connection;
connection.once("open",()=>{
    console.log("MongoDB Connection Success!");
})

const bookBorrowalRouter=require("./routes/bookBorrowalRoutes.js");
app.use("/bookBorrowal",bookBorrowalRouter);
const bookRoutes=require("./routes/bookRoutes.js");
app.use("/book",bookRoutes);

const userRoutes=require("./routes/user.js");
app.use("/user",userRoutes);


app.listen(PORT,()=>{
    console.log(`Server is up and running on port: ${PORT}`);
})