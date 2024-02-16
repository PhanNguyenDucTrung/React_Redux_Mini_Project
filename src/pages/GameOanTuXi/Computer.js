import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Computer extends Component {
    render() {
        return (
            <div className='playerGame'>
                <div className='theThink'>
                    <img style={{ width: 80, height: 80 }} className='mt-4' src={this.props.computer.img} alt='bua' />
                </div>
                <div className='speech-bubble'></div>
                <img
                    style={{ width: 200, height: 200 }}
                    src='../../../images/gameOanTuXi/playerComputer.png'
                    alt='computer'
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        computer: state.gameOanTuXi.computer,
    };
};

export default connect(mapStateToProps)(Computer);
