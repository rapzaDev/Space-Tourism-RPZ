import NavButton from '../NavButton';

import { Container } from './styles';

function NavButtons() {
    return(
        <Container id="nav-buttons">
            <NavButton number="00" title="home"/>
            <NavButton number="01" title="destination"/>
            <NavButton number="02" title="crew"/>
            <NavButton number="03" title="technology"/>
        </Container>
    );
};

export default NavButtons;