var data =  require("./fakeData");

module.exports = function(req, res){
    const name =  req.query.name;

    if (!name) {
        return res.sendStatus(400);
    }

    const user = data.find(user => user.name.toLowerCase().includes(name.toLowerCase()));

    if (user){
        res.send(`Usuário ${user.name} foi lido ${user.readings || 0} vezes.`);
    }
    else {
        return res.sendStatus(404);
    }
};