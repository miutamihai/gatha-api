const {pipe} = require('rxjs')
const {tap} = require('rxjs/operators')

const listen = () => pipe(
    tap(app => app.listen(3000, () => console.log('Listening on port 3000')))
)

module.exports = listen
