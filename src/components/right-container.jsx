import React, { Component } from 'react';

class RightContainer extends Component {
    state = {  } 
    render() {
        return <div className="right-container">
            <div className="right-container-upper">
                <button className="btn-revert" onClick={this.props.onRevert}>🔙</button>
            </div>
            <div className="right-container-lower">
                <h1>➡❌</h1>
                <p>In den Warenkorb</p>
            </div>
        </div>;
    }
}

export default RightContainer;