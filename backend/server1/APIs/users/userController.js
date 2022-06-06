const User = require('./userModel')

const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken');
const SECRET = 'hell@666';


exports.login=(req,res)=>
	{
		User.findOne({"email":req.body.email})
		.then(uObj =>
				{
					if(uObj==null)
						{
							res.json
								(
									{
										"msg":"Email password not match! from start",
										"status":400,
										"success":false
									}
								)
						}
					else
						{
							// console.log(req.body.password,uObj.password)
							if(bcrypt.compareSync(req.body.password,uObj.password))
								{
									let payload = 	{
														name:uObj.name,
														email:uObj.email,
														userType:uObj.userType,
														// teacherId:uObj.teacherId,
														// _id:uObj._id
													}
									let token = jwt.sign(payload,SECRET,{expiresIn:60*60*24*365})
									res.json
										(
											{
												"msg":"Login Successful1",
												"status":200,
												"success":true,
												"token":token
											}
										)
								}
							else
								{
									res.json
										(
											{
												"msg":"Email password not match!",
												"status":400,
												"success":false,
											}
										)
								}
						}
				}
			)
		.catch(err=>
				{
					res.json
						(
							{
								"msg":"login API not work",
								"status":500,
								"success":false,
								"err":String(err)
							}
						)
				}
			)
	}	


exports.addUser = (req,res)=>
{
	if(req.body.name == undefined || req.body.email == undefined || req.body.password == undefined)
		{
			res.json
				({
					"msg":"Fill the form!",
					"status":200,
					"success":false
				})
		}
	else
		{
			User.findOne({'name':req.body.name})
			.then(async data=>
					{
						if(data!=null)
							{
								res.json
									({
										"msg":"Add User Name exist!",
										"status":400,
										"success":false
									})
							}
						else
							{
								let total= await User.countDocuments().exec();
								let userObj = new User();
								userObj.name = req.body.name
								userObj.email = req.body.email
								const hash = bcrypt.hashSync(req.body.password, saltRounds);
								userObj.password = hash
								userObj.userId = total+1
								userObj.save()
								.then(async bobj=>
										{
											res.json
												({
													"msg":"User added!",
													"status":200,
													"success":true,
													"user":userObj,
													"data":bobj
												})
										}
									)
								.catch(err=>
										{
											res.json
												({
													"msg":"error while adding User",
													"status":500,
													"success":false,
													"error":String(err)
												})
										})
							}
					}
				)
		}
}

exports.userDetails=(req,res)=>
	{
		User.find()
		.select('name email userType password createdAt')
		// .populate('TeacherId')
//		.populate('teacehrId','phone,salary,subject')
		.then(data=>
				{
					if(data!=null)
						{
							res.json
								(
									{
										"msg":"all User",
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