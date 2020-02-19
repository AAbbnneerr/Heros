import mongoose, { mongo } from 'mongoose'

mongoose.Promise = global.Promise;

const heroSchema = new mongoose.Schema({

    id: mongoose.Schema.Types.ObjectId,
    name:{
        type: String,
        required: true
    },
    power:{
        type: String,
        required: true
    },
    range:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    }
});

export default mongoose.model('Heros', heroSchema)