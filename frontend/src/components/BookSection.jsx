import React from 'react'
import { Link } from 'react-router-dom'
import { deleteBookData } from '../service/service.api'

const BookSection = ({ books }) => {
    // console.log(books)
    //deletbooks
    const deleteBooks = async (id) => {
        await deleteBookData(id);
    }
    return (
        <div className='d-flex justify-content-around align-items-center flex-wrap my-3'>
            {
                books && books.map((item, index) => (
                    <div className="" style={{ height: "300px", width: "200px", border: "1px solid white", borderRadius: "0px 0px 30px 0px", background: "rgb(37, 150, 190)" }}>
                        <div className='m-3'>
                            <img className='img-fluid' src={item.image} alt='/' style={{ width: "100%", height: "160px" }} />
                        </div>
                        <h6 className='p-2 mb-0' style={{ fontSize: "14px" }}>{item.booktitle}</h6>
                        <b className='mb-0 p-2' style={{ fontSize: "28px" }}>Rs. {item.price}</b>
                        <div className='d-flex justify-content-around align-items-center mt-1' >
                            <Link className='btn btn-primary' style={{ height: "40px", width: "80px" }} to={`/updateBooks/${item._id}`}>Update</Link>
                            <button className='btn btn-danger' style={{ height: "40px", width: "80px" }} onClick={() => deleteBooks(item._id)}>Delete </button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default BookSection