var db = require('../db')

module.exports.login = (req, res) => res.render('auth/login')

module.exports.postLogin = (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    var user = db.get('users').find({ email: email }).value();

    if (!user) {
        res.render('auth/login', {
            errors: [
                'User does not exits.'
            ],
            value: req.body
        })
        return;
    }
    if (!user.password == password) {
        res.render('auth/login', {
            errors: [
                'Wrong password'
            ],
            value: req.body
        })
        return;
    }
    res.cookie('userId', user.id, { signed: true })
    res.redirect('/users')
}