const express = require('express');
const routes = express.Router();
const requireDir = require('require-dir');

const UsersController = require('./app/controllers/UsersController');
const SessionController = require('./app/controllers/SessionController');
const ProductController = require('./app/controllers/ProductController');
// const controllers = requireDir('./app/controllers')

const authMiddleware = require('./app/middleware/auth');


// Primeira rota
routes.get('/',(req,res) => {res.send('hello world');})

// User Routes
routes.get('/Users', UsersController.Index);
routes.get('/Users/Profile/:id', UsersController.Profile);
routes.post('/Register', UsersController.Register);
routes.put('/User/UpdateProfile/:id', UsersController.UpdateProfile);
routes.delete('/User/DeleteProfile/:id', UsersController.DeleteProfile);
routes.get('/User/ConfirmEmail/:token', UsersController.ConfirmEmail);
routes.post('User/ResendEmail', UsersController.ResendEmail);
routes.put('/User/UpdatePassword', UsersController.UpdatePassword);
routes.post('/RecoverPassword', UsersController.RecoverPassword);
routes.post('/RecoverPassword/ComparePin', UsersController.ComparePin);

// Rotas de Login 
routes.post('/Session', SessionController.Store);
// routes.post('/Session/PostUser', SessionController.ReturnUserByToken);

// Middleware de verificação de token 
routes.get('/VerifyToken', authMiddleware, (req,res)=>{res.json('Autenticado')});

// Rotas de Produto
routes.get('/Products/', ProductController.Index);
routes.get('/Products/:id', ProductController.Details);
routes.post('/Products/Create', ProductController.Create);
routes.put('/Products/Update/:id', ProductController.Update);
routes.delete('/Products/Delete/:id', ProductController.Delete);

module.exports = routes;