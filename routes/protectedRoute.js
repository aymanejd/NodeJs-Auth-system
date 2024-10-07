const express = require('express');
const UserModel = require('../model/user')

const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
router.get('/', verifyToken,async (req, res) => {
    const userid = req.params.id; 
res.status(200).json({ message: 'Protected route accessed' });
});
module.exports = router;