import request from 'supertest'
import app from '../app/app.js'

describe('/api/teams', () => {
    const restype= 'application/json; charset=utf-8'
    var token = null

    it('post /teams ', async () => {
      await request(app)
        .post('/api/teams')
        .set('Accept', 'application/json')
        .send({
            name: 'Something'
        })
        .expect('Content-Type', restype)
        .expect(201)

    })
    it('get /teams', async () => {
      await request(app)
        .get('/api/teams')
        .set('Accept', 'application/json')
        .expect('Content-Type', restype)
        .expect(200)
    })
    it('put /teams/:id', async () => {
      await request(app)
        .put('/api/teams/1')
        .set('Accept', 'application/json')
        .send({
            name: 'Another'
        })
        .expect('Content-Type', restype)
        .expect(200)
    })
    it('delete /teams/:id', async () => {
      await request(app)
        .delete('/api/teams/1')
        .set('Accept', 'application/json')
        .expect(200)
    })
})
