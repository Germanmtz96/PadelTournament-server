const { Schema, model } = require("mongoose");

const pistaSchema = new Schema(
  {
    numeroPista: {
      type: Number,
      required: true,
      unique: true,
    },
    equipos: [ 
      {
        jugadores: [
          {
            type: Schema.Types.ObjectId,
            ref: "User",
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Pista = model("Pista", pistaSchema);

module.exports = Pista;