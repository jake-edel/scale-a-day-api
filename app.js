const express = require('express')
const cors = require('cors')

const app = express()

app.all('/', (req, res) => {
    console.log('Just got a request!')
    res.send('What\'s goody.\n')
})

app.listen(process.env.PORT || 3000)


// Press F5 to launch debugger and start API
// From terminal, `curl http://localhost:3000 send request` to fire request and see response