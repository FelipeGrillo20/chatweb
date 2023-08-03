const { Router } = require("express");
const { createMessage } = require("../controllers/messages.controllers");

const router = Router();

router.post('/messages', createMessage);

module.exports = router; 