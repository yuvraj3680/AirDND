const serviceDetails = require('../models/service')


const serviceController = {
    createService : async (req,res,next)=>{
        try {
         const {name, description, room_id} = req.body;
         const newUser= await serviceDetails.createRoom({name, description, room_id});
          res.status(201).send({"status":"1","data": newUser})
         
        } catch (error) {
         console.error(error);
         res.status(500).send({"status":"0","error":error});
        }
     },

     getServiceById: async(req,res,next)=>{
      try {
        const serviceId =  req.params.id;
        const serviceInfo = await serviceDetails.getServiceById(serviceId);
      if(serviceInfo)
      {
        return res.status(200).send({"status":"0","data":serviceInfo});
      }
      res.status(404).send({"status":"0","data":"not found id"})
     }
       catch (error) {
        console.log(error);
        res.status(404).send({"status":"0","data":error});
      }

    },

    updateService: async(req,res,next)=>{
      try {
        
        const serviceId =  req.params.id;
        const data=req.body;
        const serviceInfo = await serviceDetails.updateService(serviceId,data);
        if(serviceInfo)
        {
          return res.status(200).send({"satatus":"0","data":serviceInfo});
        }
        res.status(404).send({"status":"0","data":" in not found"})
      } catch (error) {
        console.log(error);
        res.status(404).send({"status":"0","data":error});
      }
    },

    deleteService: async(req,res,next)=>{
      try {
          const serviceId = req.params.id;
          const serviceInfo = await serviceDetails.deleteService(serviceId);
          if(serviceInfo)
          {
            res.status(200).send({"status":"1","message": "services is deleted successfully"});
          }
          res.status(404).send({"status":"0","message": "error"})
      } catch (error) {
        console.log(error);
        res.status(404).send({"status":"0","error":error});
      }
    }
  
  }

module.exports = serviceController;