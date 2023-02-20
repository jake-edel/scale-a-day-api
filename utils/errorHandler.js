export default (err, req, res, next) => {
    err.statusCode = err.statusCode || 500
    err.status = srr.status || 'error'
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    })
}