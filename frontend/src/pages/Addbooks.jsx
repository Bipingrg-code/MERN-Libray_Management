import React from 'react'
import './Addbooks.css'

const Addbooks = () => {
    return (
        <div className='add-books d-flex justify-content-center align-items-center'>
            <div className="container p-4">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Book Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Book Name" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Author</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Author Name" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Description</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Description Of The Book" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Image</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter img Url" />

                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Price</label>
                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Book Price" />
                </div>
                <button className='btn btn-success'>Submit</button>
            </div>
        </div>
    )
}

export default Addbooks