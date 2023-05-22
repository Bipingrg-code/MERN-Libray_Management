import mongoose from "mongoose"
// import autoIcrement from "mongoose-auto-increment"

const BookSchema = new mongoose.Schema({
    booktitle: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
  
    image: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },

})

//auto increment id 
// autoIcrement.initialize(mongoose.connection)
// BookSchema.plugin(autoIcrement.plugin, 'Books')

const Books = new mongoose.model('books', BookSchema)

export default Books