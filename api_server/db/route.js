const express = require('express')
const router = express.Router()
const controller = require('./controller')


router.use(express.json())


router.get('/', controller.getAllItems)
router.get('/:id', controller.getOneItem)
router.post('/', controller.createOneItem)
router.put('/:id', controller.updateItem)
router.delete('/:id', controller.deleteItems)
    

        
module.exports = router