import React from 'react';
import { Games } from '../../components';
import { Container, CenterContent} from './styles';

const Home = () => {
    return (
        <Container>
            <CenterContent>
                <Games/>
            </CenterContent>
        </Container>
    );
};

export default Home;