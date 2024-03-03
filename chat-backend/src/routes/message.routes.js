import { Router } from 'express';
import * as messagesController from '../controllers/messages.controller.js';

const router = Router();

router.get('/', messagesController.getMessages);
router.post('/', messagesController.createMessage);
router.get('/by-chat/:chatId', messagesController.getMessagesByChat);
router.get('/:messageId', messagesController.getMessageById);
router.delete('/:messageId', messagesController.deleteMessageById);
router.put('/:messageId', messagesController.updateMessage);

export default router;