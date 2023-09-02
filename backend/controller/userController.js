const User = require('../model/userModel')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const verifyRegister = async(req,res)=>{
    try {
        let signup = {status:false, message:null};
        const {Username, Email, Password} = req.body;
        let userEmail = await User.findOne({email:Email})
        if (!userEmail) {
            let hashPassword = await bcrypt.hash(Password,10);
            User.create({
                username:Username,
                email:Email,
                password:hashPassword
            }).then((data)=>{
                signup.status = true
                res.json({signup})
            })
        }else{
            signup.message = "This email is already exist,Try another!";
            res.json({signup})
        }
    } catch (error) {
        console.log(error.message);
    }

}


// user authentication process using bcrypt and JWT 
const verifyLogin = async(req,res)=>{
    try {
        let signup = {
            status: true,
            message: null,
            token: null
        }
    
        const{Email,Password} = req.body;
        let user = await User.find({email:Email});
        if (user.length>0) {
            const passwordMatched = bcrypt.compare(Password,user[0].password)
                
                if (passwordMatched) {
                    signup.status = true;
                    let Token = jwt.sign({_id:user._id}, "secretCode", {expiresIn:"30d"})
                    signup.token = Token;
                    res.cookie('jwt',Token,{
                        httpOnly: true,
                        maxAge :800000
                    }).json({signup})
                }else{
                    signup.message = 'Enter the valid Email ';
                    signup.status = false;
                    res.json({signup})
                }

        }
    } catch (error) {
        console.log(error.message);
    }
}

const Profile = async (req, res) => {
    try {
      // Check if the "jwt" cookie exists and contains a token
      if (req.cookies.jwt) {
        console.log("User has a valid token.");
        try {
          const Token = jwt.verify(req.cookies.jwt, "secretCode");
          console.log(Token.iat,"tokkk");
          const user = await User.findOne({ _id: Token._id });
          if (user) {
        console.log("im here");
 
            res.json({ user });
          } else {
            res.status(404).send({ error: "User not found" });
          }
        } catch (error) {
          // Handle token verification error
          console.log(error.message);
          res.status(401).send({ error: "Invalid token" });
        }
      } else {
        // Token not present in cookies or no cookie at all
        res.status(401).send({ error: "Unauthorized access" });
      }
    } catch (error) {
      // Handle other errors
      console.log(error.message);
      res.status(500).send({ error: "Internal server error" });
    }
  };
  
// userController.js
const uploadProfilePic = async (req, res) => {
    try {
      const Token = jwt.verify(req.cookies.jwt.token, "secretCode");
      if (!Token) {
        res.send({ err: "Invalid Token" });
      }
  
      const user = await User.findById(Token._id);
      if (!user) {
        res.send({ err: "User not found" });
      }
  
      if (req.file && req.file.path) {
        user.image = req.file.path;
        await user.save();
        res.send({ profileChanged: true });
      } else {
        res.send({ err: "Image not found" });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  


module.exports = {
    verifyRegister,
    verifyLogin,
    Profile,
    uploadProfilePic
}