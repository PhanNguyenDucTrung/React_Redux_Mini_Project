import React, { Component } from 'react';
import './GameOanTuXi.css';
import Player from './Player.js';
import Computer from './Computer.js';
import KetQuaTroChoi from './KetQuaTroChoi.js';

export default class GameOanTuXi extends Component {
    render() {
        return (
            <div className='gameOanTuXi'>
                <div className='row text-center mt-5'>
                    <div className='col-4'>
                        <Player />
                    </div>
                    <div className='col-4'>
                        <KetQuaTroChoi />
                        <button className='btn btn-success p-3 mt-5'>Play game</button>
                    </div>
                    <div className='col-4'>
                        <Computer />
                    </div>
                </div>
            </div>
        );
    }
}
