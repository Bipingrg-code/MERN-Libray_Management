import React from 'react'
import './Books.css'
import { useState, useEffect } from 'react'
import { getBooks } from '../service/service.api.js'
import BookSection from '../components/BookSection'

const Books = () => {
  const [books, setBooks] = useState()

  //Data fetch
  const getAllBooks = async () => {
    let response = await getBooks();
    // console.log(response)
    setBooks(response.data.books)
  }
  useEffect(() => {
    getAllBooks();
  }, [])


  return (
    <div className='books'>
      <div className="d-flex justify-content-center align-items-center py-4">
        <h4 className='mt-3'>Book Section</h4>
      </div>
      {books ? <BookSection books={books} /> : <div>Loading..!</div>}

    </div>
  )
}

export default Books