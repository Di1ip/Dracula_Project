const jwt = require('jsonwebtoken');

module.exports =(req,res,next)=>
    {
        const token = req.headers['token'/*token authorization*/]
        if(token)
            {
                // verify secret and checks exp
                jwt.verify(token,'hell@666',function(err,decoded)
                    {
                        if(err)
                            {
                                return res.json
                                    (
                                        {
                                            "msg":"Unauthorized",
                                            "success":false
                                        }
                                    )
                            }
                        req.decoded = decoded;
                        if(req.decoded == null || req.decoded.email == null || req.decoded.email!='admin@admin.com' )
                            {
                                res.json
                                    (
                                        {
                                            "msg":"Not Allow!",
                                            "status":403,
                                            "success":false,
                                            "err":String(err)
                                        }    
                                    )
                            }
                        else
                            {
                                next()
                            }
                    });
            }
        else
            {
                return res.json
                    (
                        {
                            "msg":"Token invailed!",
                            "status":403,
                            "success":false
                        }
                    )
            }
    }

