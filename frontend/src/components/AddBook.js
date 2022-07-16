import AppHead from "./AppMenu";
import BookForm from './BookForm';
import { Button, Container } from "reactstrap";

const AddBook = () => {

    const Add = () => {
        alert("Book Added");
    }
    
    return(
        <>
        <AppHead />
        <BookForm />
        <Container>
            <Button onClick={Add}>
                Add Book
            </Button>
        </Container>
        </>
    )
}

export default AddBook;