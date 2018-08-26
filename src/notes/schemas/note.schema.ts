import * as mongoose from 'mongoose';

export const NoteSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    createdDate: {
        type: Date,
        required: false,
    },
    updatedDate: {
        type: Date,
    }
});