import { Router } from 'express';
import UserController from '../../controllers/User';
import expressAsyncHandler from 'express-async-handler';
import { log } from 'node:console';

const UserRouter = Router();

// Route to get users with search and pagination
UserRouter.get('/search', expressAsyncHandler(async(req,res,next)=>{
     UserController.getUsers(req,res,next)
 }));

UserRouter.get('/', expressAsyncHandler(async(req,res,next)=>{
     UserController.getAllUsers(req,res,next)
}));

// Other routes like getUserById, updateUser, deleteUser...
UserRouter.get('/:id', expressAsyncHandler(async(req,res,next)=>{
     UserController.getUserById(req,res,next)
}));




export default UserRouter;
