import { useContext } from 'react';

import { HomeContext } from '../../contexts/home';

import Header from '../../components/Header';

import HomeContent from '../../contents/HomeContent';
import DestinatonContent from '../../contents/DestinatonContent';

import { 
    Container,
} from './styles';

function Home() {
    const { category, explore } = useContext(HomeContext);

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