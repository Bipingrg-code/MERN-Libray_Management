
import express from 'express'
import Books from '../model/book.Model.js'
import { addBooks, getBooks, getBook, updateBook, deleteBook} from '../controller/bookController.js'
const router = express.Router()

//book add route
router.post('/add', addBooks)

//book get route
router.get('/getBooks', getBooks)

//get book by id
router.get('/getBooks/:id', getBook)

//update book by id

router.put('/updateBook/:id', updateBook)

//Delete Book

router.delete('/deleteBook/:id', deleteBook)

export default router