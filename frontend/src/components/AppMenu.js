import React from 'react';
import { Card, CardBody, CardTitle, Button, Row, Col } from 'reactstrap';
import { useNavigate } from "react-router-dom";

import './AppMenu.css';
import '../App.css';

const AppMenu = () => {

    const navigate = useNavigate();
   
    return(
        <React.Fragment>
        <Card style={{marginBottom: "10px", border: 'none', textAlign: "center"}}>
            <CardBody>
                <CardTitle onClick={() => navigate("/")} style={{fontSize:  '48px', paddingBottom: "24px", textAlign: 'center'}}>Library Catalog</CardTitle>
                <Row>
                    <Col></Col>
                    <Col>
                        <Button onClick={() => navigate("/booklist")} className="button-grey">List Books</Button>
                    </Col>                    
                    <Col>
                        <Button onClick={() => navigate("/bookaction")} className="button-grey">Add/Update/Remove Book</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => navigate("/search")} className="button-grey">Search</Button>
                    </Col>
                    <Col></Col>
                </Row>
            </CardBody>
        </Card>
        </React.Fragment>
        
    )
}

export default AppMenu;