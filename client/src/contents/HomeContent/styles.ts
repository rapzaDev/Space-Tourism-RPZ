import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  position: relative;
  display: flex;
  align-items: flex-end;
  
  gap: 24.125rem;
  
  padding-left: 10.3rem;

  margin-top: 15.6875rem;
  margin-bottom: 8.1875rem;
`;

export const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;

  gap: 1.5rem;
  
  max-width: 28.1rem;

  h5 {
    font: ${(props) => props.theme.fonts.Heading5};
    color: ${(props) => props.theme.colors.secundary};

    text-transform: uppercase;

    letter-spacing: 4.72px;
  }

  h1 {
    font: ${(props) => props.theme.fonts.Heading1};
    color: ${(props) => props.theme.colors.white};

    text-transform: uppercase;
  }

  p {
    font: ${(props) => props.theme.fonts.BodyText};
    color: ${(props) => props.theme.colors.secundary};

    line-height: 2rem;

    max-width: 27.75rem;
  }

`;

export const SideContainer = styled.div`
  display: flex;
  height: fit-content;

  .explore-hover {
    z-index: 0;
    position: absolute;

    width: 17.125rem;
    height: 17.125rem;
    border-radius: 100%;

    background-color: none;

    transition-duration: 0.2s;
    transition-timing-function: linear;
  }

    button {
      z-index: 1;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      width: 17.125rem;
      height: 17.125rem;

      border-radius: 100%;

      background-color: ${(props) => props.theme.colors.white};

      cursor: pointer;

      span {
        z-index: 1;

        font: ${(props) => props.theme.fonts.Heading4};
        text-transform: uppercase;
        letter-spacing: 2px;
      }

      &:hover {
        .explore-hover {
          width: 22.125rem;
          height: 22.125rem;

          background-color: rgba(255, 255, 255, 0.1);
        }
      }
    }
`;