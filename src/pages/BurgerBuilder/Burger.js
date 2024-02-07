import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Burger extends Component {
    renderBurger = () => {
        const { burger } = this.props;
        return Object.entries(burger).map(([key, value], index) => {
            let burgerItem = [];
            for (let i = 0; i < value; i++) {
                burgerItem.push(<div key={`${i}`} className={key}></div>);
            }
            return burgerItem;
        });
    };

    render() {
        return (
            <div>
                <div className='breadTop'></div>
                {this.renderBurger()}
                <div className='breadBottom'></div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        burger: state.burger.burger,
    };
};

export default connect(mapStateToProps)(Burger);
