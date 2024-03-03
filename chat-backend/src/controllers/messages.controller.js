import Message from '../models/Message.js'

export const createMessage = async (req, res) => {
    if(req.body) {
        const { content, receiver, sender, chat } = req.body;
        const newMessage = new Message({ content, receiver, sender, chat });

        try {
            const savedMessage = await newMessage.save();
            res.status(201).json(savedMessage);

        } catch(error) {
            res.status(500).json({message:'Internal error while saving', error});
        }

    }else{
        res.status(400).json({message:'Body not provided'});
    }
    
}

export const updateMessage = async (req, res) => {
    if(req.body) {
        try {
            const updatedMessage = await Message.findByIdAndUpdate(req.params.messageId, req.body, { new: true });
            if( updatedMessage !== null) {
                res.status(200).json(message)
            }
            else {
                res.status(404).json('No hay un mensaje con este id');
            }
        }catch(error) {
            res.status(500).json({message:'Internal error while updating', error});
        }
    }else{
        res.status(400).json({message:'Body not provided'});
    }
}

export const getMessages = async (req, res) => {
    try{
        const messagesList = await Message.find();
        res.status(200).json(messagesList);
    }catch(error) {
        res.status(500).json({message:'Internal error while getting', error});
    }
}

export const getMessageById = async (req, res) => {
    try {
        const message = await Message.findById(req.params.messageId);
        if( message !== null) {
            res.status(200).json(message)
        }
        else {
            res.status(404).json('No hay un mensaje con este id');
        }
    }catch(error) {
        res.status(500).json({message:'Internal error while getting', error});
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