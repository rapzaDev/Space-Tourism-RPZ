import React from 'react';
import { useCallback, useState } from 'react';

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
    const [activeButton, setActiveButton] = useState('home');

    const handleClickButton = useCallback((title: string) => {
        setActiveButton(title);
    }, [activeButton]);
    
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
                            activeButton={activeButton}
                            onClick={handleClickButton}
                        />
                    );
                } else {
                    return(
                        <NavButton
                            key={button.title} 
                            title={button.title}
                            activeButton={activeButton}
                            onClick={handleClickButton}
                        />
                    );
                }
            })}
        </Container>  
    );
};

const MemoizedNavButtons = React.memo(NavButtons);

export default MemoizedNavButtons;