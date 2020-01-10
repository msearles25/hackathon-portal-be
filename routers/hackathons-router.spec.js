const request = require('supertest');
const server = require('../Api/server');

describe('/hackathons endpoints', () => {
   let token =
      'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik5qZEROREUxUmtWR01rUXdRa0l4UWtWR05EWkVNalU0TlRKR1FUVTVNemc1TmpORVF6QkZPQSJ9.eyJpc3MiOiJodHRwczovL2hhY2thdGhvbnBvcnRhbC5hdXRoMC5jb20vIiwic3ViIjoiSzJQSmg3M3E0MXlGcnlBNkVKZHI3Q3lxM25WcXYxdm9AY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vaGFja2F0aG9uLXBvcnRhbC5oZXJva3VhcHAuY29tLyIsImlhdCI6MTU3ODY4MTczOSwiZXhwIjoxNTc4NzY4MTM5LCJhenAiOiJLMlBKaDczcTQxeUZyeUE2RUpkcjdDeXEzblZxdjF2byIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.F8_ngU5gxOuZzv8GWlx-FzhCer2wf9VNxJe_W3ptAEauFzP5KWBUUP-mnZDm8TSqK3vfEDjQzrLMXBBY5KPHwrtwOld2dW_4ml6wvsqH-ZzmrDLK34ZH3rYkiFORfK_Xj9H8pv7o9L7g_J1m2ImoVzQt0fiN63o4zxaOEUhNZzDfxXgLYyGY-ekw4PWt3mItjfHDiZKjExQnprlPX5iJhXFIOW5R_7gsLfEq-oFCeVmoLLgtm05JAZmLJE9I7Yw5JTBtprO1JKQZhoRNCHLWu357c6BvZsrwFbvi7SUAuqAMoBh12e4I9DSR_VO_K_24Dg5LYOy7_drr7fZIVDpF1A';
   it('Should return 200 success for list of hackathons', async () => {
      await request(server)
         .get('/api/hackathons/')
         .set('Authorization', token)
         .expect(200);
   });
   it('Should return 200 success for specific hackathon', async () => {
      await request(server)
         .get('/api/hackathons/1')
         .set('Authorization', token)
         .expect(200);
   });
   it('Should return 200 success for creating hackathon', async () => {
      await request(server)
         .post('/api/hackathons/u/1')
         .set('Authorization', token)
         .send({
            name: 'Testing Hackathon',
            description: "It's a great hackin' time",
            url: 'https://www.testing-hackathon.com',
            start_date:
               'Mon Jan 20 2020 14:37:00 GMT-0500 (Eastern Standard Time)',
            end_date:
               'Tues Jan 28 2020 14:37:00 GMT-0500 (Eastern Standard Time)',
            is_open: 1
         })
         .expect(201);
   });
});
