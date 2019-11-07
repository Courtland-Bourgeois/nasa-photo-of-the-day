import React from 'react';
import styled from 'styled-components';

const ImageContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1%;
`;

const Paragraph = styled.p`
    width: 50%;
`;

function Body(props) {

    return (
        <ImageContent>
            <img src={props.url} alt='Astronomy POD'></img>
            <Paragraph>{props.explanation}</Paragraph>
        </ImageContent>
    )
}

export default Body