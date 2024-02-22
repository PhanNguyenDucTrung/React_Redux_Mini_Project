import styled, { ThemeProvider } from 'styled-components';
import React, { useState } from 'react';

const DivStyle = styled.div`
    color: ${props => props.theme.color};
    padding: 20px;
    background-color: ${props => props.theme.background};
    font-size: ${props => props.theme.fontSize};
    font-weight: ${props => props.theme.fontWeight};
`;

export const DemoTheme = propsComponent => {
    const configTheme = { color: '#fcfcfcff', background: '#0d3b54ff', fontSize: '15px', fontWeight: 'normal' };

    const configLightTheme = { color: '#2d3138ff', background: '#b4c487ff', fontSize: '13px', fontWeight: 'bold' };

    const [isLightTheme, setIsLightTheme] = useState(false);

    const theme = isLightTheme ? configLightTheme : configTheme;
    return (
        <ThemeProvider theme={theme}>
            <div className='container'>
                <h2>DemoTheme</h2>
                <DivStyle>Hello Tôi là Trùm Yassuo</DivStyle>
                <button
                    className='btn btn-dark mt-3'
                    onClick={() => {
                        setIsLightTheme(!isLightTheme);
                    }}>
                    Switch Theme
                </button>
            </div>
        </ThemeProvider>
    );
};
