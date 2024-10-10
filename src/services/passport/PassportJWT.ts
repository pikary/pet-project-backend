import passportJWT from 'passport-jwt';
import passport from 'passport';
import User from '../../models/User';

const JwtStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use('jwt-strategy', new JwtStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'll'  // Replace with your secret key
}, async (jwtPayload, done) => {
    try {
        const user = await User.findById(jwtPayload.id);  // Use Mongoose's findById
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    } catch (error) {
        return done(error, false);
    }
}));

// passport.use('jwt-admin', new JwtStrategy({
//     jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
//     secretOrKey: 'll'  // Replace with your secret key
// }, async (jwtPayload, done) => {
//     try {
//         const admin = await Admin.findById(jwtPayload.id);  // Use Mongoose's findById
//         if (admin) {
//             return done(null, admin);
//         } else {
//             return done(null, false);
//         }
//     } catch (error) {
//         return done(error, false);
//     }
// }));

export default passport;
