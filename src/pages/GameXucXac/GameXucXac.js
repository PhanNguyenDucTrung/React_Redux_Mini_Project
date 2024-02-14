import React, { Component } from 'react';
import * as XucXacImages from '../../assests/images/gameXucXac/index.js';
import './GameXucXac.css';
import XucXac from './XucXac.js';
import ThongTinTroChoi from './ThongTinTroChoi.js';

console.log(XucXacImages);
export default class GameXucXac extends Component {
    render() {
        return (
            <div
                className='game pt-3'
                style={{
                    backgroundImage: `url(${XucXacImages.bgGame})`,
                }}>
                <h2 className='title-game text-center display-4'>Game Xúc Xắc</h2>
                {/* <img src={XucXacImages.img1} alt='' /> */}

                <div className='row text-center mt-5'>
                    <div className='col-5'>
                        <button className='btnGame'>Tài</button>
                    </div>
                    <div className='col-2'>
                        <XucXac />
                    </div>
                    <div className='col-5'>
                        <button className='btnGame'>Xỉu</button>
                    </div>
                </div>

                <div className='thongTinTroChoi text-center'>
                    <ThongTinTroChoi />

                    <button className='btn btn-success p-2 btn-lg mt-4'>Play game</button>
                </div>
            </div>
        );
    }
}
