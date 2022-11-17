const { Router } = require('express');
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const router = Router();

// /api/auth/register
router.post(
	'/register',
	[
		check('name', 'Enter your name').exists(),
		check('email', 'Incorrect email').isEmail(),
		check('password', 'Minimal length of the password is 6 symbols')
			.isLength({ min: 6 })
	],
	async (req, res) => {
		try {
			const errors = validationResult(req);

			if (!errors.isEmpty()) {
				return res.status(400).json({
					errors: errors.array(),
					message: 'Incorrect registration data'
				})
			}

			const { name, email, password, registrationDate } = req.body;

			const candidate = await User.findOne({ email })

			if (candidate) {
				return res.status(400).json({ message: 'This email is already used' });
			}

			const hashedPassword = await bcrypt.hash(password, 12);
			const date = new Date().toLocaleString();
			const user = new User({ name, email, password: hashedPassword, registrationDate: date })

			await user.save();

			res.status(201).json({ message: 'User has been created' });
		} catch (e) {
			res.status(500).json({ message: 'Something went wrong, try again' });
		}
	});


// /api/auth/login
router.post(
	'/login',
	[
		check('email', 'Proper email required').normalizeEmail().isEmail(),
		check('passowr', 'Enter the password').exists()
	],
	async (req, res) => {
		try {
			const errors = validationResult(req);

			if (!errors.isEmpty()) {
				return res.status(400).json({
					errors: errors.array(),
					message: 'Incorrect login data'
				})
			}

			const {email, password} = req.body;

			const user = await User.findOne ({ email});

			if (!user) {
				return res.status(400).json({message: `User doesn't exist`});
			}

			const isMatch = await bcrypt.compare(password, user.password);

			if (!isMatch) {
				return res.status(400).json({message: `Wrong password`});
			}

			const token = jwt.sign(
				{ userId: user.id },
				config.get('jwtSecret'),
				{ expiresIn: '1h'}
			)

				res.json({ token, userId: user.id})
			
		} catch (e) {
			res.status(500).json({ message: 'Something went wrong, try again' });
		}
	});

module.exports = router;