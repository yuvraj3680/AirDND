const UserDetails = require("../models/user");



const userController = { 
    createUser: async (req,res,next)=>{
       try {
        const {username,mobile,email,password} = req.body;
        
        const newUser= await UserDetails.createUser({username,mobile,email,password});
         res.status(201).send({"status":"1","data": newUser})
        // next(custRes(201,newUser))
       } catch (error) {
        console.error(error);
        res.status(500).send({"status":"0","error":error});
       }
    },

    

    readUserByEmail: async (req, res, next) => {
        try {
            const user_email = req.params.email;
            const userInfo = await UserDetails.readUserByEmail(user_email);
            if (userInfo) {
                return res.status(200).send({"status": "1", "data": userInfo});
            }
            res.status(404).send({"status": "0", "error": "user not found"});
        } catch (error) {
            console.error(error);
            res.status(500).send({"status": "0", "error": "Internal Server Error"});
        }
    },



    getAllUser: async (req,res,next)=>{
        try {
            const locationList = await UserDetails.getAllUser();
            if(locationList)
            {
                return res.status(200).send({ "status": "1", "data": locationList });
            }
            res.status(404).send({"status":"0","message":" location not found"});
        } catch (error) {
            console.log(error);
            res.status(500).send({"status":"0","error":error});
        }
    },



    loginUser: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await UserDetails.readUserByEmail (email);
            if (!user) {
                return res.status(404).send({ "status": "0", "error": "User not found" });
            }
            if (user.password !== password) {
                return res.status(401).send({ "status": "0", "error": "Incorrect password" });
            }
            
            res.status(200).send({ "status": "1", "data": user });
        } catch (error) {
            console.error(error);
            res.status(500).send({ "status": "0", "error": error });
        }
    }
};














module.exports=userController;