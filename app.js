const express = require('express')

// Press F5 to launch debugger and start API

const app = express()

// Demo of all() route
//---------------------------------------
// app.all('/', (req, res) => {
//     console.log('Just got a request!')
//     res.send('What\'s goody.\n')
// })
//---------------------------------------
// `curl http://localhost:3000` to fire request and see response


// Demo of use(express.json) and post() route
//---------------------------
app.use(express.json())

app.post('/', (req, res) => {
    console.log('Request Body from client: ', req.body) // Print body JSON object in terminal
    res.send(`Hello, ${req.body.name}\n`) // Sending data back to the client
    res.end();
})
//---------------------------
// `curl -X POST http://localhost:3000/ -H "Content-Type: application/json" -d '{"name": "Jakob Edelstein"}';` to fire request and see response



const PORT = 3000

app.listen(PORT, (err) => { // Listen with callback function
    if (err) console.log(err);
    console.log('Server listening on PORT: ', PORT)
})

// app.listen(PORT) // Listen without callback function