import express from 'express';
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

mongoose.connect('mongodb://localhost:27017/pet-project', {});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('server start ' + PORT)
});
