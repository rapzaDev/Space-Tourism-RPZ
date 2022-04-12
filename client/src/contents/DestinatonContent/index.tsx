import React, { useCallback, useContext, useEffect } from 'react';

import { Destination } from '../../services/graphql/types';

import { useDestination } from '../../hooks/useDestination';

import { HomeContext, PlanetType } from '../../contexts/home';

import NavButtons from '../../components/NavButtons';
import Loading from '../../components/Loading';

import { 
    Container, 
    Main,
    Section,
    SideContainer,
} from './styles';

function ContentContainer() {
    const planetsData = useDestination();
    const { planet, setExplore } = useContext(HomeContext);

    useEffect(() => {
        setExplore(false);
    }, []);

    const getPlanetsData = useCallback((planetsData: Destination[]) => {
        if (planetsData.length) {
            const planets = planetsData;
            const index = planets.findIndex( target => target.id === planet.id );

            const navPlanets = planets.map<PlanetType>( target =>  ({
                id: target.id,
                title: target.name
            }))

            return { 
                planetData:planets[index],
                navPlanets
            };
        } else return {
            planetData:{} as Destination,
            navPlanets: []
        };
    }, [planet]);

    function renderContent(planetsData: Destination[]) {
        const {planetData, navPlanets} = getPlanetsData(planetsData);

        const image = planetData.images.png;

        return (
            <Container id="main-page">
                <Main className="main">
                    <SideContainer className="side-container">
                        <div className="title">
                            <span>01</span>
                            <span>pick your destination</span>
                        </div>

                        <div className="image-container">
                            <img src={image} alt="Planet image"/>
                        </div>
                    </SideContainer>

                    <Section className="section">
                        <NavButtons origin="destination" planets={navPlanets} />

                        <h1>{planetData.name}</h1>
                        <p>{planetData.description}</p>
                    
                        <div className="separator"/>

                        <div className="distance-travel">
                            <div className="distance">
                                <span>avg.distance</span>
                                <span>{planetData.distance}</span>
                            </div>

                            <div className="travel">
                                <span>est. travel time</span>
                                <span>{planetData.travel}</span>
                            </div>
                        </div>
                    </Section>
                </Main>
            </Container>
        );
    }

    function renderLoading() {
        return (
            <Container id="main-page">
                <Loading />
            </Container>
        );
    }

    if (planetsData?.length) return renderContent(planetsData);
    else return renderLoading();
};

const DestinatonContent = React.memo(ContentContainer);

export default DestinatonContent;