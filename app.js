const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = process.eventNames.PORT ?? 5432;
const pool = new Pool({
  user: 'fl0user',
  host: 'postgres://fl0user:7RXJm6EOnMbi@ep-aged-bar-64615221.us-east-2.aws.neon.tech:5432/postgres?sslmode=require',
  database: 'postgres',
  password: '7RXJm6EOnMbi',
  port: 5432,
});

app.use(express.urlencoded({ extended: false }));

app.post('/guardar-datos', (req, res) => {
  const { nombre, correo, mensaje } = req.body;

  const query = 'INSERT INTO datos_formulario (nombre, correo, mensaje) VALUES ($1, $2, $3)';
  const values = [nombre, correo, mensaje];

  pool.query(query, values, (err, result) => {
    if (err) {
      console.error('Error al guardar los datos:', err);
      return res.status(500).send('Error al guardar los datos.');
    }
    console.log('Datos guardados exitosamente');
    return res.status(200).send('Datos guardados exitosamente.');
  });
});

app.listen(PORT, () => {
  console.log(`Servidor Node.js corriendo en https://template-nodejs-3cy1-dev.fl0.io/`);
});
