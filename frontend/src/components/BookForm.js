import { Form, Row, Col, FormGroup, Label, Input, Container } from 'reactstrap';

const BookForm = () => {
    return (
       <Container>
        <Form>
            <Row>
                <Col md={6}>
                <FormGroup>
                    <Label for="authorFNLabel">
                    Author (First Name)
                    </Label>
                    <Input
                    id="authorFN"
                    name="authorFN"
                    />
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Label for="authorLNLable">
                    Author (Last Name)
                    </Label>
                    <Input
                    id="authorLN"
                    name="authorLN"
                    />
                </FormGroup>
                </Col>
            </Row>
            <FormGroup>
                <Label for="titleLabel">
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
                    <Label for="isbnLabel">
                    ISBN
                    </Label>
                    <Input
                    id="isbn"
                    name="isbn"
                    />
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Label for="genreLabel">
                    Genre
                    </Label>
                    <Input
                    id="genre"
                    name="genre"
                    />
                </FormGroup>
                </Col>
            </Row>
        </Form>
        </Container>
    )
}

export default BookForm;