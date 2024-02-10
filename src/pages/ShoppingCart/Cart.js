import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, decreaseQuantity, removeProductCart } from '../../redux/reducers/shoppingCartSlice.js';

export class Cart extends Component {
    renderCartItem = () => {
        const { addToCart, decreaseQuantity, removeProductCart } = this.props;
        if (this.props.shoppingCart.length === 0) {
            return (
                <tr>
                    <td colSpan='7'>Empty Cart</td>
                </tr>
            );
        }
        return this.props.shoppingCart.map((product, index) => {
            return (
                <tr key={index}>
                    <td>{product.id}</td>
                    <td>
                        <img src={product.image} alt={product.name} style={{ width: 50 }} />
                    </td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                        <button
                            className='btn'
                            onClick={() => {
                                addToCart(product);
                            }}>
                            +
                        </button>
                        {product.quantity}
                        <button
                            className='btn'
                            onClick={() => {
                                decreaseQuantity(product.id);
                            }}>
                            -
                        </button>
                    </td>
                    <td>{product.price * product.quantity}</td>
                    <td>
                        <button
                            className='btn btn-danger'
                            onClick={() => {
                                removeProductCart(product.id);
                            }}>
                            <i className='fa fa-trash'></i>
                        </button>
                    </td>
                </tr>
            );
        });
    };
    render() {
        return (
            <>
                <button type='button' className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#exampleModal'>
                    Shopping Cart (0)
                </button>

                <div
                    className='modal fade'
                    id='exampleModal'
                    tabIndex={-1}
                    aria-labelledby='exampleModalLabel'
                    aria-hidden='true'>
                    <div className='modal-dialog modal-lg'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <h1 className='modal-title fs-5' id='exampleModalLabel'>
                                    <i className='fa fa-cart-plus'></i> Cart (0)
                                </h1>

                                <button
                                    type='button'
                                    className='btn-close'
                                    data-bs-dismiss='modal'
                                    aria-label='Close'
                                />
                            </div>
                            <div className='modal-body'>
                                <table className='table text-center'>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>{this.renderCartItem()}</tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    shoppingCart: state.shoppingCart,
});

const mapDispatchToProps = {
    addToCart,
    decreaseQuantity,
    removeProductCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
