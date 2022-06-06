const mongoose = require('mongoose');

const bookSchema = mongoose.Schema
    ({
        bookId:{type:Number,default:0},
        bookName:{type:String,default:''},
        bookAuther:{type:String,default:''},
        bookImage:{type:String,default:'booksimages/noimage.jpg'},
        categoryType:{type:mongoose.Schema.Types.String,default:null,ref:'category_Data'},
        categoryId:{type:mongoose.Schema.Types.ObjectId,default:null, ref:'category_data'},
        subcategoryId:{type:mongoose.Schema.Types.ObjectId,default:null, ref:'subcategory_data'},
        status:{type:Boolean,default:true},
        createdAt:{type:Date,default:Date.now()},
        updatedAt:{type:Date,default:null},
        createdBy:{type:mongoose.Schema.Types.ObjectId,default:null,ref:'user_Data'}
    });
    // Export department Model
    const book = module.exports = mongoose.model('book_Data',bookSchema);
    module.exports.get = function(callback,limit)
        {
            book.find(callback).limit(limit);
        }