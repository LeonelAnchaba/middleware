const {capitalCase} = require("../middlewares/userAdmin");

const controllerAdmin ={
    indexAdmin: (req,res) => {
        let {user} = req.query 
        user = capitalCase(user)
        const msj = 'Bienvenido Admin: '+ user;
        res.render('indexAdmin', {msj})
    }
}

module.exports = controllerAdmin;