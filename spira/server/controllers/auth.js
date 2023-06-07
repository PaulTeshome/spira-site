import { db } from "../db.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';



export const login= (req,res)=>{

  const {username,password} = req.body;
  const q="SELECT * FROM admins WHERE admin_username=?"
   db.query(q,[username],(err,result)=>{

    if (err) {
      return res.status(401).json({ message: 'Server Error. Please try again' });
    }
    else {
     
      try{
        const isMatch = bcrypt.compareSync(password, result[0].admin_password);
        if(!isMatch){
          return res.status(401).json({ message: 'Invalid username or password' })
        }
      }catch(err){
        return res.status(401).json({ message: 'Invalid username or password' })
      }
        
        
        
        const token = jwt.sign({ username: result[0].admin_username, id: result[0].admin_id }, 'spira2121', { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true });
        res.status(200).json({ message: 'Login successful. Redirecting...' });
    }
   });
    
}

export const logout= (req,res)=>{

    res.clearCookie('token');
    res.status(200).send({ message: 'Logout successful' });
}

export const checkLogin= (req,res)=>{
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).send({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, 'spira2121');
    req.user = decoded;
    return res.status(200).send({ message: 'Welcome', user: req.user , exp:req.exp, iat:req.iat });

  } catch (e) {
    return res.status(401).send({ message: 'Unauthorized' });
  }
}