const login = require('../services/login');


module.exports = (env) => async (req, res) => {
        console.log(req.body);
        // const {error} = login.validator(req.body);
        // if(error){
        //     res.sendStatus(400)
        // }
        // res.sendStatus(501);

        try{
            const token = await login(req.body, env.jwt.secret);
            if(token){
                res.json({ token });
            }else{
                res.sendStatus(401);
            }
        } catch(error){
            console.error(error);
            res.sendStatus(500);
        }
    };