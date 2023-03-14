const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config")
const auth  = require("../middleware/auth")
const { body, validationResult } = require('express-validator');


//bring schema 

const User = require("../models/User");
//@route  GET api/users
//@description GET logged in user
//@access  Private

router.get("/", auth, async  (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error');
    }
});

//@route  POST api/users
//@description authenticate the user & get token
//@access  Public

//valitate the user
router.post("/", [
    body("email", 'Please include a valid email').isEmail(),
    body("password", "Password is required").exists()
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        //destructure user
        const { email, password } = req.body;

        try {
            let user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ msg: "Invalid credentials" });
            }

            // check if password is valid 

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ msg: "Invalid credentials" });
            }

            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.sign(
                payload,
                config.get('jwtSecret'),
                {
                    expiresIn: 360000
                },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );

        } catch (err) {
            res.status(500).send("server error")
        }
    }
 )

 

module.exports = router;