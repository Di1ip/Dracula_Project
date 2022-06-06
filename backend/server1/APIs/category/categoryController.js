const Category = require('./categoryModel')


exports.addCategory=(req,res)=>
    {
        if( req.body.categoryName == undefined || req.body.categoryType == undefined)
            {
                res.json
                    (
                        {
                            "msg":"Fill the Form!",
                            "status":400,
                            "success":false,
                            "err":String(err)
                        }
                    )
            }
        else
            {
                Category.findOne({"categoryName":req.body.categoryName})
                .then(async data=>
                        {
                            // console.log(data);
                            if(data!=null)
                                {
                                    res.json
                                        (
                                            {
                                                "msg":"Category name already exist!",
                                                "status":400,
                                                "success":false
                                                
                                            }
                                        )
                                }
                            else
                                {
                                    let total = await Category.countDocuments();

                                    let instObj = new Category();
                                    instObj.categoryId = total+1;
                                    instObj.categoryName = req.body.categoryName,
                                    instObj.categoryType = req.body.categoryType,
                                    // console.log("Id in Decoded",req.decoded);
                                    // instObj.createdBy = req.decoded._id,
                                    instObj.save()
                                    .then(ins=>
                                            {
                                                res.json
                                                    (
                                                        {
                                                            "msg":"Category Added!",
                                                            "status":200,
                                                            "success":true,
                                                            "data":ins
                                                        }
                                                    )
                                            }
                                        )
                                    .catch(err=>
                                            {
                                                res.json
                                                    (
                                                        {
                                                            "msg":"Error in adding Category!",
                                                            "status":500,
                                                            "success":false,
                                                            "err":String(err)
                                                        }
                                                    )
                                            }
                                        )
                                }
                        }
                    )
            }
    }

exports.showCategory = (req,res)=>
{
    res.json
        ({
            "msg":"All Category!",
            "status":200,
            "success":true
        })
}

exports.searchcategoryById = (req,res)=>
{
    res.json
        ({
            "msg":"Search by Id Category!",
            "status":200,
            "success":true
        })
}

exports.searchcategoryByName =(req,res)=>
{
    res.json
        ({
            "msg":"Search by Name Category!",
            "status":200,
            "success":true
        })
}

exports.deleteCategory = (req,res)=>
{
    res.json
        ({
            "msg":"Delete Category!",
            "status":200,
            "success":true
        })
}

exports.updateCategory = (req,res)=>
{
    res.json
        ({
            "msg":"updated Category!",
            "status":200,
            "success":true
        })
}

exports.showcategoryLogs = (req,res)=>
{
    res.json
        ({
            "msg":"Show Logs Category!",
            "status":200,
            "success":true
        })
}