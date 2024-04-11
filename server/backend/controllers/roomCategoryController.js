const roomCategoryDetails = require('../models/RoomCategory');

const roomCategoryController = {
    createRoomCategory: async (req, res) => {
        try {
            const { hotel_id, categoryName } = req.body;
            const newRoomCategory = await roomCategoryDetails.createRoomCategory({ hotel_id, categoryName });
            res.status(201).json({ status: "1", data: newRoomCategory });
        } catch (error) {
            console.error('Error creating room category:', error);
            res.status(500).json({ status: "0", error: "Failed to create room category" });
        }
    },

    getRoomCategoryById: async (req, res) => {
        try {
            const roomCategoryid= req.params.id;
            const roomCategoryInfo = await roomCategoryDetails.getRoomCategoryById(roomCategoryid);
            if (roomCategoryInfo) {
                res.status(200).json({ "status": "1", "data": roomCategoryInfo });
            } else {
                res.status(404).json({ "status": "0", "error": "Room category not found" });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ "status": "0", "error": error });
        }
    },

    updateRoomCategory: async (req, res) => {
        try {
            const categoryId = req.params.id;
            const data = req.body;
            const updatedRoomCategory = await roomCategoryDetails.updateRoomCategory(categoryId, data);
            res.status(200).json({ "status": "1", "data": updatedRoomCategory });
        } catch (error) {
            console.error(error);
            res.status(500).json({ "status": "0", "error": error });
        }
    },

    deleteRoomCategory: async (req, res) => {
        try {
            const roomCategoryid = req.params.id;
            await roomCategoryDetails.deleteRoomCategory(roomCategoryid);
            res.status(200).json({ "status": "1", "message": "Room category deleted successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ "status": "0", "error": error });
        }
    }
};

module.exports = roomCategoryController;
