import React from 'react';
import { Card, CardBody, CardTitle, Button, Row, Col } from 'reactstrap';
import './AppHead.css';


const AppHead = () => {
    return(
        <React.Fragment>
        <Card style={{marginBottom: "10px", border: 'none'}}>
            <CardBody>
                <CardTitle style={{fontSize:  '48px', paddingBottom: "12px"}}>Library Catalog</CardTitle>
                <Row>
                    <Col>
                        <Button className="button-grey">List Books</Button>
                    </Col>                    <Col>
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
            </CardBody>
        </Card>
        <h1 style={{marginTop: '60px'}}>Data Goes Here</h1>
        </React.Fragment>
        
    )
}

export default AppHead;