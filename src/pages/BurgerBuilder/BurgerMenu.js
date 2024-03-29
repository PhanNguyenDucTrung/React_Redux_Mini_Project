import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addIngredient, removeIngredient } from '../../redux/reducers/burgerSlice';

export class BurgerMenu extends Component {
    renderMenu = () => {
        const { menu, addIngredient, removeIngredient } = this.props;
        return Object.entries(menu).map(([key, value], index) => {
            return (
                <tr key={index}>
                    <td>{key}</td>
                    <td>
                        <button
                            onClick={() => {
                                addIngredient(key);
                            }}>
                            +
                        </button>
                        <span>{this.props.burger[key]}</span>
                        <button
                            onClick={() => {
                                removeIngredient(key);
                            }}>
                            -
                        </button>
                    </td>
                    <td>{value}</td>
                    <td>{value * this.props.burger[key]}</td>
                </tr>
            );
        });
    };
    render() {
        const { totalPrice } = this.props;

        return (
            <div>
                <table className='tableMenu'>
                    <thead>
                        <tr>
                            <th>Thức ăn</th>
                            <th></th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>{this.renderMenu()}</tbody>
                    <tfoot>
                        <tr>
                            <td colSpan='2'></td>
                            <td>Tổng tiền</td>
                            <td>{totalPrice}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    burger: state.burger.burger,
    menu: state.burger.menu,
    totalPrice: state.burger.totalPrice,
});

const mapDispatchToProps = { addIngredient, removeIngredient };

export default connect(mapStateToProps, mapDispatchToProps)(BurgerMenu);
