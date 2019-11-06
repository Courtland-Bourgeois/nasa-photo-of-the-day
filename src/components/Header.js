import React from 'react';

function Header(props) {

    return (
        <div className='App-header'>
            <h1>A.P.O.D.</h1>
            <h2>{props.date}</h2>
        </div>
    )
}

export default Header