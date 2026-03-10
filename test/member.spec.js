import request from 'supertest'
import app from '../app/app.js'

describe('/api/members', () => {
    const restype= 'application/json; charset=utf-8'
    var token = null

    it('post /members ', async () => {
      await request(app)
        .post('/api/members')
        .set('Accept', 'application/json')
        .send({
            name: 'Something'
        })
        .expect('Content-Type', restype)
        .expect(201)

    })
    it('get /members', async () => {
      await request(app)
        .get('/api/members')
        .set('Accept', 'application/json')
        .expect('Content-Type', restype)
        .expect(200)
    })
    it('put /members/:id', async () => {
      await request(app)
        .put('/api/members/1')
        .set('Accept', 'application/json')
        .send({
            name: 'Another'
        })
        .expect('Content-Type', restype)
        .expect(200)
    })
    it('delete /members/:id', async () => {
      await request(app)
        .delete('/api/members/1')
        .set('Accept', 'application/json')
        .expect(200)
    })
})
