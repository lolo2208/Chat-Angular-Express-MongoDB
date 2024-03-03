import Chat from '../models/Chat.js';

export const createChat = async (req, res) => {
    if(req.body) {
        const { users } = req.body;
        const newChat = new Chat({users});

        try {
            const savedChat = await newChat.save();
            res.status(201).json(savedChat);

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
            
        } catch(error) {
            res.status(404).json('Internal error while updating', error);
        }
    }
}