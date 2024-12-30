const { Client } = require('pg');

const client = new Client({
    user: 'tu_usuario',
    host: 'tu_host_postgresql',
    database: 'tu_base_de_datos',
    password: 'tu_password',
    port: 5432, // El puerto por defecto de PostgreSQL
});

client.connect()
    .then(() => console.log('Conexión a la base de datos establecida.'))
    .catch(err => console.error('Error al conectar con la base de datos:', err));
