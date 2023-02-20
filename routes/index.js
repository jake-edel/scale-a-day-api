import express from 'express'
import controllers from '../controllers/index.js'

const router = express.Router()

router
    .route('/')
    .get(controllers.getAllTodos)
    .post(controllers.createTodo)

router
    .route('/:id')
    .get(controllers.getTodo)
    .put(controllers.updateTodo)
    .delete(controllers.deleteTodo)

export default router