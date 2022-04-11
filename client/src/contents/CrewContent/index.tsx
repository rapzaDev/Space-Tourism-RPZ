import React, { useCallback, useContext, useEffect } from 'react';

import { Crew } from '../../services/graphql/types';

import { useCrew } from '../../hooks/useCrew';

import { HomeContext } from '../../contexts/home';

import Loading from '../../components/Loading';

import { 
    Container, 
    Main,
    Section,
    SideContainer,
} from './styles';

function ContentContainer() {
    const crewData = useCrew();
    const { setExplore } = useContext(HomeContext);

    useEffect(() => {
        setExplore(false);
    }, []);

    const getCrewData = useCallback((crew: Crew[]) => {
        if (crew.length) {
            const crewMembers = crew;
            const index = crewMembers.findIndex( member => member.id === 1 );

            return { 
                crewMember: crewMembers[index],
            };
        } else return {
            crewMember:{} as Crew,
        };
    }, []);

    function renderContent(crew: Crew[]) {
        const { crewMember } = getCrewData(crew);

        const image = crewMember.images.png;

        return (
            <Container id="main-page">
                <Main className="main">
                    <Section className="section">
                        <div className="title">
                            <span>02</span>
                            <span>meet your crew</span>
                        </div>

                        <h4>{crewMember.role}</h4>
                        <h3>{crewMember.name}</h3>

                        <p>{crewMember.bio}</p>
                    </Section>

                    <SideContainer className="side-container">
                        <div className="image-container">
                            <img src={image} alt="Planet image"/>
                        </div>
                    </SideContainer>
                </Main>
            </Container>
        );
    }

    function renderLoading() {
        return (
            <Container id="main-page">
                <Loading />
            </Container>
        );
    }

    if (crewData?.length) return renderContent(crewData);
    else return renderLoading();
};

const CrewContent = React.memo(ContentContainer);

export default CrewContent;