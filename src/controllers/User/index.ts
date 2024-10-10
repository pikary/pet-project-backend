import { Request, Response, NextFunction } from 'express';
import User from '../../models/User';

class UserController {
    // Get all users
    async getAllUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    }

    // Get a single user by ID
    async getUserById(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ msg: 'User not found' });
            }
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }

      async getUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const { mode, value} = req.query;
            let query = {};
            if (mode === 'email') {
                query = { email: new RegExp(value as string, 'i') }; // Case-insensitive search for email
            } else if (mode === 'username') {
                query = { username: new RegExp(value as string, 'i') }; // Case-insensitive search for username
            }

            const users = await User.find(query)

            res.status(200).json({
                users,
            });
        } catch (error) {
            next(error);
        }
    }
    // Update a user
    async updateUser(req: Request, res: Response, next: NextFunction) {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedUser) {
                return res.status(404).json({ msg: 'User not found' });
            }
            res.status(200).json(updatedUser);
        } catch (error) {
            next(error);
        }
    }

}

export default new UserController();
