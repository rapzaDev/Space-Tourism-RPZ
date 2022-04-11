import React, { useContext } from 'react';

import { useHome } from '../../hooks/useHome';
import { HomeContext } from '../../contexts/home';

import Loading from '../../components/Loading';

import { 
    Container, 
    Main,
    Section,
    SideContainer
} from './styles';

function ContentContainer() {
    const home = useHome();
    const { setExplore } = useContext(HomeContext);

    function renderHomeContent() {
        return (
            <Container>
                <Main className="main-home">
                    <Section className="section">
                            <h5>{home?.h5}</h5>
                            <h1>{home?.h1}</h1>
                            <p> {home?.description}</p>
                        </Section>

                    <SideContainer className="side-container">
                        <button onClick={() => setExplore(true)}>
                            <span>explore</span>
                            <div className="explore-hover" />
                        </button>
                    </SideContainer>
                </Main>
            </Container>
        );
    }

    function renderLoading() {
        return (
            <Container>
                <Loading />
            </Container>
        );
    }

    if(home?.description) return renderHomeContent();
    else return renderLoading();
};

const HomeContent = React.memo(ContentContainer);

export default HomeContent;