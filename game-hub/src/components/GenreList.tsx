import { HStack, List, Image, Spinner, Button } from '@chakra-ui/react'
import useData from '../hooks/useData'
import { Genre } from '../hooks/useGenres'
import getCroppedImgUrl from '../services/image-url'

interface Props {
  onSelectGenre: (genre: Genre) => void
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useData<Genre>('/genres')

  if (error) return null

  if (isLoading) return <Spinner/>

  return (
    <List.Root listStyle="none">
      {data.map(genre => (<List.Item key={genre.id} paddingY="5px">
        <HStack>
          <Image 
            boxSize="32px" 
            borderRadius={4}
            src={getCroppedImgUrl(genre.image_background)}
          />
          <Button onClick={() => onSelectGenre(genre)} fontSize="lg" variant="link">{genre.name}</Button>
        </HStack>
        </List.Item> ))}
    </List.Root>
  )
}

export default GenreList