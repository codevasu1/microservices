const express = require('express');

const app = express();

app.get('/', (req,res) => {
  res.send('hello from express')
})

app.post('/login', express.json(), (req,res) => {
  const {email, password} = req.body;

  if(email === 'user@email.com' && password === 'password'){
    res.json({
        token: 'access_token'
    });
  } else {
    res.status(401).json({
        error: 'invalid_credentials' 
    });
  }
})

app.listen(3000, () => {
  console.log('server running on port 3000');
})