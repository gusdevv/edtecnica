
const userRouter = require('express').Router();

userRouter.post('/', (request, response))=>{

    const
}

if(!name||!email||!password||!password2){
    return response.status(400).json({error: 'Todos los campos son requeridos'});
}
else{
    return response.status(200).json({msg: 'Se ha creado el usuario'});
}

module.exports 