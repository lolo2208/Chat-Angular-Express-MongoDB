import Message from '../models/Message.js'

export const createMessage = async (req, res) => {
    const { content } = req.body;
    const newMessage = new Message({ content });
    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
}

export const updateMessage = async (req, res) => {
    const updatedMessage = await Message.findByIdAndUpdate(req.params.messageId, req.body, { new: true });
    res.status(200).json(updatedMessage);
}

export const getMessages = async (req, res) => {
    const messagesList = await Message.find();
    res.status(200).json(messagesList);
}

export const getMessageById = async (req, res) => {
    const message = await Message.findById(req.params.messageId);
    if( message !== null) {
        res.status(200).json(message)
    }
    else {
        res.status(404).json('No hay un mensaje con este id');
    }
}

export const deleteMessageById = async (req, res) => {
    await Message.findByIdAndDelete(req.params.messageId);
    res.status(204).json('Mensaje eliminado');
}

export const getMessagesByChat = async (req, res) => {
    const { chatId } = req.params;
    const messagesList = await Message.find({chat:chatId});
    res.status(200).json(messagesList);
}