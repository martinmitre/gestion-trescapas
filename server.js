
// Lista en memoria para almacenar productos
let productos = [];

// Ruta para agregar un producto
app.post('/productos', (req, res) => {
    const { nombre, precio } = req.body;
    if (!nombre || !precio) {
        return res.status(400).json({ error: 'Faltan datos' });
    }
    const producto = { id: productos.length + 1, nombre, precio };
    productos.push(producto);
    res.status(201).json(producto);
});

// Ruta para listar productos
app.get('/productos', (req, res) => {
    res.json(productos);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

/*
Explicación:
Esta implementación es monolítica porque toda la lógica de la aplicación (gestión de productos, almacenamiento y API) está en un solo archivo.
Desventajas:
- Difícil de escalar: Si la aplicación crece, el código se vuelve más complejo y difícil de mantener.
- Acoplamiento fuerte: No hay separación entre la lógica de negocio, la capa de datos y la API.
- Poca modularidad: No es fácil reutilizar partes del código en otros proyectos.
*/
