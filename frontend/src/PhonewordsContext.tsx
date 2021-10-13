import { createContext, ReactNode, useState } from 'react'
import { api } from './services/api'

interface Phoneword { 
  words: Array<string>
}

interface PhonewordsContextProps {
    children: ReactNode
}

interface PhonewordContextData {
    words: Array<Phoneword>,
    getWords: (term: string) => void
}

export const PhonewordsContext = createContext<PhonewordContextData>({} as PhonewordContextData)

export function PhonewordProvider({ children }: PhonewordsContextProps) {
    const [words, setWords] = useState<Phoneword[]>([]);

    function getWords(number: string) {
        if (number.length > 0) { // don't call on load or when clean all fields
            api.get('words', { params: { number: number } })
            .then((response: any) => {
                setWords(response.data.words)
            })
        } else {
            setWords([]) // needed re-render word box component
        }
    }

    return (
        <PhonewordsContext.Provider value={{ words, getWords }}>
            {children}
        </PhonewordsContext.Provider>
    )
}
  