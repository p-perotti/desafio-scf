var data =  require("./fakeData");

module.exports = function(req, res) {
    const id = parseInt(req.query.id);
    
    const user = data.find(user => user.id === id);
    
    if (!user) {
        return res.sendStatus(404);
    }

    const { name, job } = req.body;

    if (name) {
        user.name = name
    }

    if (job) {
        user.job = job
    }

    return res.send({
        id: user.id,
        name: user.name,
        job: user.job,
    });
};