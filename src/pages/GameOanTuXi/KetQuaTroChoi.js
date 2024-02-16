import React, { Component } from 'react';

export default class KetQuaTroChoi extends Component {
    render() {
        return (
            <div>
                <div className='display-4 text-warning'>Bạn thua !!!</div>
                <div className='display-4 text-success'>Số bàn thắng: </div>
                <div className='display-4 text-success'>Số bàn thua: </div>
            </div>
        );
    }
}
