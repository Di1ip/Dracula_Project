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

const bookController = require('../APIs/books/bookController')

// router.post('/add',bookController.add)
router.post('/addBook',upload.single('bookImage'),bookController.addBook)
router.post('/showBook',bookController.showBook)
router.post('/searchbookById',bookController.searchbookById)
router.post('/searchbookByName',bookController.searchbookByName)
router.post('/searchbookByAuther',bookController.searchbookByAuther)
router.post('/updateBook',bookController.updateBook)
router.post('/deletBook',bookController.deleteBook)
router.post('/showbookLogs',bookController.showbookLogs)


module.exports=router