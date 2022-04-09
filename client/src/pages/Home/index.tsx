import { useCallback, useContext, useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

import { usePageData } from '../../hooks/usePageData';
import { NavButtonsContext, PlanetType } from '../../contexts/navButtons';

import Header from '../../components/Header';
import HomeContent from '../HomeContent';
import DestinatonContent from '../DestinatonContent';

import { 
    Container,
    Background,
} from './styles';


function Home() {
    const {category} = useContext(NavButtonsContext);

    return(
        <Background category={category}>
                <Container id={`main-page_${category}`}>
                    <Header />
                    { (category === 'home') && <HomeContent /> }

                    { ( (category === 'destination') && <DestinatonContent /> )}
                </Container>
        </Background>
    );
};

export default Home;