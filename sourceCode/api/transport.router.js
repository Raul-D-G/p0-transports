const {
  getTransporturiEfectuate,
  getTransportById,
  getTransporturi,
  registerTransport,
  getTransporturiByCompanieId,
  deleteTransport,
  transportEfectuat,
} = require("./transport.controller");
const { checkToken } = require("./middlewares/token_validation");

const router = require("express").Router();

router.post("/", checkToken, registerTransport);
router.post("/efectuat", checkToken, transportEfectuat);

router.get("/:id", checkToken, getTransporturiByCompanieId);
router.get("/bursa/:id", checkToken, getTransporturi);
router.get("/transport/:id", checkToken, getTransportById);
router.get("/efectuat/:id", checkToken, getTransporturiEfectuate);

router.delete("/:id", checkToken, deleteTransport);

module.exports = router;
