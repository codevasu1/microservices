const Env = require('./loaders/environment');
const Server = require('./loaders/server');

(async () => {
    try {
        // throw new Error('failed');
        const env = Env();
        const server = Server(env);

        server.listen(env.server.port, () => {
          console.log(`server runnig on port ${env.server.port}`);
        })

    }catch(err){
        console.error(err);
        process.exit(1);
    }
})()