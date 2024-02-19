import styled from 'styled-components';

export const Button = styled.button`
    background: linear-gradient(#f74c0b, #ec4736);
    color: #fff;
    color: ${props => (props.primary ? '#299fff' : '#fff')};
    border: none;
    border-radius: 0.5rem;
    font-weight: bold;
    padding: 1rem;
    opacity: 1;
    &:hover {
        opacity: 0.7;
        transition: all 0.5s;
    }
    &.button_style {
        font-size: 1.5rem;
    }
`;

export const SmallButton = styled(Button)`
    background: orange;
    font-size: 0.5rem;
`;
