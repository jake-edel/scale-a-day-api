import conn from '../services/db.js'
import AppError from '../utils/appError.js'

const getAllTodos = (req, res, next) => {
	conn.query('SELECT * FROM todolist', (err, data, fields) => {
		if (err) return next(new Error(err))
		res.status(200).json({
			status: 'success',
			length: data?.length,
			data: data,
			controller: 'getAllTodos'
		})
	})
}

const createTodo = (req, res, next) => {
	if (!req.body) return next(new AppError('No form data found', 404 ))
	
	const values = [req.body.name, "pending"]
	conn.query(
		'Insert INTO todolist (name, status) VALUES(?)',
		[values],
		(err, data, fields) => {
			if (err) return next(new AppError(err, 500));
			res.status(201).json({
				status: 'success',
				message: 'todo created',
				controller: 'createTodo'
			})
		}
	)
}

const getTodo = (req, res, next) => {
	if (!req.params.id) return next(new AppError('No todo id found', 404))

	if (!Number.isInteger(parseFloat(req.params.id))) return next(new AppError('Todo id must be an integer'), 400)
	
	conn.query(
		'SELECT * FROM todolist WHERE id = ?',
		[req.params.id],
		(err, data, fields) => {
			if (err) return next(new AppError(err, 500))
			res.status(200).json({
				status: 'successs',
				length: data?.length,
				data: data,
				controller: 'getTodo'
			})
		}
	)
}

const updateTodo = (req, res, next) => {
	if (!req.params.id) return next(new AppError('No todo id found', 404))
	
	if (!Number.isInteger(parseFloat(req.params.id))) return next(new AppError('Todo id must be an integer'), 400)

	conn.query(
		'UPDATE todolist SET status=\'completed\' WHERE id = ?',
		[req.params.id],
		(err, data, fields) => {
			if (err) return next(new AppError(err, 500))
			res.status(201).json({
				status: 'success',	
				message: 'todo updated',
				controller: 'updateTodo'
			})
		}
	)
}

const deleteTodo = (req, res, next) => {
	if (!req.params.id) return next(new AppError('No todo id found', 404))

	if (!Number.isInteger(parseFloat(req.params.id))) return next(new AppError('Todo id must be an integer'), 400)

	conn.query(
		'DELETE FROM todolist WHERE id = ?',
		[req.params.id],
		(err, fields) => {
			if (err) return next(new AppError(err, 500))
			res.status(201).json({
				status: 'success',
				message: 'todo deleted',
				controller: 'deleteTodo'
			})
		}
	)
}

export default {
	getAllTodos,
	createTodo,
	getTodo,
	updateTodo,
	deleteTodo
}