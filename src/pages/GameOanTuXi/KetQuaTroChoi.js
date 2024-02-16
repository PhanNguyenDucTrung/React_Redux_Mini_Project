import React, { Component } from 'react';
import { connect } from 'react-redux';

export class KetQuaTroChoi extends Component {
    render() {
        return (
            <div>
                <div className='display-4 text-warning'>{this.props.ketQua}</div>
                <div className='display-4 text-success'>Số bàn thắng: {this.props.soBanThang}</div>
                <div className='display-4 text-success'>Số bàn thua: {this.props.soBanThua}</div>
            </div>
        );
    }
}

const matchStateToProps = state => {
    return {
        ketQua: state.gameOanTuXi.ketQua,
        soBanThang: state.gameOanTuXi.soBanThang,
        soBanThua: state.gameOanTuXi.soBanThua,
    };
};

export default connect(matchStateToProps)(KetQuaTroChoi);
