var data =  require("./fakeData");

module.exports = function(req, res){
    const { name, job } = req.body;

    if (!name) {
        return res.sendStatus(400);
    }

    const [lastUser] = data.slice(-1);
    
    const newUser = { 
        id: lastUser?.id + 1 || 1, 
        name, 
        job: job || '' 
    };

    data.push(newUser);
    
    return res.send(newUser);
};