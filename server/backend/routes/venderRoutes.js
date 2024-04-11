const express = require('express');
const venderController = require('../controllers/venderController');
const router = express.Router();


router.post('/',venderController.createVender);

router.get('/:id',venderController.getVenderById)

router.put('/:id',venderController.updateVenderById);

router.delete('/:id',venderController.deleteVender);



module.exports = router;