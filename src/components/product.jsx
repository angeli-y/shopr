import React, { Component } from 'react';

class Product extends Component {
    state = {  } 
    render() { 
        return <div className="item-container" styles={{width: "18rem"}}>
        <img src={"/assets/img/" + this.props.image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
          <p className="card-text">{this.props.price}$</p>
          <div className="button-container">
                <button onClick={this.props.onAdd} href="/" className="btn-shopping-cart">🛒</button>
                <button href="/" className="btn-dismiss">👎</button>
          </div>
          <a href="/" className="btn-more">Mehr erfahren...</a>
        </div>
        <div className="info-container">
            <p>◄ ► Nutze die Pfeiltasten um zu blättern</p>
        </div>
      </div>;
    }
}
 
export default Product;