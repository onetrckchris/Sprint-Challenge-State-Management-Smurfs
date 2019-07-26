import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNavbar = styled.nav`
    display: flex;
    align-items: center;
    padding-left: 20px;
    justify-content: space-between;
    height: 60px;
    border-bottom: 1px solid black;
`;

const SmurfDirections = styled(Link)`
    text-decoration: none;
    margin-right: 20px;
    color: black;

    &:hover {
        text-decoration: underline;
    }
`;

const Navbar = () => {
    return (
        <StyledNavbar>
            <h2>SMURFS! 2.0 W/ Redux</h2>
            <div>
                <SmurfDirections to="/add-smurf">Build-A-Smurf®</SmurfDirections>
                <SmurfDirections to="/">The Village</SmurfDirections>
            </div>
        </StyledNavbar>
    )
}

export default Navbar;