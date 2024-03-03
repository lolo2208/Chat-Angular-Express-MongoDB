import { Router } from 'express';
import * as messagesController from '../controllers/messages.controller.js';
import { authJwt } from "../middlewares/index.js"

const router = Router();

router.get('/', [authJwt.verifyToken, authJwt.isAdmin], messagesController.getMessages);
router.post('/', authJwt.verifyToken, messagesController.createMessage);
router.get('/by-chat/:chatId', authJwt.verifyToken, messagesController.getMessagesByChat);
router.get('/:messageId', authJwt.verifyToken, messagesController.getMessageById);
router.delete('/:messageId', authJwt.verifyToken, messagesController.deleteMessageById);
router.put('/:messageId', authJwt.verifyToken, messagesController.updateMessage);

export default router;