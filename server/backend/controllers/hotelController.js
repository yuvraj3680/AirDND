const hotelDetails = require('../models/hotel');

const hotelController = {
    createHotel: async (req, res) => {
        try {
            const { locationId, name, address, checkIn, checkOut, vender_id } = req.body;
            const newHotel = await hotelDetails.createHotel({ locationId, name, address, checkIn, checkOut, vender_id });
            res.status(201).send({ "status": "1", "data": newHotel });
        } catch (error) {
            console.error(error);
            res.status(500).send({ "status": "0", "error": error });
        }
    },

    readAllhotels:async(req,res,next)=>{
        try {
            const hotelList = await hotelDetails.readAllhotels();
            res.status(200).send({"status":"ok","Message":"get all hotels sucssesfully"})
        } catch (error) {
            console.log(error);
            res.status(404).send({"status":"0","error":error});
        }
    },

   

    getHotelByid: async (req, res) => {
        try {
            const hotelid= req.params.id; 
            const hotelInfo = await hotelDetails.getHotelByid(hotelid);
            if (hotelInfo) {
                return res.status(200).send({ "status": "1", "data": hotelInfo });
            }
        } catch (error) {
            console.log(error);
            res.status(500).send({ "status": "0", "error": error });
        }
    
    },

     updateHotel: async (req, res) => {
        try {
            const hotelid = parseInt(req.params.id);
            const updateData = req.body;
            const updatedHotel = await hotelDetails.updateHotel(hotelid, updateData);
            res.status(200).json({ status: "success", data: updatedHotel });
            
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: "error", message: error.message });
        }
    },
    

    deleteHotel: async (req, res) => {
        try {
            const hotelid = req.params.id;
            
            await hotelDetails.deleteHotel(hotelid);
            res.status(200).send({ "status": "1", "message": "Hotel deleted successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).send({ "status": "0", "error": error.message });
        }
    }
};

module.exports = hotelController;
