import { Express, Router, Request, Response } from "express";
import passport from "passport";
import PostController from "../../controllers/Post";
import expressAsyncHandler from "express-async-handler";


// const authController = new AuthController()
const PostRouter = Router();

PostRouter.post('/',passport.authenticate('jwt-strategy', { session: false }),  expressAsyncHandler(async(req,res,next)=>{PostController.create(req,res,next)}));
PostRouter.get('/',passport.authenticate('jwt-strategy', { session: false }),  expressAsyncHandler(async(req,res,next)=>{PostController.getAll(req,res,next)}));
PostRouter.get('/:id',passport.authenticate('jwt-strategy', { session: false }),  expressAsyncHandler(async(req,res,next)=>{PostController.getById(req,res,next)}));
PostRouter.put('/:id',passport.authenticate('jwt-strategy', { session: false }),  expressAsyncHandler(async(req,res,next)=>{PostController.update(req,res,next)}));
PostRouter.delete('/:id',passport.authenticate('jwt-strategy', { session: false }),  expressAsyncHandler(async(req,res,next)=>{PostController.delete(req,res,next)}));

export default PostRouter;