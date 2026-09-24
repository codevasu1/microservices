const Joi = require('joi');

const signupSchema = Joi.object({
  // username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

module.exports = {
  validator: (data) => signupSchema.validate(data)
};

// const signupSchema = require('joi');

// module.exports = (req,res) => {
//   const { error } = signupSchema.validate(req.body);
//   if(error){
//     return res.sendStatus(400);
//   }
//   console.log(req.body);
//   res.sendStatus(501);
// }