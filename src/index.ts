import express from 'express';
import { Request, Response, NextFunction } from 'express';

import mongoose from 'mongoose';
import cors from 'cors'
import bodyParser from 'body-parser';
import passportJwt from './services/passport/PassportJWT'
import AuthRouter from './services/routes/AuthRoute';
import PostRouter from './services/routes/PostRoute';

import User from './models/User';
import UserRouter from './services/routes/UserRoute';


const app = express();
app.use(cors({ origin: '*' }))

app.use(bodyParser.json());
app.use(passportJwt.initialize())
app.use('/auth', AuthRouter)
app.use('/posts', PostRouter)
app.use('/users', UserRouter)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(`Error: ${err.message}`);
    console.error(`Source: ${err.stack}`);

    res.status(500).json({
        message: err.message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : '🥞', // Only show stack trace in development
    });
});

mongoose.connect('mongodb://localhost:27017/pet-project', {});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('server start ' + PORT)
});
