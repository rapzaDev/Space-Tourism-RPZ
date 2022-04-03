import styled from 'styled-components';

export const Container = styled.button`
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

`;

export const Content = styled.div`
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
    }
`;

export const Underline = styled.div`
    position: relative;
    width: 100%;
    height: 3px;

    transition-duration: 0.2s;
    transition-timing-function: linear;

    &.active {
        background-color: ${(props) => props.theme.colors.white};
    }
`;