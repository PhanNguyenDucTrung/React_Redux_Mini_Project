import React, { Component } from 'react';
import Burger from './Burger.js';
import './BurgerBuilder.css';
import BurgerMenu from './BurgerMenu.js';

export default class BurgerBuilder extends Component {
    render() {
        return (
            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-7'>
                        <h1 className='text-center'>Burger Builder</h1>
                        <Burger />
                    </div>
                    <div className='col-5'>
                        <h2>Chọn thức ăn</h2>
                        <BurgerMenu />
                    </div>
                </div>
            </div>
        );
    }
}
