import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import './AppHead.css';


const AppHead = () => {
    return(
        <React.Fragment>
        <Card style={{marginBottom: "10px", border: 'none'}}>
            <Card.Body>
                <Card.Title style={{fontSize:  '48px'}}>Simple Library Catalog</Card.Title>
                <Row style={{paddingTop: "6px"}}>
                    <Col>
                        <Button className="button-grey">Add Book</Button>
                    </Col>
                    <Col>
                        <Button className="button-grey">Update Book</Button>
                    </Col>
                    <Col>
                        <Button className="button-grey">Remove Book</Button>
                    </Col>
                    <Col>
                        <Button className="button-grey">Search Catalog</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
        Test
        </React.Fragment>
        
    )
}

export default AppHead;