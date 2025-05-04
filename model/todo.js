import mongoose from 'mongoose'


const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        required: true,
        default: false
    },


}, { timestamps: true })

export default mongoose.model('todo', todoSchema)