import { useContext, useEffect, useState } from 'react'
import { PhonewordsContext } from '../../PhonewordsContext';

import { Container, Keyboard, Screen } from './styles'

export function Phone() {
    const { getWords } = useContext(PhonewordsContext);

    const [number, setNumber] = useState('');
   

    useEffect(() => {
        getWords(number)
    },[number]); // @todo: warning

    function removeChar() {// @todo: how remove words box when empty
        setNumber(number.slice(0, -1))
    }

    return (
        <Container>
            <Screen> 
                {number}
            </Screen>   

            <Keyboard>
                <button onClick={() => alert('decrement')}>⬆</button>
                <button onClick={() => alert('increment')}>⬇</button>
                <button onClick={() => removeChar()}>⌫</button>
                <button disabled>1</button>
                <button onClick={() => setNumber(`${number}2`)}>2 abc</button>
                <button onClick={() => setNumber(`${number}3`)}>3 def</button>
                <button onClick={() => setNumber(`${number}4`)}>4 ghi</button>
                <button onClick={() => setNumber(`${number}5`)}>5 jkl</button>
                <button onClick={() => setNumber(`${number}6`)}>6 mno</button>
                <button onClick={() => setNumber(`${number}7`)}>7 pqrs</button>
                <button onClick={() => setNumber(`${number}8`)}>8 tuv</button>
                <button onClick={() => setNumber(`${number}9`)}>9 wxyz</button>
                <button disabled>*</button>
                <button disabled>0 ⌴</button>
                <button disabled>#</button>
            </Keyboard> 
        </Container>
    )
}
