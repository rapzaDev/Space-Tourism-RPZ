import { useLocation } from 'react-router-dom';
import ReactLoading from 'react-loading';

import { usePageData } from '../../hooks/usePageData';

import { 
    Container, 
    Main,
    Section,
    SideContainer,
} from './styles';

import Header from '../../components/Header';

function Destination() {
    const location = useLocation();

    const pageData = usePageData(location.pathname, 1);

    if (pageData?.destination?.description){
        const destination = pageData.destination;
        const image = pageData.image;

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
    }

    else return  (
        <Container id="main-page">
            <Header />
                <div className="loading-container">
                    <ReactLoading className="loading" type='bars' color="#ffffff" height={200} width={200}/>    
                </div>
        </Container>
    )
};

export default Destination;