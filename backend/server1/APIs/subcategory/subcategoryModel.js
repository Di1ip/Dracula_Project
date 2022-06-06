var mongoose=require('mongoose');

var subcategorySchema=mongoose.Schema
({
    categoryId:{type:mongoose.Schema.Types.ObjectId,default:null, ref:'category_data'},
    subcategoryId:{type:Number,default:0},
    subcategoryName:{type:String,default:''},
    subcategoryImage:{type:String ,default:''},
    isBlocked:{type:Boolean,default:'0'},
    createdAt:{type:Date,default:Date.now()},
    updateAt:{type:Date}
});
const subcategory = module.exports = mongoose.model('subcategory_Data',subcategorySchema);
module.exports.get = function(callback,limit)
    {
        subcategory.find(callback).limit(limit);
    }