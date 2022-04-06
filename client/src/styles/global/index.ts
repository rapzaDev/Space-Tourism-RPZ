import { createGlobalStyle } from 'styled-components';

// Home Image Background
import homeDesktop from '../../assets/home/background-home-desktop.jpg'
import homeTablet from '../../assets/home/background-home-tablet.jpg'
import homeMobile from '../../assets/home/background-home-mobile.jpg'

export default createGlobalStyle`
    * {
        margin: 0;
        border: 0;
        box-sizing: border-box;
    }

    body {
        #main-page {
            background: url(${homeDesktop}) no-repeat;
            background-attachment: fixed;
            background-size: 100% 100vh;
        }
    }

    //QUERIES
    @media(max-width: 768px) {
        body #main-page {
            background: url(${homeTablet}) no-repeat center;
            background-size: 100% 100vh;
        }
    }

    @media(max-width: 375px) {
        body #main-page {
            background: url(${homeMobile}) no-repeat center;
            background-size: 100% 100vh;
        }
    }
`; 