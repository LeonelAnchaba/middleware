const usersList = ['Ada','Greta','Vin','Tim']

function userAdmin (req,res,next) {
    const user = req.params.users.toLowerCase();
    if( user == 'ada'||user == 'greta'||user =='vin'||user =='tim'){
        res.send('Bienvenido Administrador: '+req.params.users)
    } else {
        res.send('No tiene privilegios de Administrador')
    }
}