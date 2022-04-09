import React, { useContext, useCallback } from 'react';

import { NavButtonsContext, PlanetType } from '../../contexts/navButtons';


import NavButton from '../NavButton';

import { Container } from './styles';

export type NavButtonsType = {
    title: string;
}

type Props = {
    origin: string;
    buttons: NavButtonsType[];
    planets: PlanetType[];
}

function NavButtons({ origin, buttons, planets }: Props) {
    const {
        category, 
        setCategory,
        planet,
        setPlanet
    } = useContext(NavButtonsContext);

    const handleClickCategoryButton = useCallback((title: string) => {
        setCategory(title);
    }, [category]);

    const handleClickPlanetButton = useCallback((navPlanet: PlanetType) => {
        setPlanet(navPlanet);
    }, [planet]);

    function renderHeaderCategories() {
        return buttons.map( button => {
            const value = buttons.findIndex(target => target.title === button.title);

            return(
                <NavButton 
                    key={button.title}
                    number={`0${value}`}
                    title={button.title}
                    activeButton={category}
                    onClick={() => handleClickCategoryButton(button.title)}
                />
            );
        });
    }

    function renderPlanets() {
        return planets.map( navPlanet => {

            return(
                <NavButton
                    key={navPlanet.title} 
                    title={navPlanet.title}
                    activeButton={planet.title}
                    onClick={() => handleClickPlanetButton(navPlanet)}
                />
            );
        });
    }

    return(
        <Container id="nav-buttons">
            {( origin === 'header') && renderHeaderCategories()}
            {( origin === 'destination') && renderPlanets()}
        </Container>  
    );
};

const MemoizedNavButtons = React.memo(NavButtons);

export default MemoizedNavButtons;