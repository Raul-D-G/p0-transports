const mongoose = require("mongoose");

const transportEfectuatSchema = new mongoose.Schema(
  {
    idTransport: { type: String, required: true },
    idTransportator: { type: String, required: true },
    idExpeditor: { type: String, required: true },
    tipMarfa: { type: String, required: true },
    taraIncarcare: { type: String, required: true },
    orasIncarcare: { type: String, required: true },
    taraDescarcare: { type: String, required: true },
    orasDescarcare: { type: String, required: true },
    pret: { type: Number, required: true },
    km: { type: Number, required: true },
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

const TransportEfectuat = mongoose.model(
  "TransportEfectuat",
  transportEfectuatSchema
);

module.exports = TransportEfectuat;
