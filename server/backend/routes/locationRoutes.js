const express = require('express');
const locationController = require('../controllers/locationController');
const router = express.Router();


router.post('/', locationController.createLocation);

// Get location by ID
router.get('/:id', locationController.getLocationById);

router.get('/', locationController.getAllLocation);

// Update location
router.put('/:id', locationController.updateLocation);

// Delete location
router.delete('/:id', locationController.deleteLocation);



module.exports = router;
