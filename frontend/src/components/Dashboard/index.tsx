import { Search } from '../Search'
import { WordsBox } from '../WordsBox'

import { Container } from './styles'

export function Dashboard() {
    return (
        <Container>
          <Search />
          <WordsBox />
        </Container>
    )
}
