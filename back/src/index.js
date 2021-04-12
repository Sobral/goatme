const express = require('express');

const server = express()

server.use(express.json())

server.get('/api/v1/events', (request, response) => {

    const data = [
        {
          start: '2021-04-14 08:00',
          end: '2021-04-14 10:00',
          title: 'Horário Livre',
          content: '',
          class: 'available'
        },
        {
          start: '2021-04-15 08:00',
          end: '2021-04-15 10:00',
          title: 'Horário Livre',
          content: '',
          class: 'available'
        },
        {
          start: '2021-04-15 11:00',
          end: '2021-04-15 14:00',
          title: 'Golf with John',
          content: "lets crush them all",
          class: 'unavailable'
        },
        {
          start: '2021-04-16 14:00',
          end: '2021-04-16 15:00',
          title: 'Golf with John',
          content: "lets crush them all",
          class: 'unavailable'
        }
      ]

    return new Promise( (resolve) => {
        resolve(response.json({events: data}))
      })

})

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log('Server is running at PORT:', PORT))