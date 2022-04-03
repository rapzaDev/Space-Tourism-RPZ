import styled from 'styled-components';

export const Container = styled.header`
    position: relative;
    display: flex;
    align-items: center;
    gap: 31.6875rem;

    padding-left: 3.4375rem;

    height: 6rem;
    max-width: 100%;

    margin-top: 2.5rem;

    .logo {
        width: 3rem;
        height: 3rem;
    }
`;

export const HeaderLine = styled.div`
    z-index: 1;
    position: absolute;

    max-width: 29.5625rem;
    width: 100%;
    height: 1px;

    background-color: #979797;
    opacity: 25.15%;

    left: 10.4375rem;
`;

export const NavContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    
    height: 100%;
    width: 100%;

    background-color: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.55px);
    -webkit-backdrop-filter: blur(81.55px);
    
    #nav-buttons {
        margin-top: 38px;
        margin-left: 7.6875rem;
    }
`;