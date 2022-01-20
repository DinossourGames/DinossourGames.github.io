import React, {useEffect, useState} from 'react';
import {Container} from './styles';
import {GameItem, GameItemProps as Game} from "../index";


const Games = () => {
    const [columns, setColumns] = useState(1);
    const [games, setGames] = useState<Array<Game>>()

    useEffect(() => {
        const fetchRepos = async () => {
            const response = await fetch("https://api.github.com/users/DinossourGames/repos");
            const jsonResponse = await response.json();

            const gameResults = jsonResponse.filter((i: any) => i.url.includes("-game"));
            const games = gameResults.map((item: any) => {
                const game: Game = {
                    name: item.description,
                    homepage: item.homepage,
                    image: item.html_url + "/raw/main/image.png"
                }
                return game;
            });

            if (games.length > 3) {
                setColumns(3)
            }

            setGames(games);
        }
        fetchRepos();
    }, [])

    return (
        <Container columns={columns}>
            {games?.map(game => (
                <GameItem name={game.name} homepage={game.homepage} image={game.image} key={game.homepage}/>
            ))}
        </Container>
    );
};

export default Games;