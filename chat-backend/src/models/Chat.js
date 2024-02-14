import mongoose, {Schema, model} from 'mongoose'

const chatSchema = new Schema({
    users:[ { type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
},{
    timestamps: true,
    versionKey: false
})

export default model('Chat', chatSchema);