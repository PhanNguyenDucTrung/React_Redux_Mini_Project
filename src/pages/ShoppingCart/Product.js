import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, removeProductCart } from '../../redux/reducers/shoppingCartSlice.js';

export class Product extends Component {
    render() {
        const { product } = this.props;

        return (
            <div className='card'>
                <img src={product.image} className='card-img-top' alt={product.name} />
                <div className='card-body'>
                    <h5 className='card-title'>{product.name}</h5>
                    <p className='card-text'>{product.price} $$</p>
                    <p className='card-text'>{product.description}</p>
                    <button
                        className='btn btn-primary'
                        onClick={() => {
                            this.props.addToCart(product);
                        }}>
                        Add to cart
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    shoppingCart: state.shoppingCart,
});
const mapDispatchToProps = { addToCart, removeProductCart };
export default connect(mapStateToProps, mapDispatchToProps)(Product);
