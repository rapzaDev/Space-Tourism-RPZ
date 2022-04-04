import { 
    Container, 
    Main,
    Section,
    SideContainer,
} from './styles';

import Header from '../../components/Header';

function Home() {
    return(
        <Container id="home-page">
            <Header />

            <Main className="main">
                <Section className="section">
                    <h5>so, you want to travel to</h5>
                    <h1>space</h1>
                    <p> 
                        Let's face it. if you want to go to space, you might as well genuinely 
                        go to outer space and not hover kind of on the edge of it. Well sit back, 
                        and relax because we'll give you a truly out of this world experience!
                    </p>
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