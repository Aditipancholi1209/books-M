import React, { useEffect, useState } from 'react';
const AddBookForm = ({ handleSubmit, updateDetails }) => {
    const [bookDetail, setBookDetail] = useState({
        isbn: '',
        title: '',
        authorname: '',
        year: ''
    });
    const handlechange = (e) => {
        setBookDetail({ ...bookDetail, [e.target.name]: e.target.value});
    }

    useEffect(() => {
        if (updateDetails) { setBookDetail(updateDetails) };
    }, [updateDetails])
    return (
        <div>
            <h2> Book Management </h2>
            <div className='Card'>
            <div className='input_field'>
                <label>ISBN</label>
                <input name='isbn' value={bookDetail.isbn} type='number' onChange={handlechange} />
            </div>
            <div className='input_field'>
                <label>Title</label>
                <input name='title' value={bookDetail.title} onChange={handlechange} />
            </div>
            <div className='input_field'>
                <label>Author Name</label>
                <input name='authorname' value={bookDetail.authorname} onChange={handlechange} />
            </div>
            <div className='input_field'>
                <label>Published Year</label>
                <input name='year' type='number' value={bookDetail.year} onChange={handlechange} />
            </div>
            <button className='submit' onClick={() => {
                handleSubmit(bookDetail)
                setBookDetail({
                    isbn: '',
                    title: '',
                    authorname: '',
                    year: ''
                })
            }
        
            }>SUBMIT</button>
        </div>
        </div>
    )
}

export default AddBookForm
