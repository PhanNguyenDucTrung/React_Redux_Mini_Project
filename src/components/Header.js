import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    handleActiveClassName = () => {
        return ({ isActive }) => (isActive ? 'dropdown-item bg-warning text-light fw-bold' : 'dropdown-item');
    };

    handleActiveStyle = () => {
        return ({ isActive }) => (isActive ? { border: '1px solid red' } : {});
    };

    render() {
        return (
            <div>
                <nav className='navbar navbar-expand-lg bg-dark'>
                    <div className='container-fluid'>
                        <NavLink className='navbar-brand text-light' to='/'>
                            Navbar
                        </NavLink>
                        <button
                            className='navbar-toggler'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#navbarSupportedContent'
                            aria-controls='navbarSupportedContent'
                            aria-expanded='false'
                            aria-label='Toggle navigation'>
                            <span className='navbar-toggler-icon' />
                        </button>
                        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                                <li className='nav-item'>
                                    <NavLink className='nav-link active text-light' aria-current='page' to='/'>
                                        Home
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink className='nav-link text-light' to='/'>
                                        Link
                                    </NavLink>
                                </li>
                                <li className='nav-item dropdown'>
                                    <a
                                        className='nav-link dropdown-toggle text-light'
                                        href='#'
                                        role='button'
                                        data-bs-toggle='dropdown'
                                        aria-expanded='false'>
                                        Redux
                                    </a>
                                    <ul className='dropdown-menu'>
                                        <li>
                                            <NavLink
                                                className={this.handleActiveClassName()}
                                                style={this.handleActiveStyle()}
                                                to='redux-bookingmovies'>
                                                Đặt vé xem phim
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                className={this.handleActiveClassName()}
                                                style={this.handleActiveStyle()}
                                                to='redux-burger'>
                                                Burger Builder
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                className={this.handleActiveClassName()}
                                                style={this.handleActiveStyle()}
                                                to='redux-baucua'>
                                                Game Bầu Cua
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                className={this.handleActiveClassName()}
                                                style={this.handleActiveStyle()}
                                                to='redux-oantuxi'>
                                                Game Oẳn Tù Xì
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                className={this.handleActiveClassName()}
                                                style={this.handleActiveStyle()}
                                                to='redux-xucxac'>
                                                Game Xúc Xắc
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                className={this.handleActiveClassName()}
                                                style={this.handleActiveStyle()}
                                                to='redux-shoppingcart'>
                                                Giỏ Hàng
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                className={this.handleActiveClassName()}
                                                style={this.handleActiveStyle()}
                                                to='redux-todolist'>
                                                To do list
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
