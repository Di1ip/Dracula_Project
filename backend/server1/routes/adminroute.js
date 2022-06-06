const router = require('express').Router()


const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage
({
    destination: function (req, file, cb)
        {
            cb(null, 'public/Books')
        },
    filename: function (req, file, cb)
    {
      let extension = path.extname(file.originalname)
      const newname = req.body.departmentName + '-' + Date.now()+extension;
      cb(null,newname )
    }
})

const upload = multer({ storage: storage })

// User Controller Start!
const userController = require('../APIs/users/userController')

router.post('/login',userController.login)
// Middelware
router.use(require('../common/adminmiddleware'))
router.post('/addUser',userController.addUser)
router.get('/userDetails',userController.userDetails)
// UserController Ends!

// Category Controller Strat!
const categoryController = require('../APIs/category/categoryController')

router.post('/addCategory',categoryController.addCategory)
router.post('/showCategory',categoryController.showCategory)
router.post('/searchcategoryById',categoryController.searchcategoryById)
router.post('/searchcategoryByName',categoryController.searchcategoryByName)
router.post('/updateCategory',categoryController.updateCategory)
router.post('/deleteCategory',categoryController.deleteCategory)
router.post('/showcategoryLogs',categoryController.showcategoryLogs)
// Category Controller Ends!

// Book Controller Start!
const bookController = require('../APIs/books/bookController')

router.post('/addBook',upload.single('bookImage'),bookController.addBook)
router.get('/showBook',bookController.showBook)
router.post('/searchbookById',bookController.searchbookById)
router.post('/searchbookByName',bookController.searchbookByName)
router.post('/searchbookByAuther',bookController.searchbookByAuther)
router.post('/updateBook',bookController.updateBook)
router.post('/deleteBook',bookController.deleteBook)
router.post('/showbookLogs',bookController.showbookLogs)
// Book Controller Ends!




module.exports=router