import { exportedForTesting, phoneword } from './phonewords.service'
import { mockNumber23, mockNumber234 } from './phonewords.mock'

const { numberToLetterMapping } = exportedForTesting

describe('Phonewords Module', () => {
  describe('numberToLetterMapping', () => {
    test('Should return [a,b,c] when given number 2', () => {
      expect(numberToLetterMapping('2')).toEqual(['a', 'b', 'c'])
    })

    test('Should return empty array given anything else than 2-9', () => {
      expect(numberToLetterMapping('0')).toEqual([])
      expect(numberToLetterMapping('a')).toEqual([])
      expect(numberToLetterMapping(undefined)).toEqual([])
    })
  })

  describe('Phoneword', () => {
    test('should throw an error when quarter is not between 1 and 4', () => {
      expect(() => phoneword(undefined)).toThrowError()
    })

    test('Should return object of type Phoneword given the input string 23', () => {
      expect(phoneword('23')).toEqual(mockNumber23)
    })

    test('Should return object of type Phoneword given the input number 234', () => {
      expect(phoneword('234')).toEqual(mockNumber234)
    })

    test('Should return empty array given anything else than 2-9', () => {
      expect(phoneword('203').words).toEqual([])
      expect(phoneword('203').words).toEqual([])
      expect(phoneword('2a1').words).toEqual([])
    })
  })
})