import React from 'react';

import { Destination } from '../../services/graphql/types';

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
    return(
        <Container id="main-page">
            <Main className="main">
                <SideContainer className="side-container">
                    <div>
                        <span>01</span>
                        <span>pick your destination</span>
                    </div>

                    <div>
                        <img 
                            src={image}
                            alt="Planet image"                                                  
                        />
                    </div>
                </SideContainer>

                <Section className="section">
                    <nav>
                        <button>moon</button>
                        <button>mars</button>
                        <button>europa</button>
                        <button>titan</button>
                    </nav>

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