import styled, { css } from 'styled-components';

type ButtonType = {
    bttnType: 'category' | 'planet' | 'crew-member' | 'technology';
    active?: boolean;
}

export const Container = styled.button<ButtonType>`
    ${(props) => 
        ( (props.bttnType === 'category') || (props.bttnType === 'planet') ) && css`
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;

            gap: 2.1875rem;

            background: none;
            border: none;

            cursor: pointer;

            color: ${(props) => props.theme.colors.white};

            &:hover {
                .underline {
                    background-color: ${(props) => props.theme.colors.white};
                    opacity: 0.5;

                    &.active {
                        opacity: 1;
                    }
                }
            }       
        ` || (props.bttnType === 'crew-member') && css`
            display: contents;
        `
    }
`;

export const Content = styled.div<ButtonType>`
    ${(props) => 
        (props.bttnType === 'category') && css`
            display: flex;
            position: relative;
            gap: 0.6875rem;

            .number {
                font: ${(props) => props.theme.fonts.NavText};
                font-weight: bold;
            }

            .title {
                font: ${(props) => props.theme.fonts.NavText};
                opacity: 90%;
                text-transform: uppercase;

                letter-spacing: 2.7px;
            }     
        `
        || (props.bttnType === 'planet') && css `
            display: flex;
            position: relative;

            .title {
                font: ${(props) => props.theme.fonts.NavText};
                ${ props.active ? css`
                    color: ${props => props.theme.colors.white};
                ` : css`
                    color: ${props => props.theme.colors.secundary};
                ` };

                opacity: 90%;
                text-transform: uppercase;

                letter-spacing: 2.7px;
            }   
        `
        || (props.bttnType === 'crew-member') && css`
            background: ${props => props.theme.colors.white};
            ${!props.active && css` opacity: 0.17; ` }

            height: 0.93rem;
            width: 0.93rem;
            border-radius: 100%;
            
            cursor: pointer;

            .title {
                display: none;
            }  

            &:hover {
                transition: 0.2s linear; 
                ${!props.active && css` opacity: 0.5; ` }
            }
        `
    }
`;

export const Underline = styled.div<ButtonType>`    
    display: ${(props) => ( (props.bttnType === 'crew-member') || (props.bttnType === 'technology') ) && 'none'};
    
    position: relative;
    width: 100%;
    height: 3px;

    transition-duration: 0.2s;
    transition-timing-function: linear;

    &.active {
        background-color: ${(props) => props.theme.colors.white};
    }
`;