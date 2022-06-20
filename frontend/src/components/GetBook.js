import {useState, useEffect} from 'react';
import axios from 'axios';

const GetBook = ({isbn_data}) => {

    const [book, setBook] = useState({
        author: "",
        title: ""
    })

    let isbn = isbn_data;

    useEffect(() => {
        axios.get(`http://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=details&format=json`)
        .then(response => console.log(response))
        .then((response) => {
            setBook({
                author: response.data[`ISBN:${isbn}`].details.by_statement,
                title: response.data[`ISBN:${isbn}`].details.title
        })
    })}, [isbn]);

    console.log(book);
}

export default GetBook;