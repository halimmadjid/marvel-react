import React from 'react';
// TODO: Add Bootstrap here 

interface Props{
    title: string;
}

export const Home = (props:any) => {
    return (
        <div>
            <h1>Hello World From React!</h1>
            <h4> { props.title } </h4>
        </div>
    )
}