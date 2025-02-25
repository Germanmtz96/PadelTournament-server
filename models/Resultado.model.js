const { Schema, model } = require("mongoose");

const resultadoSchema = new Schema(
  {
    pista: {  // Pista en la que se jugó el partido
      type: Schema.Types.ObjectId,
      ref: "Pista",
      required: true,
    },
    equipo1: {  // Primer equipo (arreglo de jugadores)
      type: [Schema.Types.ObjectId],
      ref: "User",
      required: true,
    },
    equipo2: {  // Segundo equipo (arreglo de jugadores)
      type: [Schema.Types.ObjectId],
      ref: "User",
      required: true,
    },
    marcador: {  // Marcador del partido
      equipo1: {
        type: Number,
        required: true,
      },
      equipo2: {
        type: Number,
        required: true,
      },
    },
    ganador: {  // Equipo ganador del partido
      type: String,  // 'equipo1' o 'equipo2'
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Resultado = model("Resultado", resultadoSchema);

module.exports = Resultado;