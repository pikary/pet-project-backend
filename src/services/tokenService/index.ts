import jwt from 'jsonwebtoken';
import UserDto from '../../dtos/UserDTO';
import mongoose from 'mongoose';


const TOKEN_KEY = "secret";

class TokenService {
    signTokens(_id:mongoose.Types.ObjectId) {
        const accessToken = jwt.sign(
            {id:_id},
            TOKEN_KEY,
            { expiresIn: "7h" }
        );
        const refreshToken = jwt.sign(
            {id:_id},
            TOKEN_KEY,
            { expiresIn: "7d" }
        );
        return { accessToken, refreshToken };
    }

    decodeAccessToken(accessToken: string) {
        const decoded = jwt.verify(accessToken, TOKEN_KEY);
        return decoded;
    }

    auth(token: string) {
        return jwt.verify(token, TOKEN_KEY);
    }

    // refreshToken method would go here
    // ...
}

export default new TokenService()
