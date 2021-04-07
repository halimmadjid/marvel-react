import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { server_calls } from '../../api';
import { Container } from 'react-bootstrap';
import '../../styles.css';

type Inputs = {
    name: string,
    model: string,
    prince: number
}

export const UpdateMarvel = () => {
    {/* Set up communication of state via the router location */}
    const location:any = useLocation();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data:any) => {
        console.log(data, location)
        server_calls.update(location.state.marvel_id,data)
    }
    return (
        <Container>
            <h1>Update Your Marvel</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Marvel Name</label>
                <input type="text" name="name" id="name" placeholder="Update Your Marvel" ref= { register } />

                <label htmlFor="name">Marvel Model</label>
                <input type="text" name="model" id="model" placeholder="Update Your Marvel Model" ref= { register } />

                <label htmlFor="name">Marvel Price </label>
                <input type="text" name="price" id="price" placeholder="Update Your Marvel Price" ref= { register } />

                <button type="submit" className="button-styles">Submit</button>
            </form>
        </Container>
    )
}