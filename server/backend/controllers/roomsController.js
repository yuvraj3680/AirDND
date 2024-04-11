const roomDetails= require("../models/rooms");


const roomController = {

     createRoom : async (req,res,next)=>{
        try {
         const {hotel_id, category_id, pricePerDay, services} = req.body;
         const newUser= await roomDetails.createRoom({hotel_id, category_id, pricePerDay, services});
          res.status(201).send({"status":"1","data": newUser})
         
        } catch (error) {
         console.error(error);
         res.status(500).send({"status":"0","error":error});
        }
     },

     getroomById: async(req,res,next)=>{
      try {
         const roomId =req.params.id;
         const roomInfo = await roomDetails.getroomById(roomId);
         if (roomInfo)
         {
            return res.status(200).send({ "status":"1","data":roomInfo});
         }
         res.status(404).send({"status":"404","message":"Room not found"})

      } catch (error) {
         console.log(error);
         res.status(404).send({"status":"404","error":error})
      }
     },

     updateRoom: async(req,res,next)=>{
      try {
        const roomId = req.params.id;
        const data = req.body;
        const roomInfo = await roomDetails.updateRoom(roomId,data);
        if (roomInfo)
        {
         return res.status(200).send({"status":"1","data":roomInfo})
        }
        res.status(404).send({"status":"0","data":"Room not updated"})
      } catch (error) {
         console.log(error);
         res.status(404).send({"status":"0","data":error});
      }
     },

     deleteRoomById: async (req,res,next)=>{
     try {
      const roomId = req.params.id;
      const roomInfo = await roomDetails.deleteRoomById(roomId);
      if(roomInfo)
      {
         return res.status(200).send({"status":"1","message":"Room deleted sucssesfully"});
      }
      res.status(404).send({"status":"0","error":"Room Not found"})
     } catch (error) {
      console.log(error);
      res.status(404).send({"status":"0","error":error});
     }
     }


}





module.exports=roomController;