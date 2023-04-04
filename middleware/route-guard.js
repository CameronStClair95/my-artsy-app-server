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

const isAdmin = (req, res, next) => {
    if (req.session.currentUser && req.session.currentUser.role === "admin") {
      next();
    } else {
      res.status(403).json({ message: "Unauthorized" });
    }
  };

module.exports = {isLoggedIn, isLoggedOut, isAdmin}