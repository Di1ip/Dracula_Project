const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost/backendtry1')
.then(con=>
        {
            console.log("db Connected")
        })
.catch(err=>
        {
            console.log("Error!, Not connected",err)
        })