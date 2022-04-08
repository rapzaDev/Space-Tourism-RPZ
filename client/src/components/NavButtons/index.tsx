import React, { useContext } from 'react';
import { useCallback, useState } from 'react';

import { CategoriesContext } from '../../contexts/categories';

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
    const {category, setCategory} = useContext(CategoriesContext);

    const [activeButton, setActiveButton] = useState('home');

    const handleClickButton = useCallback((title: string) => {
        // setActiveButton(title);
        setCategory(title);
    }, [activeButton]);

    console.log('console category', category);

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
                            onClick={() => handleClickButton(button.title)}
                        />
                    );
                } else {
                    return(
                        <NavButton
                            key={button.title} 
                            title={button.title}
                            activeButton={category}
                            onClick={() => handleClickButton(button.title)}
                        />
                    );
                }
            })}
        </Container>  
    );
};

const MemoizedNavButtons = React.memo(NavButtons);

export default MemoizedNavButtons;