import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectItem } from '../../redux/reducers/gameOanTuXiSlice.js';

export class Player extends Component {
    render() {
        return (
            <div className='playerGame'>
                <div className='theThink'>
                    <img
                        style={{ width: 80, height: 80, transform: 'rotate(120)' }}
                        className='mt-4'
                        src={this.props.player.img}
                        alt='bua'
                    />
                </div>
                <div className='speech-bubble'></div>
                <img style={{ width: 200, height: 200 }} src='../../../images/gameOanTuXi/player.png' alt='player' />

                <div className='row'>
                    {this.props.mangDatCuoc.map((item, index) => {
                        let border = {};
                        if (item.datCuoc) {
                            border = { border: '3px solid orange' };
                        }

                        return (
                            <div className='col-4' key={index}>
                                <button
                                    style={border}
                                    className='btnItem'
                                    onClick={() => {
                                        this.props.selectItem(item.ma);
                                    }}>
                                    <img src={item.img} alt={item.ma} />
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        mangDatCuoc: state.gameOanTuXi.mangDatCuoc,
        player: state.gameOanTuXi.player,
    };
};

const mapDispatchToProps = {
    selectItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
