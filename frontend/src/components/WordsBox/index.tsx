import { useContext } from 'react'
import { PhonewordsContext } from '../../PhonewordsContext'
import { Container, Text } from './styles'

export function WordsBox() {
  const { words } = useContext(PhonewordsContext);

    return (
        <Container>
            <p>Words:</p>
            
            <Text>
              {words.join(', ')}  
            </Text>
        </Container>
    )
}
