import React from 'react';
import styled from 'styled-components';

const SmurfBox = styled.div`
    min-width: 30%;
    border: 1px solid black;
    border-radius: 5px;
    margin-bottom: 20px;
`;

const Smurf = (props) => {
    // console.log("This is an individual smurf: ", props.smurf);
    return (
        <SmurfBox>
            <h3>{props.smurf.name}</h3>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
        </SmurfBox>
    )
}

export default Smurf;