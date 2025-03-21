import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';
export const signup=async (req,res,next)=>{
   const {username ,email,password}=req.body;
   const hashedpassword=bcryptjs.hashSync(password,10);
   const user = new User({username,email,password:hashedpassword});
   try {
    await user.save()
    res.status(201).json("User created Successfully")
   } catch (error) {
     next(error);   
   }

};

export const  signin=async(req,res,next)=>{
     const {email,password}=req.body;
     try {
      const validUser= await User.findOne({email});
      if (!validUser)
        {return next(errorHandler(404,'User not Found'));}
      
      const validPassword=bcryptjs.compareSync(password,validUser.password);
      if (!validPassword)
        {return next(errorHandler(401,'Invalid Password'));}
      const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET);
      const {password: pass, ...res}=validUser._doc
      res
         .cookie('access_token',token,{httpOnly:true})
         .status(200)
         .json(validUser);

     } catch (error) {
      next(error);
     }
}