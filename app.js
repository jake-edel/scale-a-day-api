import express from 'express'
import router from './routes/index.js'
import AppError from './utils/appError.js'
import errorHandler from './utils/errorHandler.js'

const app = express()
const PORT = 3000

app
	.use(express.json())
	.use(router)
	
app.all('*', (req, res, next) => {
	next(new AppError(`The URL ${req.originalUrl} does not exist`, 404))
})

app.use(errorHandler)

app.listen(PORT, (err) => {
	if (err) console.log(err);
	console.log('Server listening on PORT: ', PORT)
})

// `node app.js` to start API
// Or press F5 to launch debugger and start API