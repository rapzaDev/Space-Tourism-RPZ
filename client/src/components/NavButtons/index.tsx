import React, { useContext, useCallback } from 'react';

import { HomeContext, PlanetType, CrewMember } from '../../contexts/home';

import NavButton from '../NavButton';

import { Container } from './styles';

export type NavButtonsType = {
    title: string;
}

type Props = {
    origin: string;
    buttons?: NavButtonsType[];
    planets?: PlanetType[];
    crewMembers?: CrewMember[];
}

function NavButtons({ origin, buttons, planets, crewMembers }: Props) {
    const {
        category, 
        setCategory,
        planet,
        setPlanet,
        crewMember,
        setCrewMember
    } = useContext(HomeContext);

    const handleClickCategoryButton = useCallback((title: string) => {
        setCategory(title);
    }, [category]);

    const handleClickPlanetButton = useCallback((navPlanet: PlanetType) => {
        setPlanet(navPlanet);
    }, [planet]);

    const handleClickCrewMemberButton = useCallback((member: CrewMember) => {
        setCrewMember(member)
    }, [crewMember]);

    function renderHeaderCategories() {
        if (buttons)
        return buttons.map( button => {
            const value = buttons.findIndex(target => target.title === button.title);

            return(
                <NavButton 
                    key={button.title}
                    number={`0${value}`}
                    title={button.title}
                    bttnType='category'
                    activeButton={category}
                    onClick={() => handleClickCategoryButton(button.title)}
                />
            );
        });
    }

    function renderPlanets() {
        if (planets)
        return planets.map( navPlanet => {

            return(
                <NavButton
                    key={navPlanet.title} 
                    title={navPlanet.title}
                    bttnType='planet'
                    activeButton={planet.title}
                    onClick={() => handleClickPlanetButton(navPlanet)}
                />
            );
        });
    }

    function renderCrewMembers() {
        if (crewMembers)
        return crewMembers.map( member => {

            return(
                <NavButton
                    key={member.id} 
                    title={JSON.stringify(member.id)}
                    bttnType='crew-member'
                    activeButton={JSON.stringify(crewMember.id)}
                    onClick={() => handleClickCrewMemberButton(member)}
                />
            );
        });
    }

    return(
        <Container id="nav-buttons">
            {( origin === 'header') && renderHeaderCategories()}
            {( origin === 'destination') && renderPlanets()}
            {( origin === 'crew') && renderCrewMembers()}
        </Container>  
    );
};

const MemoizedNavButtons = React.memo(NavButtons);

export default MemoizedNavButtons;