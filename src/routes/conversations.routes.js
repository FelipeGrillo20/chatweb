const { Router } = require("express");
const {
  createConversation,
  deleteConversation,
  getAllConversationUser,
  getConversationsParticipansMessages,
} = require("../controllers/conversations.controllers");
const authenticate = require("../middlewares/auth.middleware");

const router = Router();

// validadores
router.post("/conversations", createConversation);

router.get("/conversations/:id", getAllConversationUser);

router.get("/conversations/:id/messages", getConversationsParticipansMessages);

router.delete("/conversations/:id", deleteConversation);

module.exports = router;
