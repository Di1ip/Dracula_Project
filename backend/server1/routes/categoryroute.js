const router = require('express').Router()

const categoryController = require('../APIs/category/categoryController')

router.post('/addCategory',categoryController.addCategory)
router.post('/showCategory',categoryController.showCategory)
router.post('/searchcategoryById',categoryController.searchcategoryById)
router.post('/searchcategoryByName',categoryController.searchcategoryByName)
router.post('/updateCategory',categoryController.updateCategory)
router.post('/deleteCategory',categoryController.deleteCategory)
router.post('/showcategoryLogs',categoryController.showcategoryLogs)

module.exports=router