import { Form, Row, Col, FormGroup, Label, Input, Container } from 'reactstrap';

const BookForm = () => {
    return (
       <Container>
        <Form>
            <Row>
                <Col md={6}>
                <FormGroup>
                    <Label for="author_fn">
                    Author (First Name)
                    </Label>
                    <Input
                    id="author_fn"
                    name="author_fn"
                    />
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Label for="author_ln">
                    Author (Last Name)
                    </Label>
                    <Input
                    id="author_ln"
                    name="author_ln"
                    />
                </FormGroup>
                </Col>
            </Row>
            <FormGroup>
                <Label for="title">
                Title
                </Label>
                <Input
                id="title"
                name="title"
                />
            </FormGroup>
            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label for="genre]">
                        Genre
                        </Label>
                        <Input
                        id="genre"
                        name="genre"
                        />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="isbn">
                        ISBN
                        </Label>
                        <Input
                        id="isbn"
                        name="isbn"
                        />
                    </FormGroup>
                </Col>
            </Row>
        </Form>
        </Container>
    )
}

export default BookForm;