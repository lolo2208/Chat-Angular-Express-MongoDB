import { Router } from 'express';
import * as messagesController from '../controllers/messages.controller.js';

const router = Router();

router.get('/', messagesController.getMessages);
router.post('/', messagesController.createMessage);
router.get('/:chatId', messagesController.getMessagesByChat);
router.delete('/:messageId', messagesController.deleteMessageById);

export default router;