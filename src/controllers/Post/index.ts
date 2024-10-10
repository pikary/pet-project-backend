import { Request, Response, NextFunction } from 'express';
import Post from '../../models/Post';

class PostController {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { userId, title, body } = req.body;
            const post = await Post.create({ userId, title, body });
            return res.status(201).json(post);
        } catch (error) {
            next(error);
        }
    }

    // TODO: pagination  
    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const posts = await Post.find();
            return res.status(200).json(posts);
        } catch (error) {
            next(error);
        }
    }

    async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const post = await Post.findById(req.params.id);
            if (!post) {
                return res.status(404).json({ msg: 'Post not found' });
            }
            return res.status(200).json(post);
        } catch (error) {
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedPost) {
                return res.status(404).json({ msg: 'Post not found' });
            }
            return res.status(200).json(updatedPost);
        } catch (error) {
            next(error);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const deletedPost = await Post.findByIdAndDelete(req.params.id);
            if (!deletedPost) {
                return res.status(404).json({ msg: 'Post not found' });
            }
            return res.status(200).json({ msg: 'Post deleted successfully' });
        } catch (error) {
            next(error);
        }
    }
}

export default new PostController();
