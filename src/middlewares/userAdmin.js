const fs = require ('fs');
const path = require ('path');
const {leerArchivo} = require('../data/dataFunctions');

function capitalCase(element) {
    let palabraCapital = element.toUpperCase().charAt(0) + element.substring(1, element.length).toLowerCase();
    return palabraCapital;
  }

function userAdmin (req,res,next) {
    let {user} = req.query;
    const usersList = leerArchivo('usersAdmin');
    const userValid = usersList.find(element => element.name.toLowerCase()==user.toLowerCase());
    if (!userValid || userValid == undefined) {
        const msj = 'No tiene los privilegios para ingresar';
        res.render('errorAdmin',{msj})
    }
    next();
}

module.exports = {userAdmin,capitalCase};