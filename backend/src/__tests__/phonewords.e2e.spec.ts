import supertest from 'supertest'
import app from '../index'
import { mockNumber23, mockNumber234 } from '../phonewords/phonewords.mock'

const request = supertest(app)

describe('E2E Tests (Phonewords Module)', () => {
  test('Should return object of type Phoneword given the input string 23', async (done) => {
    const res = await request.get('/phoneword/words?number=23')
    
    expect(res.status).toBe(200)
    expect(res.body).toEqual(mockNumber23)
    done()
  })

  test('Should return object of type Phoneword given the input string 234', async (done) => {
    const res = await request.get('/phoneword/words?number=234')
    
    expect(res.status).toBe(200)
    expect(res.body).toEqual(mockNumber234)
    done()
  })

  test('should return error code if number is missing', async (done) => {
    const res = await request.get('/phoneword/words?number= ')
    
    expect(res.status).toBe(400)       
    expect(res.body).toEqual({ message: 'Missing number input.' })
    done()
  })
})
