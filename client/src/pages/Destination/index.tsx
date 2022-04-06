import { useEffect, useState } from 'react';
import fs from 'fs';

import { getDestinationData } from '../../services/graphql/queries/destination';
import { Destination as DestinationType } from '../../services/graphql/types';

// import image from '../../assets/destination/image-moon.png'

import { 
    Container, 
    Main,
    Section,
    SideContainer,
} from './styles';

import Header from '../../components/Header';

function Destination() {
    const [data, setData] = useState<DestinationType>({} as DestinationType);
    const [image, setImage] = useState("");

    //Getting GRAPHQL DESTINATION DATA
    useEffect(() => {
        const setDestinationData = async () => {
            const data = await getDestinationData(1);
            setData(data);
        }
        setDestinationData();
    }, []);

    //GETTING API GITHUB DATA
    useEffect(() => {
        if (data.images){
            const url = `${process.env.REACT_APP_DESTINATION_IMAGES_URL}/${data.images.png}`;
            fetch(url).then(response => response.json()).then(data => {
                setImage(data.download_url);
            })
        }
    }, [data]);

    return(
        <Container id="main-page">
            <Header />

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

                    <h1>{data.name}</h1>
                    <p>{data.description}</p>
                
                    <div className="separator"/>

                    <div className="distance-travel">
                        <div className="distance">
                            <span>avg.distance</span>
                            <span>{data.distance}</span>
                        </div>

                        <div className="travel">
                            <span>est. travel time</span>
                            <span>{data.travel}</span>
                        </div>
                    </div>
                </Section>
            </Main>
        </Container>
    );
};

export default Destination;