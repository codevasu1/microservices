const Joi = require('joi');

const loginSchema = Joi.object({
  // username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

module.exports = {
  validator: (data) => loginSchema.validate(data)
};

// const loginSchema = require('joi');

// module.exports = (req,res) => {
//   const { error } = loginSchema.validate(req.body);
//   if(error){
//     return res.sendStatus(400);
//   }
//   console.log(req.body);
//   res.sendStatus(501);
// }