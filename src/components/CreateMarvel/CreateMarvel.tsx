import React from 'react';
import { useForm } from 'react-hook-form';
import { server_calls } from '../../api';
import { Jumbotron, Container, Col, Row } from 'react-bootstrap';

type Inputs = {
    name: string; 
    model: string, 
    price: number
}

export const CreateMarvel = () => {

    {/* Creating a deconstructed value for useForm Hook */}
    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit = (data:any) => {
        console.log(data)
        server_calls.create(data)
    }
    return (
        <Container>
            <h1>Create Your New Marvel</h1>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <label htmlFor="name"> Marvel Name</label>
                <input type="text" name="name" maxLength={100} id="name" placeholder="Add Marvel Name" ref={ register }/>
                <label htmlFor="model">Marvel Model </label>
                <input type="text" name="model" id="model" placeholder="Add Marvel Model" ref={ register }/>
                <label htmlFor="price">Marvel Price </label>
                <input type="text" name="price" id="price" placeholder="Add Marvel Price" ref={ register }/>
                <button type="submit" className="button-styles">Submit Marvel</button>
            </form>
        </Container>
    )
}