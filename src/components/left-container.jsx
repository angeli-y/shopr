import React, { Component } from 'react';

class LeftContainer extends Component {
    state = {  } 
    render() {
        return <div className="left-container">
            <div className="left-container-lower">
                <h1>🛒⬅</h1>
                <p>In den Warenkorb</p>
            </div>
        </div>;
    }
}

export default LeftContainer;