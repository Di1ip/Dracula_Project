const Book = require('./bookModel')


exports.addBook = (req,res)=>
{
    Book.findOne({bookName:req.body.bookName})
    .then(async data=>
        {
            if(data!=null)
                {                
                    res.json
                        ({
                            "message":"Book Name Already Exit",
                            "status":400,
                            "success":false,
                            "data":data
                        })
                }
            else
                {
                    let total = await Book.countDocuments();
                    let deptObj = new Book()
                    deptObj.bookName = req.body.bookName
                    deptObj.bookAuther = req.body.bookAuther
                    deptObj.bookId = total+1
                    deptObj.categoryType = req.body.categoryType
                    let image = "Books/default.jpg";
                    if(req.file!=undefined && req.file.filename!=undefined)
                        {
                            image = "Books/"+req.file.filename 
                        }
                        deptObj.bookImage = image
                        // deptObj.createdBy = req.decoded._id
                        deptObj.save()
                        .then(inso=>
                            {
                                res.json
                                    ({
                                        "message":"Book Added",
                                        "status":200,
                                        "success":true,
                                        "data":inso,
                                        "data2":deptObj
                                    })
                            })
                        .catch(err=>
                            {
                                res.json
                                    ({
                                        "message":"Error in Add Book",
                                        "status":500,
                                        "success":false,
                                        "error":String(err)
                                    })
                            })
                }
        })
}


exports.showBook = (req,res)=>
{
    Book.find()
		.select('bookName bookAuther booktype categoryType createdAt')
		// .populate('TeacherId')
//		.populate('teacehrId','phone,salary,subject')
		.then(data=>
				{
					if(data!=null)
						{
							res.json
								(
									{
										"msg":"all Books",
										"status":200,
										"success":true,
										"data":data
									}
								)
						}
					else
						{
							res.json
								(
									{
										"msg":"No user exist!",
										"status":500,
										"success":false,
										"data":data
									}
								)
						}
				}
			)
		.catch(err=>
				{
					res.json
						(
							{
								"msg":"Error in all User!",
								"status":404,
								"success":false,
								"err":String(err)
							}
						)
				}
			)
}

exports.searchbookById = (req,res)=>
{
    res.json
        ({
            "msg":"Search by Id books!",
            "status":200,
            "success":true
        })
}

exports.searchbookByName =(req,res)=>
{
    res.json
        ({
            "msg":"Search by Name books!",
            "status":200,
            "success":true
        })
}

exports.searchbookByAuther = (req,res)=>
{
    res.json
        ({
            "msg":"Search By Auther books!",
            "status":200,
            "success":true
        })
}

exports.deleteBook = (req,res)=>
{
    res.json
        ({
            "msg":"Delete books!",
            "status":200,
            "success":true
        })
}

exports.updateBook = (req,res)=>
{
    res.json
        ({
            "msg":"updated books!",
            "status":200,
            "success":true
        })
}

exports.showbookLogs = (req,res)=>
{
    res.json
        ({
            "msg":"Show Logs books!",
            "status":200,
            "success":true
        })
}