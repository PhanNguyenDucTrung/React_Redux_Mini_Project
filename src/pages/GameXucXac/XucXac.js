import React, { Component } from 'react';
import * as XucXacImages from '../../assests/images/gameXucXac/index.js';

export default class XucXac extends Component {
    render() {
        return (
            <div className='xucXacContainer'>
                <div className='xucXacItem'>
                    <img src={XucXacImages.img1} alt='img1' />
                </div>
                <div className='xucXacItem'>
                    <img src={XucXacImages.img2} alt='img2' />
                </div>
                <div className='xucXacItem'>
                    <img src={XucXacImages.img3} alt='img3' />
                </div>
            </div>
        );
    }
}
