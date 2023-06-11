const { TransportRepository } = require("../database");
const repository = new TransportRepository();

// All Business logic will be here
module.exports = {
  create: (data, callBack) => {
    repository
      .CreateTransport({
        idExpeditor: data.idCompanie,
        tipMarfa: data.tipMarfa,
        taraIncarcare: data.incarcare[1],
        orasIncarcare: data.incarcare[0],
        taraDescarcare: data.descarcare[1],
        orasDescarcare: data.descarcare[0],
        pret: data.pret,
        km: data.km,
      })
      .then((transport) => {
        callBack(null, transport);
      })
      .catch((error) => {
        callBack(error);
      });
  },

  transportEfectuat: (data, callBack) => {
    repository
      .CreatetransportEfectuat({
        idTransport: data.idTransport,
        idTransportator: data.idTransportator,
        idExpeditor: data.idCompanie,
        tipMarfa: data.tipMarfa,
        taraIncarcare: data.incarcare[1],
        orasIncarcare: data.incarcare[0],
        taraDescarcare: data.descarcare[1],
        orasDescarcare: data.descarcare[0],
        pret: data.pret,
        km: data.km,
      })
      .then((transportEfectuat) => {
        callBack(null, transportEfectuat);
      })
      .catch((error) => {
        callBack(error);
      });
  },

  getTransporturiByCompanieId(idExpeditor, callBack) {
    repository
      .GetTransporturiByCompanieId(idExpeditor)
      .then((transporturi) => {
        callBack(null, transporturi);
      })
      .catch((error) => {
        callBack(error);
      });
  },

  getTransporturi(idExpeditor, callBack) {
    repository
      .GetTransporturi(idExpeditor)
      .then((transporturi) => {
        callBack(null, transporturi);
      })
      .catch((error) => {
        callBack(error);
      });
  },

  getTransportById: (transportID, callBack) => {
    repository
      .GetTransportById(transportID)
      .then((transport) => {
        callBack(null, transport);
      })
      .catch((error) => {
        callBack(error);
      });
  },

  getTransporturiEfectuate(idTransportator, callBack) {
    repository
      .GetTransporturiEfectuate(idTransportator)
      .then((transporturi) => {
        callBack(null, transporturi);
      })
      .catch((error) => {
        callBack(error);
      });
  },

  deleteTransport: (transportID, callBack) => {
    repository
      .DeleteTransport(transportID)
      .then((deletedCount) => {
        callBack(null, deletedCount > 0);
      })
      .catch((error) => {
        callBack(error);
      });
  },
};
