import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secundary' | 'danger' | 'success';

interface ButtonContainerProps {
    variant: ButtonVariant; 
}

const ButtonVariants = {
    primary: 'grey',
    secundary: 'orange',
    danger: 'red',
    success: 'green'
};

export const ButtonContainer = styled.button<ButtonContainerProps> `
    width: 100px;
    height: 40px;
    border-radius: 6px;
    border: 0;
    margin: 8px;

    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.secundary};


/* ${props => {
    return css`
    background-color: ${ButtonVariants[props.variant]}`
}}*/
` 
