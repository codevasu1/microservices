const express = require('express');
const healthController = require('../controllers/health');
const fallbackController = require('../controllers/fallback');
const loginController = require('../controllers/login');
const signupController = require('../controllers/signup');
const schemaValidatorMiddleware = require('../middleware/schema-validator');

const logger = (req, res, next) => {
    console.log('[logger] ',req.method, ' ', req.url);
    next();  
  }

module.exports = (env) => {
  const app = express();

  // console.log(app);
  // console.log(app.request);
  // console.log(app.response);
  
  app.use(logger);

  app.use('/auth', express.urlencoded());// ALL ROUTES
 
  app.get('/health', healthController);//GET

  app.post('/auth/login', schemaValidatorMiddleware('login'), loginController);//POST

  app.post('/auth/signup', schemaValidatorMiddleware('signup'), signupController);//POST

  // app.all('*', fallbackController);//bare wildcard * or /* will not work, instead use app.use() middleware
  app.use((req, res) =>  fallbackController(req, res));//404 not found
  
  return app;
};

// app.listen(3000, () => {
//   console.log('server runnig on port 3000');
// })