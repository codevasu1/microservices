const bcrypt = require('bcrypt');

let users = [];

const createFakeUser =  (data) => {
  if(users.indexOf(data.email) === -1){
    users.push(data.email);
    console.log('[signupService] - user created', '\n\nall users list:',users, '\n\n')
    return Promise.resolve();
  }
  return Promise.reject(Error('Email already exists!'));
}

module.exports = async (data) => {
  const {email, password} = data;
  const hash = bcrypt.hash(password, 10);

  await createFakeUser({email, hash});
}