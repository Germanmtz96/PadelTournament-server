const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "El nombre de usuario es obligatorio."],
      unique: true,
    },
    pareja: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null, 
    },
    pista: {  
      type: Schema.Types.ObjectId,
      ref: "Pista",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;