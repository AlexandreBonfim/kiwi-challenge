import { useContext } from 'react'
import { PhonewordsContext } from '../../PhonewordsContext'
import { Container, Words } from './styles'

export function WordsBox() {
  const { words } = useContext(PhonewordsContext);

  if (words.length <= 0 ) {
      return null
  } else {
    return (
      // @todo: how set condition on the tag without if/else
        <Container> 
            <p>Words:</p>
            
            <Words>
              {words.join(', ')}  
            </Words>
        </Container>
    )
  }
}
