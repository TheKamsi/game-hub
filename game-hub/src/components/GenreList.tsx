import { HStack, List, Image, Text } from '@chakra-ui/react'
import useData from '../hooks/useData'
import useGenres, { Genre } from '../hooks/useGenres'
import React from 'react'
import getCroppedImgUrl from '../services/image-url'

const GenreList = () => {
  const { data } = useData<Genre>('/genres')
  return (
    <List.Root listStyle="none">
      {data.map(genre => (<List.Item key={genre.id} paddingY="5px">
        <HStack>
          <Image 
            boxSize="32px" 
            borderRadius={4}
            src={getCroppedImgUrl(genre.image_background)}
          />
          <Text fontSize="lg">{genre.name}</Text>
        </HStack>
        </List.Item> ))}
    </List.Root>
  )
}

export default GenreList