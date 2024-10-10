import { Express, Router, Request, Response } from "express";
import passport from "passport";

const AuthRouter = Router();

AuthRouter.post('/login', passport.authenticate('jwt-strategy', { session: false }), (req,res,next)=>{
    
})
AuthRouter.post('/register', passport.authenticate('jwt-strategy', { session: false }), (req,res,next)=>{
    
})
AuthRouter.get('/getMe', passport.authenticate('jwt-strategy', { session: false }), (req,res,next)=>{
    
})




export default AuthRouter;