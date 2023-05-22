import React, { useState } from 'react'
import './Addbooks.css'
import { addBook } from '../service/service.api'

const defaultValue = {
    booktitle: "",
    author: "",
    description: "",
    image: "",
    price: "",
}

const Addbooks = () => {

    const [data, setData] = useState(defaultValue)

    const change = (e) => {
        // const { name, value } = e.target;
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const submit = (e) => {
        e.preventDefault()
        addBook(data)
    }
    return (
        <div className='add-books d-flex justify-content-center align-items-center'>
            <div className="container p-4">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Book Name</label>
                    <input type="text" className="form-control" name='booktitle' onChange={change} id="exampleFormControlInput1" placeholder="Enter Book Name" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Author</label>
                    <input type="text" className="form-control" name='author' onChange={change} id="exampleFormControlInput1" placeholder="Enter Author Name" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Description</label>
                    <input type="text" className="form-control" name='description' onChange={change} id="exampleFormControlInput1" placeholder="Enter Description Of The Book" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Image</label>
                    <input type="text" className="form-control" name='image' onChange={change} id="exampleFormControlInput1" placeholder="Enter img Url" />

                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Price</label>
                    <input type="number" className="form-control" name='price' onChange={change} id="exampleFormControlInput1" placeholder="Enter Book Price" />
                </div>
                <button className='btn btn-success' onClick={submit}>Submit</button>
            </div>
        </div>
    )
}

export default Addbooks