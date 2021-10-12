import { useContext, useEffect, useState } from 'react'
import { PhonewordsContext } from '../../PhonewordsContext';

import { Container, SearchField } from './styles'

export function Search() {
    // soc: left all changes to company in PhonewordContext
    const { getWords } = useContext(PhonewordsContext);

    const [term, setTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(term);


    // update 'term' value after 1 second from the last update of 'debouncedTerm'
    useEffect(() => {
        const timer = setTimeout(() => setTerm(debouncedTerm), 1000);
        return () => clearTimeout(timer);
    }, [debouncedTerm])

    useEffect(() => {
        let termTrim = term.trim()
        getWords(termTrim)
        
    },[term]); // @todo: warning

    return (
        <Container>
            <SearchField 
                placeholder="Insert a number"
                value={debouncedTerm}
                onChange={(e) => setDebouncedTerm(e.target.value)}
            />    
        </Container>
    )
}
