import Message from '../models/Message.js'

export const createMessage = async (req, res) => {
    console.log(req.body);
    /* const { content } = req.body;
    const newMessage = new Message({ content });
    const savedMessage = await newMessage.save() */
    res.status(201).json("Guardado");
}

export const getMessages = (req, res) => {
    res.json('Obtener todos los mensajes');
}

export const deleteMessageById = (req, res) => {
    
}

export const getMessagesByChat = (req, res) => {
    
}