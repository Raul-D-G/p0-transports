const {
  getTransporturiEfectuate,
  getTransportById,
  getTransporturi,
  create,
  getTransporturiByCompanieId,
  deleteTransport,
  transportEfectuat,
  test,
} = require("./transport.service");

module.exports = {
  registerTransport: (req, res) => {
    const body = req.body;
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          succesc: 0,
          messaage: "Database connection error",
        });
      }
      return res.status(200).json({
        succesc: 1,
        messaage: results,
      });
    });
  },

  transportEfectuat: (req, res) => {
    const body = req.body;
    transportEfectuat(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          succesc: 0,
          messaage: "Database connection error",
        });
      }
      return res.status(200).json({
        succesc: 1,
        messaage: results,
      });
    });
  },

  getTransporturiByCompanieId: (req, res) => {
    const id = req.params.id;
    getTransporturiByCompanieId(id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          succesc: 0,
          messaage: "Database connection error",
        });
      }
      if (typeof results !== "undefined" && results.length > 0) {
        return res.json(results);
      }
      return res.json({
        success: 0,
        message: "Compania nu are transporturi inregistrate",
      });
    });
  },

  getTransporturi: (req, res) => {
    const id = req.params.id;
    getTransporturi(id, (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          succesc: 0,
          messaage: "Database connection error",
        });
      }
      return res.status(200).json(results);
    });
  },

  getTransportById: (req, res) => {
    const transportID = req.params.id;
    getTransportById(transportID, (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          succesc: 0,
          messaage: "Database connection error",
        });
      }
      return res.json(results);
    });
  },

  getTransporturiEfectuate: (req, res) => {
    const id = req.params.id;
    getTransporturiEfectuate(id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          succesc: 0,
          messaage: "Database connection error",
        });
      }
      return res.status(200).json(results);
    });
  },

  deleteTransport: (req, res) => {
    const id = req.params.id;
    deleteTransport(id, (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          succesc: 0,
          messaage: "Database connection error",
        });
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Inregistrarea nu afost gasita",
        });
      }
      return res.json({
        success: 1,
        message: "Transport sters",
      });
    });
  },

  // test: (req, res) => {
  //   const body = req.body;
  //   test(body, (err, results) => {
  //     if (err) {
  //       console.log(err);
  //       return res.status(500).json({
  //         succesc: 0,
  //         messaage: "Database connection error",
  //       });
  //     }
  //     return res.status(200).json({
  //       succesc: 1,
  //       message: results,
  //     });
  //   });
  // },
};
