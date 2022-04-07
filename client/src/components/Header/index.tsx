import React, { useCallback, useEffect, useState } from 'react';

import { getCategoriesData } from '../../services/graphql/queries/categories';

import NavButtons from '../NavButtons';
import { NavButtonsType } from '../NavButtons';

import logo from '../../assets/icons/logo.svg';

import { 
    Container, 
    HeaderLine,
    NavContainer,
} from './styles';

function Header() {

    const [headerButtons, setHeaderButtons] = useState<NavButtonsType[]>([]);

    const getCategories = useCallback(async () => {
        const categories = await getCategoriesData();

        const buttonsData: NavButtonsType[] = [
            {title: categories.home},
            {title: categories.destination},
            {title: categories.crew},
            {title: categories.technology},
        ]
        setHeaderButtons(buttonsData);
    }, [headerButtons])

    useEffect(() => {
        getCategories();
    }, [])

    return (
        <Container id="header">
            <img className="logo" src={logo} alt="App logo" />

            <HeaderLine className="header-line"/>

            <NavContainer>
                {headerButtons && <NavButtons origin='header' buttons={headerButtons}/>}
            </NavContainer>
        </Container>
    );
};

const MemoizedHeader = React.memo(Header);
export default MemoizedHeader;