import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ThongTinTroChoi extends Component {
    render() {
        const { soBanThang, soBanChoi, trangThai } = this.props;
        return (
            <div>
                <div className='display-4'>
                    BẠN CHỌN:
                    <span className='text-success'> {trangThai ? 'TÀI' : 'XỈU'}</span>
                </div>
                <div className='display-4'>
                    BÀN THẮNG:
                    <span className='text-primary'> {soBanThang}</span>
                </div>
                <div className='display-4'>
                    TỔNG SỐ BÀN CHƠI:<span className='text-success'> {soBanChoi}</span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    soBanThang: state.gameXucXac.soBanThang,
    soBanChoi: state.gameXucXac.soBanChoi,
    trangThai: state.gameXucXac.trangThai,
});

export default connect(mapStateToProps, null)(ThongTinTroChoi);
