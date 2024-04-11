const express = require("express");
const roomController = require("../controllers/roomsController");
const router=express.Router();


 router.post("/",roomController.createRoom );

 router.get('/:id',roomController.getroomById);

 router.put('/:id',roomController.updateRoom);

 router.delete('/:id',roomController.deleteRoomById);











module.exports=router;