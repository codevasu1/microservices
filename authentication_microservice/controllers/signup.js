const signup = require('../services/signup');

module.exports = async (req, res) => {
        console.log(req.body);
        try{
            await signup(req.body);
            res.sendStatus(201);
        }catch(error){
            console.log(error);
            res.sendStatus(500);
        }
    };