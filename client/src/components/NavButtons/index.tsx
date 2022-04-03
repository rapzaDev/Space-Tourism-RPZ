import { useCallback, useState } from 'react';

import NavButton from '../NavButton';

import { Container } from './styles';

function NavButtons() {
    const [activeButton, setActiveButton] = useState('home');

    const handleClickButton = useCallback((title: string) => {
        setActiveButton(title);
    }, [activeButton]);
    
    return(
        <Container id="nav-buttons">
            <NavButton 
                number="00" 
                title="home"
                activeButton={activeButton}
                onClick={handleClickButton}
            />
            <NavButton 
                number="01" 
                title="destination"
                activeButton={activeButton}
                onClick={handleClickButton}
            />
            <NavButton 
                number="02" 
                title="crew"
                activeButton={activeButton}
                onClick={handleClickButton}
            />
            <NavButton 
                number="03" 
                title="technology"
                activeButton={activeButton}
                onClick={handleClickButton}
            />
        </Container>
    );
};

export default NavButtons;