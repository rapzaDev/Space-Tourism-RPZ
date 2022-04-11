import styled, { css } from 'styled-components';

import homeDesktop from '../../assets/home/background-home-desktop.jpg'

import destinationDesktop from '../../assets/destination/background-destination-desktop.jpg'

import crewDesktop from '../../assets/crew/background-crew-desktop.jpg'

type HomeCategory = {
  category: string;
}

export const Container = styled.div<HomeCategory>`
  position: relative;
  display: flex;
  flex-direction: column;

  height: 100%;
  min-height: 100vh;
  width: 100%;

  ${(props) => props.category === 'home' && css`
      background: url(${homeDesktop}) no-repeat;
  ` || props.category === 'destination' && css`
      background: url(${destinationDesktop}) no-repeat;
  ` || props.category === 'crew' && css`
      background: url(${crewDesktop}) no-repeat;
  `}

  background-attachment: fixed;
  background-size: 100% 100vh;

  .loading-container {
    display: flex;
    justify-content: center;

    height: 100vh;
  }
`;
