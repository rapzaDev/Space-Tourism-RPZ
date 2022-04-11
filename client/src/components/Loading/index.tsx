import ReactLoading from 'react-loading';
import { Container } from './styles';

function Loading() {
    return (
        <Container className="loading">
            <ReactLoading 
                type='bars' 
                color="#ffffff" 
                height={200} 
                width={200}
            />
        </Container>
    );
};

export default Loading;