import React from 'react';

import { Home } from '../../services/graphql/types';

import { 
    Container, 
    Main,
    Section,
    SideContainer
} from './styles';


type Props = {
    home: Home;
}

function ContentContainer({home}: Props) {
        return(
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
};

const HomeContent = React.memo(ContentContainer);

export default HomeContent;