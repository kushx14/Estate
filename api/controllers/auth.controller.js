import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';
// import cookieParser from 'cookie-parser';
// app.use(cookieParser());

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    try {
        const hashedPassword = bcryptjs.hashSync(password, 10);
        const user = new User({ username, email, password: hashedPassword });

        await user.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        next(error);
    }
};

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHandler(404, 'User not found'));

        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, 'Invalid password'));

        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        const { password: pass, ...userData } = validUser._doc; // Avoid sending password
        res.cookie('access_token', token, { httpOnly: true, secure: true })
            .status(200)
            .json(userData);

    } catch (error) {
        next(error);
    }
};
