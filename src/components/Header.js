import React from 'react';
import styled from 'styled-components';

const Head = styled.div`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    text-align: center;
`;

function Header(props) {

    return (
        <Head>
            <h1>A.P.O.D.</h1>
            <h2>Date: {props.date}</h2>
        </Head>
    )
}

export default Header