import React, { Component } from 'react';
// eslint-disable-next-line
import Header from '../components/Header.js';
import { Outlet } from 'react-router-dom';
export default class HomeTemplate extends Component {
    render() {
        return (
            <div>
                <Header />
                <Outlet />
            </div>
        );
    }
}
