const express = require('express')
const router = express.Router();
const jsonwebtoken = require('jsonwebtoken')

router.get("/",function (req, res, next) {
    res.json({name:"req"});
});
router.post("/login",function (req, res, next) {
    const { username, password } = req.body
    const valid = username === "admin" && password === 'admin'

    if (!valid) {
        throw new Error('Invalid username or password')
    }

    const accessToken = jsonwebtoken.sign(
        {
        username,
        picture: 'https://github.com/nuxt.png',
        name: 'User ' + username,
        scope: ['test', 'user']
        },
        'dummy'
    )
    // const accessToken = {
    //     username,
    //     picture: 'https://github.com/nuxt.png',
    //     name: 'User ' + username,
    //     scope: ['test', 'user']
    //     }
    res.json({
        token: {
            accessToken
          }
    })

});
router.post("/add",function (req,res) {
    res.send('用户权限');
})
router.get("/edit",function (req,res) {
    res.send('用户权限');
})
router.get("/modify",function (req,res) {
    res.send('用户权限');
})
router.get("/delert",function (req,res) {
    res.send('用户权限');
})

module.exports = router;