import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from './Cart.js';
import Product from './Product.js';

const dataProduct = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        price: 500,
        image: 'https://picsum.photos/200/200',
        description: 'Sản phẩm do apple sản xuất',
        inventory: 10,
        rating: 3,
    },
    {
        id: 2,
        name: 'Samsung Galaxy S7',
        price: 400,
        image: 'https://picsum.photos/200/200',
        description: 'Sản phẩm do Samsung sản xuất',
        inventory: 15,

        rating: 4,
    },
    {
        id: 3,
        name: 'Oppo F1s',
        price: 300,
        image: 'https://picsum.photos/200/200',
        description: 'Sản phẩm do Oppo sản xuất',
        inventory: 5,
        rating: 5,
    },
];
export class ShoppingCart extends Component {
    renderProduct = () => {
        return dataProduct.map((product, index) => {
            return (
                <div className='col-sm-6 col-lg-3 col-md-4' key={index}>
                    <Product product={product} />
                </div>
            );
        });
    };
    render() {
        return (
            <div className='container'>
                <h3>Product list</h3>
                <Cart />
                <div className='row'>{this.renderProduct()}</div>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
