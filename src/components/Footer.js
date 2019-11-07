import React from 'react';
import styled from 'styled-components';

const Link = styled.div`
    background-color: #282c34;
    padding: 5%;
    font-size: calc(10px + 2vmin);
    text-align: center;

    a {
        text-decoration: none;
        color: white;
    }
`;

function Footer(props) {

    return (
        <Link>
            <nav>
                <a href='https://www.nasa.gov/'>NASA SITE</a>
            </nav>
        </Link>
    )
}

export default Footer