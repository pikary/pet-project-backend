import { Request, Response, NextFunction } from 'express';
import User from '../../models/User';
import { log } from 'node:console';

class UserController {
    // Get all users
    async getAllUsers(req: Request, res: Response, next: NextFunction) {
        try {
            console.log("HELLo")

            const users = await User.find();
            res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    }

    // Get a single user by ID
    async getUserById(req: Request, res: Response, next: NextFunction) {
        
    }

    async getUsers(req: Request, res: Response, next: NextFunction) {
        try {

            const name  = req.query.name;
            if (!name) {
                return res.status(400).json({ msg: 'Error: Name parameter is required.' });
            }

            const query = {
                name: {
                    $regex: new RegExp(name as string, 'i'), // Case-insensitive search
                }
            };

            const users = await User.find(query);

            res.status(200).json({
                data: users,
            });
        } catch (error) {
            next(error);
        }
    }
    // Update a user
    async updateUser(req: Request, res: Response, next: NextFunction) {
      
    }

}

export default new UserController();
