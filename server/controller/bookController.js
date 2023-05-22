import Books from '../model/book.Model.js'

export const addBooks = async (req, res) => {
    const bookData = req.body;
    const newBooks = new Books(bookData)
    try {
        await newBooks.save()
        res.status(201).json(newBooks)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const getBooks = async (req, res) => {
    try {
        const books = await Books.find({});
        res.status(200).json(books)
    } catch (error) {
        res.status(404).json({ massege: error.massege })
    }
}

export const getBook = async (req, res) => {
    // console.log(req.params.id)
    try {
        // const user = await User.find({_id: req.params.id});
        const book = await Books.findById(req.params.id)
        res.status(200).json(book)
    } catch (error) {
        res.status(404).json({ massege: error.massege })
    }
}

export const updateBook = async (req, res) => {

    const id = req.params.id
    const { bookname, discription, author, image, price } = req.body;
    let book;
    try {
       book = await Books.findByIdAndUpdate(id, {
            bookname, discription, author, image, price
        })
        await book.save().then(()=>res.json({message: "Data updated Successfully.!"}))
       
    } catch (error) {
        res.status(409).json({ massege: error.massege })
    }
}

export const deleteBook = async (req, res) => {
    const id = req.params.id
    try {
        await Books.findByIdAndDelete(id).then(() => res.status(200).json({message: "user data deleted successfully.!"}))
    } catch (error) {
        res.status(409).json({ massege: error.massege })
    }
}
