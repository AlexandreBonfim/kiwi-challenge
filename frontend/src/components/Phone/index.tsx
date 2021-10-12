import { useContext, useEffect, useState } from 'react'
import { PhonewordsContext } from '../../PhonewordsContext';

import { Container, Keyboard, Screen } from './styles'

export function Phone() {
    const { getWords } = useContext(PhonewordsContext);

    const [number, setNumber] = useState<string>('');
    const [position, setPosition] = useState<number>(0);
   
    useEffect(() => {
        getWords(number)
    },[number]); // @todo: warning

    function onBtnClicked(char: string) {
        setNumber(`${number}${char}`)
        setPosition(position +1)
    }

    function onRemoveChar() {// @todo: how remove words box when empty
        const rightPosition = position - 1
        if (position > 0) {
            setNumber(number.slice(0, rightPosition) + number.slice(rightPosition + 1))
            setPosition(position -1)
        }
    }

    function onUpClicked() { // @todo: need check max position
        console.log(`up ${position}`)
        if (position > 0)setPosition(position - 1)
    }

    function onDownClicked() {
        console.log(`down ${position}`)
        console.log(`word ${number.length}`)
        
        if (position <= number.length) setPosition(position + 1)
    }

    return (
        <Container>
            <Screen> 
                {number}
            </Screen>   
{position}
            <Keyboard>
                <button onClick={() => onUpClicked()}>⬆</button>
                <button onClick={() => onDownClicked()}>⬇</button>
                <button onClick={() => onRemoveChar()}>⌫</button>
                <button disabled>1</button>
                <button onClick={() => onBtnClicked('2')}>2 abc</button>
                <button onClick={() => onBtnClicked('3')}>3 def</button>
                <button onClick={() => onBtnClicked('4')}>4 ghi</button>
                <button onClick={() => onBtnClicked('5')}>5 jkl</button>
                <button onClick={() => onBtnClicked('6')}>6 mno</button>
                <button onClick={() => onBtnClicked('7')}>7 pqrs</button>
                <button onClick={() => onBtnClicked('8')}>8 tuv</button>
                <button onClick={() => onBtnClicked('9')}>9 wxyz</button>
                <button disabled>*</button>
                <button disabled>0 ⌴</button>
                <button disabled>#</button>
            </Keyboard> 
        </Container>
    )
}
