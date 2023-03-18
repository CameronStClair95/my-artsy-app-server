// checks if the user is logged in when trying to access a specific page

const isLoggedIn = (req, res, next) => {
    if (!req.session.currentUser) {
        return res.redirect("/login")
    }
    next()
}

const isLoggedOut = (req, res, next) => {
    if (req.session.currentUser){
        return res.redirect("/home")
    }
    next()
}

module.exports = {isLoggedIn, isLoggedOut}