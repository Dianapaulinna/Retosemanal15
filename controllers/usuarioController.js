
exports.crearUsuario = (req, res) => {
    // Crear el usuario
    const usuario = {
      nombre: req.body.nombre,
      email: req.body.email,
      password: req.body.password,
    };
    // Agregar el usuario a una base de datos
    // ...
  
    res.send("Usuario creado correctamente");
  };
  
  exports.mostrarPaginaDeBienvenida = (req, res) => {
    res.send(`¡Bienvenido, ${req.params.nombre}!`);
  };