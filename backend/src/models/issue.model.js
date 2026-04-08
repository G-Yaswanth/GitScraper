//In this file, I will define the schema for the issues, which I will be storing in the MongoDB

import mongoose from 'mongoose';
const {Schema} = mongoose;

const issueSchema = new Schema({
    userId: String,
    runDateTime: {
        type: Date,
        default: Date.now
    },
    title: String,
    labels: [String],
    createdAt: Date,
    updatedAt: Date,
    state: String,
    url: String,
    language: [String],
    interested:{
        type: Boolean,
        default: false
    }
});

export default mongoose.model('Issue', issueSchema);