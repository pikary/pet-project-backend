import { Express, Router, Request, Response } from "express";
import passport from "passport";
import AuthController from "../../controllers/Auth";
import expressAsyncHandler from "express-async-handler";


// const authController = new AuthController()
const AuthRouter = Router();

AuthRouter.post('/login', expressAsyncHandler(async (req, res, next) => {
    AuthController.login(req, res, next)
}))
AuthRouter.post('/register', expressAsyncHandler(async (req, res, next) => { AuthController.register(req, res, next) }))
AuthRouter.get('/getMe', passport.authenticate('jwt-strategy', { session: false }), (req, res, next) => {

})




export default AuthRouter;