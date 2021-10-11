import { Phoneword } from './phonewords.types'

const numberToLetters: any = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z']
}

const numberToLetterMapping = (number: string) => {
  if (number in numberToLetters) {
    return numberToLetters[number]
  }
  console.log(`Could not map number ${number} to a letter`)

  return [] // need to implement 0(should be space?) and 1
}

const phoneword = (number: string): Phoneword => {
  if (!number || typeof number === undefined) throw new Error('Missing number input')

  const arrayOfNumbers = number.split('')
  const arrayOfLetters = arrayOfNumbers
    .map((number) => {
      const letters = numberToLetterMapping(number)
        return letters
    })
    .reduce((previous, current) => {
      const mergedPreviousAndCurrent: string[] = []
      previous.forEach((previousLetter: string) => {
        current.forEach((currentLetter: string) => {
          mergedPreviousAndCurrent.push(previousLetter + currentLetter)
        })
      })
      
      return mergedPreviousAndCurrent
    })

  return { words: arrayOfLetters}
}

export { phoneword }

export const exportedForTesting = { numberToLetterMapping }
