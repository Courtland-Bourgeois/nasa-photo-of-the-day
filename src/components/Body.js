import React from 'react';

function Body(props) {

    return (
        <div>
            <img src={props.url} alt='Astronomy POD'></img>
            <p>{props.explanation}</p>
        </div>
    )
}

export default Body