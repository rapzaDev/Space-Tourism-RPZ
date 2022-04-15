import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  position: relative;
  display: flex;
  
  gap: 7rem;

  margin-top: 4.75rem;
  padding-left: 10.3rem;
`;

export const SideContainer = styled.div`
  .image-container{
    position: absolute;
    bottom: 0;

    img {
      object-fit: contain;
    }
  }
`;

export const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;

  height: 40.875rem;
  max-width: 38.375rem;


  .title {
    display: flex;
    gap: 1.75rem;
    margin-bottom: 9.6rem;

    span:first-child {
      font-weight: bold;
      color: ${(props) => props.theme.colors.white};
      opacity: 0.25;
    }

    span {
      font: ${(props) => props.theme.fonts.Heading5};
      color: ${(props) => props.theme.colors.white};
      letter-spacing: 4.72px;

      text-transform: uppercase;
    }
  }

  h4 {
    font: ${(props) => props.theme.fonts.Heading4};
    color: ${(props) => props.theme.colors.white};
    opacity: 0.5;
    
    text-transform: uppercase;
    line-height: 37px;

    width: fit-content;

    margin-bottom: 0.9rem;
  }

  h3 {
    font: ${(props) => props.theme.fonts.Heading3};
    color: ${(props) => props.theme.colors.white};

    text-transform: uppercase;
    line-height: 64.18px;

    width: fit-content;


    margin-bottom: 1.7rem;
  }

  p {
    font: ${(props) => props.theme.fonts.BodyText};
    color: ${(props) => props.theme.colors.secundary};

    line-height: 32px;

    width: 27.75rem;
  }

  nav {
    position: absolute;
    bottom: 10.7%;

    .title {
      display: none;
    }
  }
`;