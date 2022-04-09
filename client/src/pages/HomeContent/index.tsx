import React from 'react';
import ReactLoading from 'react-loading';

import { Home } from '../../services/graphql/types';
import { useHome } from '../../hooks/useHome';

import { 
    Container, 
    Main,
    Section,
    SideContainer
} from './styles';

function ContentContainer() {
    const home = useHome();

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
                        <button>
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
                <Main className="main-home">
                    <ReactLoading className="loading" type='bars' color="#ffffff" height={200} width={200}/>;
                </Main>
        </Container>
        );
    }

    if(home?.description) return renderHomeContent();
    else return renderLoading();
};

const HomeContent = React.memo(ContentContainer);

export default HomeContent;