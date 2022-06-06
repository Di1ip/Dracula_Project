const router = require('express').Router()

const userController = require('../APIs/users/userController')

router.post('/login',userController.login)
router.post('/addUser',userController.addUser)
router.post('/userDetails',userController.userDetails)

module.exports=router