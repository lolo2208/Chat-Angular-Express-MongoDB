import mongoose, { Schema, model } from 'mongoose'

const messageSchema = new Schema({
    /* receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: 'Chat' }, */
    content: { type: String, require: true }
}, {
    timestamps: true,
    versionKey: false
})

export default model('Message', messageSchema)