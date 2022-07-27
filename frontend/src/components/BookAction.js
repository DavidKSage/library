import AppHead from "./AppMenu";
import BookForm from './BookForm';
import { Button, Container, Row, Col } from "reactstrap";

const BookAction = () => {

    const Add = () => {
        alert("Book Added");
    }

    const Edit = () => {
        alert("Book Edited");
    }

    const Delete = () => {
        alert("Book Deleted");
    }
    
    return(
        <>
        <AppHead />
        <BookForm />
        <Container style={{marginTop: '2em'}}>
            <Row style={{textAlign: "center"}}>
                <Col>
                    <Button className="button-grey" onClick={Add}>
                        Add Book
                    </Button>
                </Col>
                <Col>
                    <Button className="button-grey" onClick={Edit}>
                        Update Book
                    </Button>
                </Col>
                <Col>
                    <Button className="button-grey" onClick={Delete}>
                        Delete Book
                    </Button>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default BookAction;