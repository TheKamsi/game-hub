import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenres"
import PlatformSelector from "./components/PlatformSelector"
import { Platform } from "./hooks/useGames"



function App(){
  const [ selectedGenre, setSelectedGenre ] = useState<Genre | null>(null)
  const [ selectedPlatform, setSelectedPlatform ] = useState<Platform | null>(null)
  const isAboveMd = useBreakpointValue({ base: false, md: true })

  return(
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}
    templateColumns={{
      base: "1fr",
      lg: "200px 1fr"
    }}
    
    >
      <GridItem area='nav' marginBottom={3}><NavBar/></GridItem>
      <Show when={isAboveMd}>
        <GridItem area='aside' paddingX={5}>
          <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} selectedGenre={selectedGenre}/>
        </GridItem>
      </Show>
      <GridItem area='main'>
        <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform) => setSelectedPlatform(platform)}/>
        <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform}/>
      </GridItem>
    </Grid>
  )
}

export default App
