import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {  } 
    render() { 
        return <nav className="navbar">
            <div className="container-fluid">
                <Link to="/">
                    <img src="/assets/img/ShopRLogo(Big).png" alt="logo" className="logo"/>
                </Link>
                <Link to="/cart" className="shopping-cart" onClick={this.props.onRevert}>
                    🛒
                </Link>
            </div>
        </nav>
    }
}
 
export default Navbar;