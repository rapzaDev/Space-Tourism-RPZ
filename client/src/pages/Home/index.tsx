import { useContext } from 'react';

import { HomeContext } from '../../contexts/home';

import Header from '../../components/Header';

import HomeContent from '../../contents/HomeContent';
import DestinatonContent from '../../contents/DestinatonContent';
import CrewContent from '../../contents/CrewContent';

import { 
    Container,
} from './styles';

function Home() {
    const { category } = useContext(HomeContext);

    function renderContent() {
        if (category === 'home') return <HomeContent />;
        if (category === 'destination') return <DestinatonContent />;
        if (category === 'crew') return <CrewContent />;
    }

    return(
        <Container 
            id={`main-page_${category}`}
            category={category}
        >
            <Header />
            { renderContent() }
        </Container>
    );
};

export default Home;