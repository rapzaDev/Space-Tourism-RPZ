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

    useEffect(() => {
        const setDestinationData = async () => {
            const data = await getDestinationData(1);
            setData(data);

        }
        setDestinationData();
    }, []);

    console.log('console data:', data);

    useEffect(() => {
        const url = 'https://api.github.com/repos/rapzaDev/Space-Tourism-RPZ/contents/server/src/public/assets/destination/image-moon.png';
        fetch(url).then(response => response.json()).then(data => {
            setImage(data.download_url)
        })
        console.log("console image:",image);
    }, [data])

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
                            style={{
                                width: "450px",
                                height: "450px"
                            }}
                        />
                    </div>
                </SideContainer>

                <Section className="section">
                    <h5>Destination</h5>
                </Section>
            </Main>
        </Container>
    );
};

export default Destination;