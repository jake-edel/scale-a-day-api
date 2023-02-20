import conn from '../services/db'
import AppError from '../utils/appError'

getAllTodos = (req, res, next) => {
	conn.query('SELECT * FROM todolist', (err, data, fields) => {
		if (err) return next(new Error(err))
		res.status(200).json({
			status: 'success',
			length: data?.length,
			data: data
		})
	})
}

createTodo = (req, res, next) => {
	if (!req.body) return next(new AppError('No form data found', 404 ))
	
	const values = [req.body.name, "pending"]
	conn.query(
		'Insert INTO todolist (name, status) VALUES(?)',
		[values],
		(err, data, fields) => {
			if (err) return next(new AppError(err, 500));
			res.status(201).json({
				status: 'success',
				message: 'todo created'
			})
		}
	)
}

getTodo = (req, res, next) => {
	if (!req.params.id) return next(new AppError('No todo id found', 500))
	
	conn.query(
		'SELECT * FROM todolist WHERE id = ?',
		[req.params.id],
		(err, data, fields) => {
			if (err) return next(new AppError(err, 500))
			res.status(200).json({
				status: 'sucess',
				length: data?.length,
				data: data
			})
		}
	)
}

updateTodo = (req, res, next) => {
	if (!req.params.id) return next(new AppError('No todo id found', 404))
	
	conn.query(
		'UPDATE todolist SET status=\'completed\' WHERE id = ?',
		[req.params.id],
		(err, data, fields) => {
			if (err) return next(new AppError(err, 500))
			res.status(201).json({
				status: 'success',	
				message: 'todo updated'
			})
		}
	)
}

deleteTodo = (req, res, next) => {
	if (!req.params.id) return next(new AppError('No todo id found', 404))

	conn.query(
		'DELETE FROM todolist WHERE id = ?',
		[req.params.id],
		(err, fields) => {
			if (err) return next(new AppError(err, 500))
			res.status(201).json({
				status: 'success',
				message: 'todo deleted'
			})
		}
	)
}