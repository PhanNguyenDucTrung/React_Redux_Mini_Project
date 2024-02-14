import React, { Component } from 'react';
import { NavLink, Outlet, Navigate } from 'react-router-dom';

export default class AdminTemplate extends Component {
    constructor(props) {
        super(props);
        this.checkIsLogin();
        this.state = {
            isLogin: this.checkIsLogin(),
        };
    }
    checkIsLogin = () => {
        if (localStorage.getItem('userLogin')) {
            return <Navigate to='/' replace={false} />;
        }
    };

    render() {
        return (
            <div className='d-flex '>
                <div className='w-25 bg-dark text-white p-5' style={{ minHeight: '100vh' }}>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to='users'> Product Management</NavLink>
                            </li>
                            <li>
                                <NavLink to='products'> User Management</NavLink>
                            </li>
                            <li>Category Management</li>
                            <li>Movie Management</li>
                        </ul>
                    </nav>
                </div>
                <div className='w-75 p-5' style={{ minHeight: '100vh' }}>
                    <Outlet />
                </div>
            </div>
        );
    }
}
