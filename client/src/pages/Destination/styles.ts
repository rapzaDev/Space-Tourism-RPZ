import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  gap: 15.7rem;

  height: 100%;
  width: 100%;
`;

export const Main = styled.main`
  position: relative;
  display: flex;
  align-items: center;
  
  gap: 24.125rem;

  width: 100%;

  padding: 0 0 7.8rem 10.3rem;
`;

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;

  div:first-child {
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

  div + div{
    margin-left: 4rem;

    img {
      width: 28.125rem;
      height: 28.125rem;
    }
  }
`;

export const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;

  margin-right: 10.1875rem;

  gap: 1.5rem;

  nav {
    display: flex;
    align-items: center;
  }


`;