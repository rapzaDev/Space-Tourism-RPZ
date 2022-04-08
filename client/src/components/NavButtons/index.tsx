import React, { useContext, useCallback } from 'react';

import { NavButtonsContext } from '../../contexts/navButtons';

import NavButton from '../NavButton';

import { Container } from './styles';

export type NavButtonsType = {
    title: string;
}

type Props = {
    origin: string;
    buttons: NavButtonsType[];
}

function NavButtons({ origin, buttons }: Props) {
    const {
        category, 
        setCategory,
        planet,
        setPlanet
    } = useContext(NavButtonsContext);

    const handleClickCategoryButton = useCallback((title: string) => {
        setCategory(title);
    }, [category]);

    const handleClickPlanetButton = useCallback((title: string) => {
        setPlanet(title);
    }, [planet]);

    return(
        <Container id="nav-buttons">
            {buttons.map( button => {
                if ( origin === 'header') {

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
                } else {
                    return(
                        <NavButton
                            key={button.title} 
                            title={button.title}
                            activeButton={planet}
                            onClick={() => handleClickPlanetButton(button.title)}
                        />
                    );
                }
            })}
        </Container>  
    );
};

const MemoizedNavButtons = React.memo(NavButtons);

export default MemoizedNavButtons;