const Subcategory = require('./subcategoryModel')

exports.addsubcategory=(req,res)=>{
    if(req==undefined||req.body==undefined||req.body.subcategoryname==undefined)
    {
        res.json({
            "meassage":"Fill the form",
            "status":200,
            "success":false
        })
   
    }
 else{
     Subcategory.findOne({subcategoryName:req.body.subcategoryName,})
     .then(async data=>{
         if(data!=null){
             res.json({
                 "message":"addsubcategory Name exist",
                 "status":400,
                 "success":false
             })
         }
         else{
            let total= await Subcategory.countDocuments().exec();
                    let cateObj=new Subcategory();
                    cateObj.categoryId=req.body.categoryId
                    cateObj.subcategoryName=req.body.subcategoryName
                    cateObj.subcategoryId=total+1
                    cateObj.createdBy=req.decode._id
                    
                    let image="subcatergory/default.jpg";
                    if(req.file!=undefined&&req.file.filename!=undefined){
                        image="subcategory"+req.file.filename
                    }
                    cateObj.subcategoryImage=image
                    cateObj.save()
                    .then(cObj=>{
                        res.json({
                         "message":" subcategory added",
                         "status":200,
                        "success":true,
                        "category":cObj
                                })
                        
                    })
    
.catch(err=>{
    res.json({
        "message":"error while adding subcategory",
            "status":500,
            "success":false,
            "error":String(err)
        
    })
})
         }
        })
    }
}
exports.updatesubcategory=(req,res)=>{
    Subcategory.findOne({"_id":req.body._id})
        
        .then(data=>{
            if(data!=null){
                data.subcategoryName=req.body.subcategoryName
                data.price=req.body.price
                data.author=req.body.author
                
                data.save()
            res.json({
                "message":" subcategory update",
                "status":200,
                "success":true,
                "data":data
        
            })
            }        
            else{
                res.json({
                    "message":"no subcategory exist to upload",
                    "status":"true",
                    "success":"false",
                    "data":[]
                 })
            }
        })
               }
exports.deletesubCategory=(req,res)=>{
    if(req.body._id==undefined||req.body._id==null){
        res.json({
            "message":"please enter and id processed",
            "status":400,
            "success":false
    
        })
    }
    else{
     Subcategory.deleteOne({
            "_id":req.body._id})
    .then(data=>{
        res.json({
            "message":"delete sub category",
            "success":true,
            "status":200,
            "data":data
        })
    })
    .catch(err=>{
        res.json({
            "message":"error in delete sub category",
            "success":false,
            "error":String(err)
        })
    })
    
    }
}