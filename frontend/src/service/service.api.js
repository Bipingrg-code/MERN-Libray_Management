import axios from 'axios'
const URL = 'http://localhost:5000/api/v1'

export const getBooks = async () => {
    try {
        return await axios.get(`${URL}/getBooks`)
    } catch (error) {
        console.log('Error while calling get book API', error)
    }
}

export const addBook = async (data) => {
    try {
        return await axios.post(`${URL}/add`, data).then((res) => alert("Book added successfull.!"))
    } catch (error) {
        console.log('Error while calling add book API', error)
    }
}
export const getBook = async (id) => {
    try {
        return await axios.get(`${URL}/${id}`)
    } catch (error) {
        console.log('Error while calling get user API', error)
    }
}
export const editBook = async (user, id) => {
    try {
        return await axios.put(`${URL}/${id}`, user)
    } catch (error) {
        console.log('Error while calling edit user API', error)
    }
}

export const deleteBookData = async (id) => {
    try {
        //console.log(id)
        return await axios.delete(`${URL}/deletBook/${id}`)
    } catch (error) {
        console.log('Error while calling de lete user API', error)
    }
}