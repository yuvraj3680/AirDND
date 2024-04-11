const venderDetails = require('../models/vender')

const venderController ={
    createVender: async (req,res,next)=>{
        try {
            const {name, email, location_id} = req.body;
            const newUser= await venderDetails.createVender({name, email, location_id});
             res.status(201).send({"status":"1","data": newUser})
            
           } catch (error) {
            console.error(error);
            res.status(500).send({"status":"0","error":error});
           }
    },

    getVenderById: async(req,res,next)=>{
        try {
            const venderId = req.params.id;
            const venderInfo = await venderDetails.getVenderById(venderId);
            if(venderInfo){
                return res.status(200).send({"status":"0","data":venderInfo});
            }
            res.status(404).send({"status":"0","data":"venderId Not Found"})
        } catch (error) {
            console.log(error);
            res.status(404).send({"status":"0","error":error});
            
        }
    },

    updateVenderById: async (req,res,next)=>{
        try {
            const venderId = req.params.id;
        const data=req.body
        const venderInfo = await venderDetails.updateVenderById(venderId,data);
        if(venderInfo)
        {
            return res.status(200).send({"status":"0","data":venderInfo});
        }
        res.status(404).send({"status":"0","error":"error updating vender"})
        } catch (error) {
            console.log(error);
            res.status(404).send({"status":"0","error":error});
        }
    
    },

    deleteVender: async (req,res,next)=>{
        try {
            const venderId = req.params.id;
            const venderInfo = await venderDetails.deleteVender(venderId);
            if(venderInfo)
            {
                res.status(200).send({"status":"1","message":"vender deleted successfully"});
            }
            res.status(400).send({"status":"0","error":" could not delete vender"})
        } catch (error) {
            console.log(error);
            res.status(404).send({"status":"0","error":error});
        }
    }
}




module.exports = venderController;