const { Router } = require("express");

const {
  createTransaction,
  createTransactionWithOutSession,
} = require("../controller/transaction-controller");

const router = Router();

router.post("/shipping", createTransaction);
router.post("/shippingWithoutTransaction", createTransactionWithOutSession);

module.exports = router;
