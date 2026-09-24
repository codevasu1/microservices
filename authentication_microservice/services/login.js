const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getFakeUser = async(email) => {
    let user = {};

    user.id = 1;
    user.email = 'user@email.com';
    // user.password = 'password';
    // user.hash = await bcrypt.hash('extra secret text to increase processing cost', 10); 
    user.hash = await bcrypt.hash('passwordsecret', 10); 
    
    return Promise.resolve((email === user.email) ? user : null );
} 
module.exports = async (data, secret) => {
  const user = await getFakeUser(data.email);
  if(!user){
    return null;
  }

  const isMatching = await bcrypt.compare(data.password, user.hash);
  if(!isMatching){
    return null;
  }

  const token = jwt.sign({id: user.id}, secret, {expiresIn : '1h'});
  return token;
}