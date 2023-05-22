import React, { useState, useEffect } from 'react'
import './EditBooks.css'
import { useParams } from 'react-router-dom';
import { getBook, editBook } from '../service/service.api'

const defaultValue = {
    booktitle: "",
    author: "",
    description: "",
    image: "",
    price: "",
}

const EditBooks = () => {

    const [data, setData] = useState(defaultValue)
    //get url id
    const { id } = useParams()
     //fetching data in form
     useEffect(() => {
        loadBookData()
    },[])
    const loadBookData = async () => {
        const response = await getBook(id);
        console.log(response.data)
        setData(response.data)
    }
   
    const change = (e) => {
        // const { name, value } = e.target;
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const editBooks = (e) => {
        e.preventDefault()
        editBook(data, id)
    }
    return (
        <div className='edit-books d-flex justify-content-center align-items-center'>
            <div className="container p-4">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Book Name</label>
                    <input type="text" className="form-control" name='booktitle' value ={data.booktitle}onChange={change} id="exampleFormControlInput1" placeholder="Enter Book Name" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Author</label>
                    <input type="text" className="form-control" name='author' value ={data.author}onChange={change} id="exampleFormControlInput1" placeholder="Enter Author Name" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Description</label>
                    <input type="text" className="form-control" name='description' value ={data.description}onChange={change} id="exampleFormControlInput1" placeholder="Enter Description Of The Book" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Image</label>
                    <input type="text" className="form-control" name='image' value ={data.image}onChange={change} id="exampleFormControlInput1" placeholder="Enter img Url" />

                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Price</label>
                    <input type="number" className="form-control" name='price' value ={data.price}onChange={change} id="exampleFormControlInput1" placeholder="Enter Book Price" />
                </div>
                <button className='btn btn-success' onClick={editBooks}>Edit</button>
            </div>
        </div>
    )
}

export default EditBooks