import React, { Component } from 'react';
import { Button, SmallButton } from '../Components/Button.js';
import { StyledLink } from '../Components/Link.js';
import { TextField } from '../Components/TextField.js';

export default class DemoStyleComponet extends Component {
    render() {
        return (
            <div className='container'>
                <h2 className='mt-2'>DemoStyleComponet</h2>
                <div>
                    <Button primary>Styled Component</Button>
                    <hr />
                    <Button className='button_style'>Styled Component</Button>
                    <hr />
                    <SmallButton>Small Button</SmallButton>
                    <div className='p-2'>
                        <StyledLink id='abc' name='123abc'>
                            Styled Link
                        </StyledLink>
                    </div>
                    <TextField inputColor='green' />
                </div>
            </div>
        );
    }
}
