import { Phone } from '../Phone'
import { WordsBox } from '../WordsBox'

import { Container } from './styles'

export function Dashboard() {
    return (
        <Container>
          <Phone />
          <WordsBox />
        </Container>
    )
}
