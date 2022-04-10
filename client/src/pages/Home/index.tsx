import { useContext } from 'react';

import { NavButtonsContext } from '../../contexts/navButtons';

import Header from '../../components/Header';
import HomeContent from '../HomeContent';
import DestinatonContent from '../DestinatonContent';

import { 
    Container,
} from './styles';

function Home() {
    const {category} = useContext(NavButtonsContext);

    return(
        <Container 
            id={`main-page_${category}`}
            category={category}
        >
            <Header />
            { (category === 'home') && <HomeContent /> }

            { ( (category === 'destination') && <DestinatonContent /> )}
        </Container>
    );
};

export default Home;