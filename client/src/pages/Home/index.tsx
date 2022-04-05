import { useEffect, useState } from 'react';

import { getHomeData } from '../../services/graphql/queries/home';
import { Home as HomeType } from '../../services/graphql/types';

import { 
    Container, 
    Main,
    Section,
    SideContainer,
} from './styles';

import Header from '../../components/Header';

function Home() {
    const [data, setData] = useState<HomeType>({} as HomeType)

    useEffect(() => {
        const setHomeData = async () => {
            const data = await getHomeData();

            setData(data);
        }

       setHomeData();
    }, []);

    return(
        <Container id="home-page">
            <Header />

            <Main className="main">
                <Section className="section">
                    <h5>{data.h5}</h5>
                    <h1>{data.h1}</h1>
                    <p> {data.description}</p>
                </Section>

                <SideContainer className="side-container">
                        <button>
                            <span>explore</span>
                            <div className="explore-hover" />
                        </button>
                </SideContainer>
            </Main>
        </Container>
    );
};

export default Home;