const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const Joi = require("joi");
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs")
const sendEmail = require("../utils/sendEmail");
const passwordComplexity = require("joi-password-complexity");

const { User } = require("../models/User");
const Token = require("../models/Token");
const { Z_FIXED } = require("zlib");


//send password link

router.post('/', 
/*[
    body("email", "Please include a valid email").isEmail(),
    body("password", "Please enter a password with 6 or more character").isLength({ min: 6 })
],*/
    async (req, res) => {

/*
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
*/
        
        //destructure email 
        const { email, userId } = req.body;
        try {
            const emailSchema = Joi.object({
                email:Joi.string().email().required().label("Email")
            });
            const{error} = emailSchema.validate(req.body);
            if(error)
            return res.status(401).send({msg: error.details[0].message})

            let user = await User.findOne({ email });

            if (!user) {
                return res.status(409).json({ msg: 'User not found, invalid request' });
            }

            let token = await Token.findOne({ userId });

            //if token doesn't exist create a new Token
            /*
            The crypto.randomBytes() method is used to generate a cryptographically well-built
             artificial random data and the number of bytes to be generated in the written code.
             */
            if (!token) {
                token = await new Token({
                    userId: user.id,
                    token: crypto.randomBytes(32).toString("hex")
                }).save()
            }
             

            //set sendemail method

            await sendEmail(user.email, "Password Reset", url);
            res.status(200).json({ msg: "password reset link is sent to your email account " })

        } catch (err) {
            console.log(err.message);
            res.status(500).send('server error');
        }
    }
)
//verify url
router.get("/:id/:token", async (req, res) => {
    try {
        const user = await User.findOne({_id: req.params.id });
        if (!user) return res.status(400).json({ msg: 'invalid url' });

        const token = await Token.findOne({
            userId: user._id,
            token: req.params.token
        });
        if (!token ) return res.status(401).json({ msg: "invalid link" });
        res.status(200).json({ msg: "valid url" })


    } catch (err) {
        res.status(500).send('server error');
    }
})

//reset password

router.post("/:id/:token",async (req,res) =>{
    try{
        const passwordSchema = Joi.object({
            password:passwordComplexity().required().label("Password")
        });

        const {error}  = passwordSchema.validate(req.body);

        if(error) 
        return res.status(400).send({message:error.details[0].message});

          if (!user) return res.status(400).json({ msg: 'invalid url' });

        const token = await Token.findOne({
            userId: user._id,
            token: req.params.token
        });
        if (!token ) return res.status(401).json({ msg: "invalid link" });
        
        if(!user.verified) user.verified = true;
        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password,salt);

        user.password = hashPassword;
        await user.save();
        await token.remove();

        res.status(200).send({msg:"password reset succesfully"});
        

    }catch(err){
        res.status(500).send({msg:"Internal server error"});
    }
})

module.exports = router;



