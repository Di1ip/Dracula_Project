const User = require('../APIs/users/userModel')

const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.insertUser =()=>
{
    let data = {
                    name:'admin',
                    email:'admin@admin.com',
                    password:'123',
                    userType:'admin'
                } 
    const hash = bcrypt.hashSync('123', saltRounds);
    data.password = hash
    User.countDocuments()
    .then(total=>
            {
                data.userId = total+1
                User.findOne({'email':'admin@admin.com'})
                .then(use=>
                        { 
                            if(use==null)
                                {
                                    let useObj = new User(data)
                                    useObj.save(data,err=>
                                                {
                                                    console.log("Admin saved",data)
                                                })
                                }
                        }
                    )
                .catch(err=>
                        {
                            console.log("Error in Save Admin",err)
                        }
                    )
            }
        )
}