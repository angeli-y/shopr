import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Product from './components/product'
import Navbar from './components/navbar'
import LeftContainer from './components/left-container'
import RightContainer from './components/right-container'
import Cart from './pages/Cart'

class App extends Component {
    state = { 
        items: []
     }
    addItem = (quantity, title, price) => {
        let currentItems = this.state.items;

        //check if item already exists
        let existingitem = this.state.items.find(item => item.title === title);
        if (existingitem) {
            existingitem.quantity++;
        } else {
            currentItems.push({
                quantity: quantity,
                title: title,
                price: price
            });
        }
        this.setState({items: currentItems});
        console.log(this.state.items);
    }

    //Revert Function
    handleRevert = () => {
        this.setState({items: []});
    }

    //Swipe Function
    handleSwipe = (e) => {
        const container = e.currentTarget;
        let startX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
        let currentX = startX;

        const handleMove = (e) => {
            currentX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
            const diff = currentX - startX;
            container.style.transform = `translateX(${diff}px) rotate(${diff * 0.1}deg)`;
        };

        const handleEnd = (e) => {
            const diff = currentX - startX;
            if (Math.abs(diff) > 100) { // Swipe threshold
                if (diff > 0) {
                    container.classList.add('swipe-right');
                } else {
                    container.classList.add('swipe-left');
                    this.addItem(1, 'Handschellen', 100);
                }
            } else {
                container.style.transform = '';
            }
            document.removeEventListener('mousemove', handleMove);
            document.removeEventListener('mouseup', handleEnd);
            document.removeEventListener('touchmove', handleMove);
            document.removeEventListener('touchend', handleEnd);
        };

        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', handleEnd);
        document.addEventListener('touchmove', handleMove);
        document.addEventListener('touchend', handleEnd);
    };

    //Keyboard Function
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (e) => {
        const container = document.querySelector('.middle-container');
        if (!container) return;

        if (e.key === 'ArrowLeft') {
            container.classList.add('swipe-left');
            this.addItem(1, 'Handschellen', 100);
        } else if (e.key === 'ArrowRight') {
            container.classList.add('swipe-right');
        }
    };
    

    render() {
        return (
            <Router>
                <React.Fragment>
                    <Navbar/>
                    <Routes>
                        <Route path="/cart" element={
                            <Cart 
                                items={this.state.items}
                                onRevert={this.handleRevert}
                            />
                        } />
                        <Route path="/" element={
                            <div className="container">
                                <div className="left-container">
                                    <LeftContainer/>
                                </div>
                                <div className="middle-container" onMouseDown={this.handleSwipe} onTouchStart={this.handleSwipe}>
                                    <div className="product-container">
                                        <Product onAdd={() => this.addItem(1, 'Handschellen', 100)} image = "Handschellen.jpg" title = "Handschellen" price = "100" description = "Handschellen"/>
                                    </div>
                                </div>
                                <div className="right-container">
                                    <RightContainer/>
                                </div>
                            </div>
                        } />
                    </Routes>
                </React.Fragment>
            </Router>
        );
    }
}

export default App;