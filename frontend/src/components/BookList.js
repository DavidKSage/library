import AppHead from "./AppMenu";
import axios from 'axios';
import { useState, useEffect } from 'react';

const BookList = () => {

    const [books, setBooks] = useState([]);
    let bookdata=[];

    useEffect(() => {
        axios.get("http://localhost:8000/api/v1/")
        .then(res => {
            bookdata = res.data;
            setBooks(bookdata)
        })
    }, []);

    return(
        <>
        <AppHead />
        <h1 style={{textAlign: "center"}}>Book List</h1>
        {books.map((book) => (
            <ul>
                <li key={book.url}>{book.title}</li>
            </ul>
        ))}
        </>
    )
}

export default BookList;