import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  gap: 15.7rem;

  height: 100vh;
  width: 100%;

  .loading-container {
    display: flex;
    justify-content: center;

    height: 100vh;
  }
`;

export const Main = styled.main`
  position: relative;
  display: flex;
  align-items: center;
  
  gap: 9.8125rem;

  width: 100%;
  height: 40.875rem;

  padding: 0 0 7.8rem 10.3rem;
`;

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;

  .side-title {
    display: flex;
    gap: 1.75rem;
    margin-bottom: 6rem;

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

  .image-container{
    margin-left: 4rem;

    width: 28.125rem;
    height: 28.125rem;

    img {
      object-fit: cover;
    }
  }
`;

export const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-right: 10.1875rem;

  width: 27.8rem;

  nav {
    margin-bottom: 2.3125rem;
  }

  h1 {
    font: ${(props) => props.theme.fonts.Heading1};
    font-size: 6.25rem;
    text-transform: uppercase;
    line-height: 114.6px;

    width: fit-content;

    color: ${(props) => props.theme.colors.white};
  }

  p {
    font: ${(props) => props.theme.fonts.BodyText};
    line-height: 32px;

    width: fit-content;

    color: ${(props) => props.theme.colors.secundary};

    margin-bottom: 3.375rem;
  }

  .separator {
    position: relative;
    height: 1px;
    width: 100%;

    background: #383B4B;

    margin-bottom: 1.75rem;
  }

  .distance-travel {
    display: flex;

    gap: 4.9rem;

    .distance, .travel {
      display: flex;
      flex-direction: column;

      span:first-child{
        font: ${(props) => props.theme.fonts.SubHeading2};
        color: ${(props) => props.theme.colors.secundary};

        text-transform: uppercase;

        margin-bottom: 0.75rem;
      }

      span + span {
        font: ${(props) => props.theme.fonts.SubHeading1};
        color: ${(props) => props.theme.colors.white};

        text-transform: uppercase;
      }
    }

  }
`;