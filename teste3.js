var data =  require("./fakeData");

module.exports = function(req, res) {
    const name =  req.query.name;

    if (!name) {
        return res.sendStatus(400);
    }

    const userIndex = data.findIndex(user => user.name.toLowerCase().includes(name.toLowerCase()));

    if (userIndex === -1) {
        return res.sendStatus(404);
    } else {
        data.splice(userIndex, 1);

        return res.sendStatus(200);
    }
};