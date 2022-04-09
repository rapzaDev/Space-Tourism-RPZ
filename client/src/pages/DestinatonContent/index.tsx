import React, { useCallback, useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

import { getPlanetsData } from '../../services/graphql/queries/planets';
import { Destination } from '../../services/graphql/types';

import NavButtons from '../../components/NavButtons';
import { PlanetType } from '../../contexts/navButtons';

import { 
    Container, 
    Main,
    Section,
    SideContainer,
} from './styles';


type Props = {
    destination: Destination;
}

function ContentContainer({destination}: Props) {
    console.log('console destination', destination);

    const [planets, setPlanets] = useState<PlanetType[]>([]);
    const [image, setImage] = useState(() => {
        if (destination.images) return `${process.env.REACT_APP_DESTINATION_IMAGES_URL}/${destination.images.png}`;
        else return '';
    });

    const getPlanets = useCallback(async () => {
        return await getPlanetsData();
    }, [planets]);


    function timeout(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const getImage = useCallback(async () => {
        await timeout(1200);    

        const url = `${process.env.REACT_APP_DESTINATION_IMAGES_URL}/${destination.images.png}`
        return await fetch(url).then(data => data.url);
    }, [destination.images])

    useEffect(() => {

        let isCancelled = false;
        
        if (!isCancelled) {
            
            Promise.all( [getPlanets(), getImage()] ).then(
                data => {
                    setPlanets(data[0]);
                    setImage(data[1]);
                }
            );
        }

        return () => {
            isCancelled = true;
        }
    }, [destination.images]);

    const showContent = ( `${process.env.REACT_APP_DESTINATION_IMAGES_URL}/${destination?.images?.png}` === image );

    function renderImage() {
        return (
            <div className="image-container">
                <img 
                    src={image}
                    alt="Planet image"                                                  
                />
            </div>
        )
    }

    function renderImageLoading() {
        return (
            <div className="image-container">
                <ReactLoading 
                    className="loading" 
                    type='bars' 
                    color="#ffffff" 
                    height={200} 
                    width={200}
                />
            </div>
        );
    }

    function renderDestinationInfo() {
        return (
            <>
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
            </>
        );
    }

    function renderDestinationInfoLoading() {
        return (
            <div className="image-container">
                <ReactLoading 
                    className="loading" 
                    type='blank' 
                    color="#ffffff" 
                    height={200} 
                    width={200}
                />
            </div>
        );
    }

    function renderContent() {
        return (
            <Container id="main-page">
                <Main className="main">
                    <SideContainer className="side-container">
                        <div className="side-title">
                            <span>01</span>
                            <span>pick your destination</span>
                        </div>

                        { (showContent) ? renderImage() : renderImageLoading() }
                    </SideContainer>

                    <Section className="section">
                        <NavButtons origin="destination" buttons={[]} planets={planets} />

                        { (showContent && planets.length) ? renderDestinationInfo() : renderDestinationInfoLoading() }
                    </Section>
                </Main>
            </Container>
        );
    }

    if (destination.description) return renderContent();
    else return <ReactLoading className="loading" type='bars' color="#ffffff" height={200} width={200}/>;
    // if (showContent) return renderContent();
};

const DestinatonContent = React.memo(ContentContainer);

export default DestinatonContent;