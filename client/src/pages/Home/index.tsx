import { useCallback, useContext } from 'react';
import ReactLoading from 'react-loading';

import { usePageData } from '../../hooks/usePageData';
import { CategoriesContext } from '../../contexts/categories';

import Header from '../../components/Header';
import HomeContent from '../HomeContent';
import DestinatonContent from '../DestinatonContent';

import { 
    Container,
} from './styles';


function Home() {
    const {category} = useContext(CategoriesContext);

    const pageData = usePageData(category);

    const getVerification = useCallback((categoryName: string) => {
        let verification: boolean = false; 

        if (categoryName === 'home') {
            verification = ( pageData?.home?.description ) ? true : false;             
            return verification;
        } 

        if (categoryName === 'destination') {
            verification = ( pageData?.destination?.description ) ? true : false;             
            return verification;
        } 
        
        return false;

    }, [pageData]);

    function getData(categoryName: string) {
        if ((categoryName === 'home') && pageData?.home) {
            return { home: pageData.home };
        }

        if ((categoryName === 'destination') && pageData?.destination) {
            return {
                destination: pageData.destination,
                image: pageData.image,
            }
        }
    }

    const data = getData(category);

    if ( getVerification(category) )
    {
        return(
            <Container id="main-page">
                <Header />
                { ( (category === 'home') && data?.home ) && <HomeContent home={data.home}/> }

                { ( (category === 'destination') && data?.destination ) 
                    && <DestinatonContent 
                            destination={data.destination}
                            image={data.image}
                        /> 
                }
            </Container>
        );
    }
    else return  (
        <Container id="main-page">
            <Header />
            <div className="loading-container">
                <ReactLoading className="loading" type='bars' color="#ffffff" height={200} width={200}/>    
            </div>
        </Container>
    )
};

export default Home;