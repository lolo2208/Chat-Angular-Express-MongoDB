import mongoose, {Schema, model} from 'mongoose'

const chatSchema = new Schema({
    
},{
    timestamps: true,
    versionKey: false
})

export default model('Chat', chatSchema);