// Press F5 to launch debugger and start API
const express = require('express')

const app = express()
const PORT = 3000

// Demo of all() route
// `curl http://localhost:3000` to fire request and see response

// app.all('/', (req, res) => {
//     console.log('Just got a request!')
//     res.send('What\'s goody.\n')
// })


// Demo of use(express.json) and post() route
// `curl -X POST http://localhost:3000/ -H "Content-Type: application/json" -d '{"name": "Jakob Edelstein"}';` to fire request and see response

app.use(express.json())

app.post('/', (req, res) => {
    console.log('Request Body from client: ', req.body) // Print body JSON object in terminal
    res.send(`Hello, ${req.body.name}\n`) // Sending data back to the client
    res.end();
})


// Start listening for requests
app.listen(PORT, (err) => { // Listen with callback function
    if (err) console.log(err);
    console.log('Server listening on PORT: ', PORT)
})

// app.listen(PORT) // Listen without callback function