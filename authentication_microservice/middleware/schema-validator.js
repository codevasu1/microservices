const schemas = require('../schemas');

module.exports = (schemaName) => (req, res, next) => {
    console.log('[schemaValidator]')
    const schema = schemas[schemaName] || null;

    if(schema){
        const {error} = schema.validator(req.body);

        if(error){
            console.log('[schemaValidator] - validation Un-successful')
            res.sendStatus(400);
        } else {
            console.log('[schemaValidator] - validation successful');
            next();
        }
    } else {
        res.sendStatus(500)
    }

}