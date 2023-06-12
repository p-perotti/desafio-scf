var data =  require("./fakeData");

const getUser = (req, res) => {
    const name =  req.query.name;

    if (!name) {
        return res.sendStatus(400);
    }

    const user = data.find(user => user.name.toLowerCase().includes(name.toLowerCase()));

    if (user) {
        user.readings = user?.readings + 1 || 1

        return res.send({
            id: user.id,
            name: user.name,
            job: user.job,
        });
    } else {
        return res.sendStatus(404);
    }
};

const getUsers = (_, res) => {
    return res.send(data.map(user => {
        user.readings = user?.readings + 1 || 1

        return {
            id: user.id,
            name: user.name,
            job: user.job,
        }
    }));
};

module.exports = {
    getUser,
    getUsers
};