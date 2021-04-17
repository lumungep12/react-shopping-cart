import React, { Component } from 'react';
import Filter from '../Components/Filter';
import Products from '../Components/Products';
import Cart from '../Components/Cart';

export default class HomeScreen extends Component {
    render() {
        return (
            <div>
                <div className="content">
                    <div className="mainContent">
                        <Filter />
                        <Products />
                    </div>
                    <div className="sideBar">
                        <Cart/>
                    </div>
                </div>
            </div>
        )
    }
}
