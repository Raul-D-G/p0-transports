const { TransportModel, TransportEfectuatModel } = require("../models");

//Dealing with data base operations
class TransportRepository {
  async CreateTransport({
    idExpeditor,
    tipMarfa,
    taraIncarcare,
    orasIncarcare,
    taraDescarcare,
    orasDescarcare,
    pret,
    km,
  }) {
    try {
      const transport = new TransportModel({
        idExpeditor,
        tipMarfa,
        taraIncarcare,
        orasIncarcare,
        taraDescarcare,
        orasDescarcare,
        pret,
        km,
      });

      // Salvăm transport în baza de date
      const savedTransport = await transport.save();

      // Returnăm ID-ul transportului salvat
      return savedTransport._id;
    } catch (error) {
      throw error;
    }
  }

  async CreatetransportEfectuat({
    idTransport,
    idTransportator,
    idExpeditor,
    tipMarfa,
    taraIncarcare,
    orasIncarcare,
    taraDescarcare,
    orasDescarcare,
    pret,
    km,
  }) {
    try {
      const transportEfectuat = new TransportEfectuatModel({
        idTransport,
        idTransportator,
        idExpeditor,
        tipMarfa,
        taraIncarcare,
        orasIncarcare,
        taraDescarcare,
        orasDescarcare,
        pret,
        km,
      });

      const result = await transportEfectuat.save();
      return result;
    } catch (error) {
      throw error;
    }
  }

  async GetTransporturiByCompanieId(idExpeditor) {
    try {
      return await TransportModel.find({ idExpeditor: idExpeditor });
    } catch (error) {
      throw error;
    }
  }

  async GetTransporturi(idExpeditor) {
    try {
      const transporturi = await TransportModel.find({
        idExpeditor: { $ne: idExpeditor },
      });
      return transporturi;
    } catch (error) {
      throw error;
    }
  }

  async GetTransportById(id) {
    try {
      return await TransportModel.findById(id);
    } catch (error) {
      throw error;
    }
  }

  async GetTransporturiEfectuate(idTransportator) {
    try {
      const transporturi = await TransportEfectuatModel.find({
        idTransportator,
      });
      return transporturi;
    } catch (error) {
      throw error;
    }
  }

  async DeleteTransport(id) {
    try {
      const result = await TransportModel.deleteOne({ _id: id });
      return result.deletedCount;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TransportRepository;
