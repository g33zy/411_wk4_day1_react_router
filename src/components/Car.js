import React from 'react'
import cars from '../cars.json'
import { useParams } from "react-router-dom"
import { Container, Paper, Chip } from '@mui/material'


// import MUI components here //
// Container, Paper, Chip //

const Car = () => {
    const { id } = useParams();
    // const carId = useParams().carId non destructured
    console.log(typeof id);
    const car = cars.find((car) => car.id === parseInt(id));
    console.log(Object.keys(car));
    console.log(car)
    Object.keys(car).map((key, index) => console.log(car[key]));
    return (
        <Container 
            sx={{
                width: "40%",
                mx: "auto",
                mt: 5,
            }}
        >
            <Paper sx={{ padding: "40px" }}>
             <h1> {car.Name} </h1>
             {Object.keys(car).map((key, index) => (
                <Chip key={index} label={`${key}: ${car[key]}`} />
                
             ))}
             </Paper>
        </Container>
    );
};

export default Car