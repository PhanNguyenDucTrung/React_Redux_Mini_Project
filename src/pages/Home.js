import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div
                style={{
                    height: '100vh',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'url(../../../images/background/bg2.jpg) no-repeat center center fixed',
                    backgroundSize: '100% 100%',
                }}>
                <h1 className='text-center display-3 text-white'>This is my Homepage</h1>
            </div>
        );
    }
}
