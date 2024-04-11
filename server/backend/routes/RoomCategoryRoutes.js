const express = require('express');

const roomCategoryController = require('../controllers/roomCategoryController')
const router = express.Router();

router.post('/', roomCategoryController.createRoomCategory);

// Get room category by ID
router.get('/:id', roomCategoryController.getRoomCategoryById);

// Update room category
router.put('/:id', roomCategoryController.updateRoomCategory);

// Delete room category
router.delete('/:id', roomCategoryController.deleteRoomCategory);

module.exports = router;




module.exports =router;
