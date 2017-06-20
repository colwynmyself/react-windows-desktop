module.exports = (Debug, app) => {
    const debug = Debug('routes')
    debug('initializing routes')

    app.get('/', (req, res) => {
        res.render('home')
    })

    app.use(() => {
        throw new Error('Page not found')
    })

    // Error handling
    app.use((err, req, res, next) => {
        res.status(err.status || 404)
        res.render('404')
    })
}
