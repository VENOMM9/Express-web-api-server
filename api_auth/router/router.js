const express = require('express')
const router = express.Router()
const controller = require('../controller/controller')
const middlewear = require('../middlewear/middlewear')
const access = require('../access/access')

router.use(express.json())

// router.use(middlewear.basicAuth)


router.get('/',access.accessRoles('users'), controller.getAllItems)
router.get('/:id', controller.getOneItem)
router.post('/', access.accessRoles('admin'), controller.createOneItem)
router.put('/:id',access.accessRoles('admin'), controller.updateItem)
router.delete('/:id',access.accessRoles('admin'), controller.deleteItems)
router.post('/students', controller.createStudent)

    

        
module.exports = router