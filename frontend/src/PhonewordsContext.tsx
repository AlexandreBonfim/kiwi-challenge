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
        api.get('words', { params: { number: number } })
        .then((response: any) => {
            console.log('api ===', response.data.words)
            setWords(response.data.words)
            console.log('words ==', words)
        })
    }

    return (
        <PhonewordsContext.Provider value={{ words, getWords }}>
            {children}
        </PhonewordsContext.Provider>
    )
}
  