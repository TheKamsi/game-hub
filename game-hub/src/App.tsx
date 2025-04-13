import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"



function App(){
  const isAboveMd = useBreakpointValue({ base: false, md: true })

  return(
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem area='nav' marginBottom={3}><NavBar/></GridItem>
      <Show when={isAboveMd}>
        <GridItem area='aside'>
          <GenreList/>
        </GridItem>
      </Show>
      <GridItem area='main'>
        <GameGrid/>
      </GridItem>
    </Grid>
  )
}

export default App
