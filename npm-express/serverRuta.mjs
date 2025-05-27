import express from 'express'; //importamos express
//crear una instancia express
const app = express();
//configurar el puerto en que le servidor escuchara
const PORT = 3000;
//manejo de ruta GET con parametro de ruta
//solicitud: http://localhost:3000/user/123
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    console.log('ID del usuario recibido:', userId);
    res.send(`Perfil del usuario con ID: ${userId}`);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});