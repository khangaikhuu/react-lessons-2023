const {Router} = require('express');

const {createTransaction} = require("../controller/transaction-controller");

const router = Router();

router.post('/shipping', createTransaction)

module.exports = router;
