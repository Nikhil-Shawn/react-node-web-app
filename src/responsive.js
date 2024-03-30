import { css } from 'styled-components';

export const mobile = (props) =>{
    return css `
    @media only screen and (max-width: 450px){
        ${props}
    }
    `
};

export const mobileS = (props) =>{
    return css `
    @media only screen and (max-width: 320px){
        ${props}
    }
    `
};

export const Tablet = (props) =>{
    return css `
    @media only screen and (min-width: 601px) and (max-width: 1023px) {
        ${props}
      }      
    `
};

