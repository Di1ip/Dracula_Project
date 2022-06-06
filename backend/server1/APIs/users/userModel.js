const mongoose = require('mongoose')


const userSchema = mongoose.Schema
	({
        userId:{type:Number,default:0},
		name:{type:String,default:''},
		email:{type:String,default:''},
		password:{type:String},
		userType:{type:String,default:'user'},
		// 0 = User , 1 = Publisher , 2 = Admin
		// categoryType:{type:mongoose.Schema.Types.String,ref:'category_Data',default:null},
        isBlocked:{type:Boolean,default:false},
        createdAt:{type:Date,default:Date.now()},
        updatedAt:{type:Date}
	})
	
//Export User Model
const user = module.exports = mongoose.model('user_Data',userSchema);
module.exports.get = function(callback,limit)
	{
		user.find(callback).limit(limit);
	}