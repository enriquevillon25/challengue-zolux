//Creando variables de entorno para desarollo (dev) y conectarse al api rest
//escalable para crear para diferentes entornos (qa) (prod)

const environment_dev = {
    production: false,
    api: {
        host: 'https://jsonplaceholder.typicode.com/posts/',
    }
};

const environment = environment_dev;


export default environment;