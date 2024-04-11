const express = require('express');
const hotelController = require('../controllers/hotelController')

const router = express.Router();


router.post('/', hotelController.createHotel);

// Read all hotels

router.get('/',hotelController.readAllhotels);

// Get hotel by ID
router.get("/:id", hotelController.getHotelByid);

// Update hotel
router.put('/:id', hotelController.updateHotel);

// Delete hotel
router.delete('/:id', hotelController.deleteHotel);

module.exports = router;





module.exports = router;