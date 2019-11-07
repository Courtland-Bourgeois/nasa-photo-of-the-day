import React from 'react';

function Header(props) {

    return (
        <div>
            <h1>A.P.O.D.</h1>
            <h2>Date: {props.date}</h2>
        </div>
    )
}

export default Header