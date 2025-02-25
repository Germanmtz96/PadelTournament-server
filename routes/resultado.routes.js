// resultado.routes.js
const express = require('express');
const router = express.Router();
const Resultado = require('../models/resultadoSchema');  // Asegúrate de importar el modelo Result

// Crear un nuevo resultado
router.post('/', async (req, res) => {
  const { pistaId, pair1, pair2, winner } = req.body;  // Suponiendo que los resultados tienen una pista, parejas y el ganador

  try {
    const newResultado = new Resultado({ pistaId, pair1, pair2, winner });
    await newResultado.save();
    res.status(201).json(newResultado);
  } catch (error) {
    res.status(400).json({ error: 'Error al registrar el resultado' });
  }
});

// Obtener todos los resultados
router.get('/', async (req, res) => {
  try {
    const resultados = await Resultado.find();
    res.status(200).json(resultados);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los resultados' });
  }
});

// Obtener un resultado por ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const resultado = await Resultado.findById(id);
    if (!resultado) {
      return res.status(404).json({ error: 'Resultado no encontrado' });
    }
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el resultado' });
  }
});


module.exports = router;
