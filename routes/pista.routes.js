// pista.routes.js
const express = require('express');
const router = express.Router();
const Pista = require('../models/pistaSchema');  // Asegúrate de importar el modelo Court

// Crear una nueva pista
router.post('/', async (req, res) => {
  const { name } = req.body;  // Suponiendo que las pistas tienen un nombre y estado

  try {
    const newPista = new Pista({ name });
    await newPista.save();
    res.status(201).json(newPista);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear la pista' });
  }
});

// Obtener todas las pistas
router.get('/', async (req, res) => {
  try {
    const pistas = await Pista.find();
    res.status(200).json(pistas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las pistas' });
  }
});

// Obtener una pista por ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const pista = await Pistas.findById(id);
    if (!pista) {
      return res.status(404).json({ error: 'Pista no encontrada' });
    }
    res.status(200).json(pista);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la pista' });
  }
});


module.exports = router;
