import React, { useState, useEffect } from 'react';
import { useGetData } from '../../custom-hooks';
import { Jumbotron, Button, Container, Card, Col, Row } from 'react-bootstrap';
import marvel from '../../assets/img/marvel.svg';

import { useHistory } from 'react-router-dom';
import { server_calls } from '../../api';
//TODO: Import Bootstrap

export const Marvel = () => {

    const history:any = useHistory();

    {/* Creating history route function == routeChange 
    using "?" means it's optional. If we have it or not. */}
    const routeChange = (id?:string, path?:string) => {
        history.push({
            pathname: path,
            state: { marvel_id: id }
        })
    }

    let { marvelData, getData } = useGetData();
    console.log(marvelData)

    const handleDeleteMarvel = (id:any) => {
        server_calls.delete(id);
        getData()
    } 

    return (
        <Container>
            <Row>
                <Col>
                    <Jumbotron>
                        <h1>Hello X-Men</h1>
                        <p>Here are your current collection of Marvel Characters!</p>
                        <Button onClick = { () => routeChange('','create') }> Create New Character</Button>
                    </Jumbotron>
                </Col>
            </Row>
            {/* Row to display Data */}
            <Row>
                <Col>
                    <div>
                        {marvelData.map((item:any) => (
                            <div key='item.id'>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={marvel} />
                                    <Card.Body>
                                        <Card.Title>
                                            { item.name }
                                        </Card.Title>
                                        <Card.Title>
                                            { item.model }
                                        </Card.Title>
                                        <Card.Title>
                                            { item.price }
                                        </Card.Title>
                                        <Button variant="danger" onClick = { () => handleDeleteMarvel(item.id) }>Delete</Button>
                                        <Button variant="primary" onClick = { () => routeChange(item.id, 'update') }>Update</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                            
                        ))}
                    </div>
                </Col>
            </Row>

        </Container>
        
        
    )
}
