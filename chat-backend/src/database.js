import mongoose from 'mongoose';

mongoose.connect("mongodb://127.0.0.1:27017/chatmeandb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
    }
)
    .then(db => console.log('Db is connected'))
    .catch(error => console.log(error));