const express=require("express");
const bodyParser = require("body-parser");
const UserRouter = require("./routes/userRoutes");
const RoomRouter = require("./routes/roomRoutes");
const HotelRouter = require("./routes/hotelRoutes");
const LocationRouter = require("./routes/locationRoutes");
const RoomCategoryRouter =require("./routes/RoomCategoryRoutes");
const ServiceRouter = require("./routes/serviceRoutes");
const VenderRouter = require("./routes/venderRoutes")

const app=express();
const PORT= process.env.PORT||8000;
app.use(bodyParser.json());


app.use('/user',UserRouter);

// room routing
app.use('/room',RoomRouter);

// hotel routing

app.use('/hotel',HotelRouter);

// location routing

app.use('/location',LocationRouter);

// room category routing

app.use('/roomCategory',RoomCategoryRouter);

// service routing

app.use('/service',ServiceRouter);

// vender routing

app.use('/vender',VenderRouter)








app.listen(PORT,()=>{
    console.log(`server is running on${PORT}`)
})
console.log("hello");