import { Game } from '../hooks/useGames'
import { Card, HStack, Heading, Image, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImgUrl from '../services/image-url'

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden" padding={4}>
        <Image src={getCroppedImgUrl(game.background_image)}/>
        <Card.Body display={'flex-column'}>
            <Heading fontSize='2xl'>{game.name}</Heading>
            <HStack justifyContent='space-between'>
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
                <CriticScore score={game.metacritic}/>
            </HStack>
        </Card.Body>
        <Card.Footer></Card.Footer>
    </Card.Root>
  )
}

export default GameCard