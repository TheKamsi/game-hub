import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, Heading, Image } from '@chakra-ui/react'

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden" padding={4}>
        <Image src={game.background_image}/>
        <Card.Body>
            <Heading fontSize='2xl'>{game.name}</Heading>
        </Card.Body>
        <Card.Footer></Card.Footer>
    </Card.Root>
  )
}

export default GameCard