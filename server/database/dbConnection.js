import mongoose from "mongoose"

const dbConnection = async (username, password) => {

    const URL = `mongodb+srv://${username}:${password}@crud-book-store.cieb3fn.mongodb.net/?retryWrites=true&w=majority`
    try {
       await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log('Database connected successfully.!')
    } catch (error) {
        console.log(error)
    }
}
export default dbConnection