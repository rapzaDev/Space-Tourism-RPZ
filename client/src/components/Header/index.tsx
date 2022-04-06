import NavButtons from '../NavButtons';

import { 
    Container, 
    HeaderLine,
    NavContainer,
} from './styles';

import logo from '../../assets/icons/logo.svg';
import { useEffect } from 'react';
import { getCategoriesData } from '../../services/graphql/queries/categories';

function Header() {
    return(
        <Container id="header">
            <img className="logo" src={logo} alt="App logo" />

            <HeaderLine className="header-line"/>

            <NavContainer>
                <NavButtons />
            </NavContainer>
        </Container>
    );
};

export default Header;