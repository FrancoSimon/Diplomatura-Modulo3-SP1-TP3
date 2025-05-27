import express from 'express'; //importamos express
//crear una instancia express
const app = express();
//configurar el puerto en que le servidor escuchara
const PORT = 3000;

// Manejo de ruta GET con parametro de consulta
// solicitud: http://localhost:3000/profile?edad=30
app.get('/profile', (req, res) => {
    const edad = req.query.edad;
    console.log('Edad recibida:', edad);
    res.send(`Edad del perfil: ${edad}`);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});