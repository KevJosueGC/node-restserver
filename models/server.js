const express = require('express');
const cors = require('cors');

class Server {

    constructor() {

        //configuración inicial
        this.app = express();
        this.port = process.env.PORT;
        this.pathUsuarios = '/api/usuarios';

        //middlewares
        this.middleware();

        //rutas del servidor
        this.routes();

    }

    //middlewares
    middleware(){

        //CORS
        this.app.use( cors() );

        //recibir información PUT/POST/DELETE
        this.app.use( express.json() );

        //CARPETA PÚBLICA
        this.app.use( express.static( 'public' ) );
    }

    //metodo de rutas
    routes() {

        this.app.use(this.pathUsuarios, require('../routes/user.routes'));

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto:', this.port);
        });
    }

}

module.exports = Server;