import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    fullName: { type: String },
    email: { type: String, require: true },
    password: { type: String, require: true }
}, {
    timestamps: true,
    versionKey: false
})

userSchema.pre('save', async function(next) {
    this.fullName = `${this.firstName} ${this.fullName}`
    next();
})

export default model('User', messageSchema)