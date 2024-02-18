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
const bookDamageRoutes=require("./routes/bookDamageRoutes.js");
app.use("/bookDamage",bookDamageRoutes);
const bookDonationRoutes=require("./routes/bookDonationRoutes.js");
app.use("/bookDonation",bookDonationRoutes);
const bookRemovalRoutes=require("./routes/bookRemovalRoutes.js");
app.use("/bookRemoval",bookRemovalRoutes);
const bookReservationRoutes=require("./routes/bookReservationRoutes.js");
app.use("/bookReservation",bookReservationRoutes);
const bookReturnRoutes=require("./routes/bookReturnRoutes.js");
app.use("/bookReturn",bookReturnRoutes);
const ebookRoutes=require("./routes/eBookRoutes.js");
app.use("/eBook",ebookRoutes);
// const governmentGrantsRoutes=require("./routes/governmentGrantsRoutes.js");
// app.use("/governmentGrants",governmentGrantsRoutes);
const librarianRoutes=require("./routes/librarianRoutes.js");
app.use("/librarian",librarianRoutes);
const memberRoutes=require("./routes/memberRoutes.js");
app.use("/member",memberRoutes);
const libraryStaffRoutes=require("./routes/libraryStaffRoutes.js");
app.use("/libraryStaff",libraryStaffRoutes);
const noteRoutes=require("./routes/noteRoutes.js");
app.use("/note",noteRoutes);
const payFineRoutes=require("./routes/payFineRoutes.js");
app.use("/payFine",payFineRoutes);
const profileRoutes=require("./routes/profileRoutes.js");
app.use("/profile",profileRoutes);
const purchaiseAddRoutes=require("./routes/purchaiseAddRoutes.js");
app.use("/purchaiseAdd",purchaiseAddRoutes);


const userRoutes=require("./routes/user.js");
app.use("/user",userRoutes);


app.listen(PORT,()=>{
    console.log(`Server is up and running on port: ${PORT}`);
})