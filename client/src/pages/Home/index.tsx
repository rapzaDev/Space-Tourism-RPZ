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

function Home() {
    const location = useLocation();

    const pageData = usePageData(location.pathname);

    const verification = ( pageData?.home?.description ) ? true : false;

    if (verification)
    {
        const home = pageData?.home;

        return(
            <Container id="main-page">
                <Header/>

                <Main className="main">
                    <Section className="section">
                        <h5>{home?.h5}</h5>
                        <h1>{home?.h1}</h1>
                        <p> {home?.description}</p>
                    </Section>

                    <SideContainer className="side-container">
                            <button>
                                <span>explore</span>
                                <div className="explore-hover" />
                            </button>
                    </SideContainer>
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

export default Home;