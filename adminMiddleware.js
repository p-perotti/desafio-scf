var data =  require("./fakeData");

module.exports = function(req, res, next) {
    const id = parseInt(req.query.id)
    const name = req.query.name

    if (!id && !name) {
      return res.sendStatus(400);
    }

    const user = data.find(user => user.id === id || user.name.toLowerCase().includes(name.toLowerCase()));

    if (user.id === req.app.locals.userInSession && user.isAdmin) {
      return next();
    } else {
      return res.sendStatus(401);
    }
};