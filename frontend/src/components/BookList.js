import AppHead from "./AppMenu";
import axios from 'axios';
import { useState, useEffect } from 'react';

const BookList = () => {

    const [books, setBooks] = useState(
        {
            url: "",
            author_name: "",
            title: "",
            genre: "",
            isbn: ""
        }
    );

    useEffect(() => {
        axios.get("http://localhost:8000/api/v1/")
        .then(res => {
            setBooks(res.data)
        })
        .then(console.log(books))
    }, []);

    return(
        <>
        <AppHead />
        <h1>Book List</h1>
        </>
    )
}

export default BookList;