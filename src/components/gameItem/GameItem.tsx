import React from 'react';
import { Container, ImageContainer, Title, TitleContainer } from './styles';

export interface GameItemProps {
    name: string;
    homepage: string;
    image: string;
}

const GameItem = (props: GameItemProps) => {
    const { image, name, homepage } = props;

    return (
        <Container onClick={ () => {
            window.location.href = homepage
        }}>
            <TitleContainer>
                <Title>{name}</Title>
            </TitleContainer>
            <ImageContainer img={image}/>
        </Container>
    );
};

export default GameItem;