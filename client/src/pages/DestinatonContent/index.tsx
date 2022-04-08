import React, { useCallback, useEffect, useState } from 'react';

import { getPlanetsData } from '../../services/graphql/queries/planets';
import { Destination } from '../../services/graphql/types';

import NavButtons, { NavButtonsType } from '../../components/NavButtons';

import { 
    Container, 
    Main,
    Section,
    SideContainer,
} from './styles';


type Props = {
    destination: Destination;
    image: string;
}

function ContentContainer({destination, image}: Props) {
    const [planets, setPlanets] = useState<NavButtonsType[]>([]);

    const getPlanets = useCallback(async () => {
        const planets = await getPlanetsData();

        setPlanets(planets);
    }, [planets])

    useEffect(() => {

        let isCancelled = false;
        
        if (!isCancelled) getPlanets();

        return () => {
            isCancelled = true;
        }
    }, [])

    return(
        <Container id="main-page">
            <Main className="main">
                <SideContainer className="side-container">
                    <div className="side-title">
                        <span>01</span>
                        <span>pick your destination</span>
                    </div>

                    <div className="image-container">
                        <img 
                            src={image}
                            alt="Planet image"                                                  
                        />
                    </div>
                </SideContainer>

                <Section className="section">
                    <NavButtons origin="destination" buttons={planets}/>

                    <h1>{destination?.name}</h1>
                    <p>{destination?.description}</p>
                
                    <div className="separator"/>

                    <div className="distance-travel">
                        <div className="distance">
                            <span>avg.distance</span>
                            <span>{destination?.distance}</span>
                        </div>

                        <div className="travel">
                            <span>est. travel time</span>
                            <span>{destination?.travel}</span>
                        </div>
                    </div>
                </Section>
            </Main>
        </Container>
    );
};

const DestinatonContent = React.memo(ContentContainer);

export default DestinatonContent;