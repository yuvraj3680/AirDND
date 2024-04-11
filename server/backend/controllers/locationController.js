const locationDetails = require('../models/location');

const locationController = {
    createLocation: async (req, res, next) => {
        try {
            const { name, city, country } = req.body;
            const newLocation = await locationDetails.createLocation({ name, city, country });
            res.status(201).send({ "status": "1", "data": newLocation });
        } catch (error) {
            console.error(error);
            res.status(500).send({ "status": "0", "error": error });
        }
    },

    getLocationById: async (req, res) => {
        try {
            const location_id = req.params.id;
            const locationInfo = await locationDetails.getLocationById(location_id);
            if (locationInfo) {
                return res.status(200).send({ "status": "1", "data": locationInfo });
            }
            res.status(404).send({ "status": "0", "error": "Location not found" });
        } catch (error) {
            console.error(error);
            res.status(500).send({ "status": "0", "error": error });
        }
    },

    getAllLocation: async (req,res,next)=>{
        try {
            const locationList = await locationDetails.getAllLocation();
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

    updateLocation: async (req, res) => {
        try {
            const location_id = req.params.id;
            const data = req.body;
            const updatedLocation = await locationDetails.updateLocation(location_id, data);
            if (updatedLocation) {
                return res.status(200).send({ "status": "1", "data": updatedLocation });
            }
            res.status(404).send({ "status": "0", "error": "Location not updated" });
        } catch (error) {
            console.error(error);
            res.status(500).send({ "status": "0", "error": error });
        }
    },

    deleteLocation: async (req, res) => {
        try {
            const location_id = req.params.id;
            const deletedLocation = await locationDetails.deleteLocation(location_id);
            if (deletedLocation) {
                return res.status(200).send({ "status": "1", "message": "Location deleted successfully" });
            }
            res.status(404).send({ "status": "0", "error": "Location not found" });
        } catch (error) {
            console.error(error);
            res.status(500).send({ "status": "0", "error": error });
        }
    }
};

module.exports = locationController;
