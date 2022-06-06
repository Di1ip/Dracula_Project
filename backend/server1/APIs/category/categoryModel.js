const mongoose = require('mongoose')


const categorySchema = mongoose.Schema(
        {
            categoryId:{type:Number,default:0},
            categoryName:{type:String,default:''},
            categoryType:{type:String,default:0},
            categoryImage:{type:String ,default:''},
            // 1 = novels, 2 = Study, 3 = comics, 4 = news;
            updateLog:  [
                            {
                                oldName:{ type:String,defualt:''},
                                newName:{ type:String,defualt:''},
                                updateBy:{ type:mongoose.Schema.Types.ObjectId, default:null,ref:'user_Data' },
                                updatedOn:{type:Date, default:Date.now()}
                            }
                        ],
    
            status:{ type:Boolean, default:true},
            isBlocked:{type:Boolean,default:'0'},
            createdAt:{ type:Date, default:Date.now()},
            updatedAt:{ type:Date ,default:null},
            createdBy:{ type:mongoose.Schema.Types.ObjectId, default:null,ref:'user_Data' }
        });
        
//Export Category Model
const category = module.exports = mongoose.model('category_Data',categorySchema);
module.exports.get = function(callback,limit)
    {
        category.find(callback).limit(limit);
    }