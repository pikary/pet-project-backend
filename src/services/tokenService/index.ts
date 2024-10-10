    import jwt from 'jsonwebtoken';

    export class UserDTO {
        id: number;

        constructor(id: number) {
            this.id = id;
        }
    }

    const TOKEN_KEY = "ll";

    class TokenService {

        signTokens(id: number) {
            const userDTO = new UserDTO(id);
            const accessToken = jwt.sign(
                { ...userDTO },
                TOKEN_KEY,
                { expiresIn: "7h" }
            );
            const refreshToken = jwt.sign(
                { ...userDTO },
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
