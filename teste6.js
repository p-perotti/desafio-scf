var data =  require("./fakeData");

const setSession = (req, res) => {
  const id = parseInt(req.query.id);
  
  const user = data.find(user => user.id === id);
  
  if (!user) {
      return res.sendStatus(404);
  }

  req.app.locals.userInSession = user.id

  return res.send(`Sessão com o usuário ${user.name} iniciada com sucesso.`);
};

const setAdmin = (req, res) => {
    const id = parseInt(req.query.id);
    
    const userIndex = data.findIndex(user => user.id === id);
    
    if (userIndex === -1) {
        return res.sendStatus(404);
    }

    data[userIndex].isAdmin = !!req.body.isAdmin

    return res.send({ isAdmin: data[userIndex].isAdmin });
};

module.exports = {
  setSession,
  setAdmin
};