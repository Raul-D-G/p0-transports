const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TransportSchema = new Schema(
  {
    idExpeditor: String,
    tipMarfa: String,
    taraIncarcare: String,
    orasIncarcare: String,
    taraDescarcare: String,
    orasDescarcare: String,
    pret: Number,
    km: Number,
  },
  {
    toJSON: {
      transform(doc, ret) {
        // delete ret.parola;
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

module.exports = mongoose.model("transport", TransportSchema);
