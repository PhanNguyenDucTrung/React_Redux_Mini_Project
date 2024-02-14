import React, { Component } from 'react';
import * as XucXacImages from '../../assests/images/gameXucXac/index.js';
import { connect } from 'react-redux';

export class XucXac extends Component {
    render() {
        const { xucXac } = this.props;
        return (
            <div className='xucXacContainer'>
                {xucXac.map((item, index) => {
                    return (
                        <div className='xucXacItem' key={index}>
                            <img src={XucXacImages[`img${item}`]} alt={`img${item}`} />
                        </div>
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    xucXac: state.gameXucXac.xucXac,
});

export default connect(mapStateToProps, null)(XucXac);
