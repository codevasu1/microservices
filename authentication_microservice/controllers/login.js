const loginSchema = require('../schemas/login')


module.exports = (req, res) => {
        console.log(req.body);
        const {error} = loginSchema.validator(req.body);
        if(error){
            res.sendStatus(400)
        }
        res.sendStatus(501);
    };