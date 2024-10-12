import { Response, Request, NextFunction ,RequestHandler} from "express"
import User from "../../models/User"
import tokenService from "../../services/tokenService";
import bcrypt from 'bcrypt'
import asyncHandler from 'express-serve-static-core'

const SAULT = 7

class AuthController {
    async register(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, firstName, lastName, password } = req.body;
            const user = await User.findOne({ email: email })
            console.log(user)
            if (user) {
                return res.json({ msg: 'User already exists' }).status(400)
            }
            const hashedPassword = await bcrypt.hash(password, SAULT)
            const newUser = await User.create({
                email,
                name: `${firstName} ${lastName}`,
                password: hashedPassword,
            });
            const tokens = tokenService.signTokens(newUser._id );
            return res.status(201).json({ data:{user: newUser, tokens} });
        } catch (e) {
            return next(e)
        }
    }

    
    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body;

            // Check if the user exists
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ msg: 'User does not exist' });
            }

            // Compare passwords
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ msg: 'Invalid credentials' });
            }

            // Generate tokens
            const tokens = tokenService.signTokens(user._id );

            // Return the user and tokens
            return res.status(200).json({data:{ user, tokens} });
        } catch (e) {
            return next(e);
        }
    }

}

export default new AuthController()