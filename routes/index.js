const auth = require('./auth.route')
const upload = require('./upload.route')
const user = require('./user.route')
const test = require("./test.route")

module.exports = {
    auth: auth,
    upload: upload,
    user: user,
    test: test,
}
