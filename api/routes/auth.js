const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../model/User');
const Token = require('../model/Token');
const jwt = require('jsonwebtoken');


router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the username or email is already taken
    const existingUser = await User.findOne().or([{ username }, { email }]);
    if (existingUser) {
      return res.status(409).json({ message: 'Username or email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password, remember_me } = req.body;
    console.log(req.body);

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Generate a JWT
    if (remember_me === true) {
      const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '48h' });
      return res.status(200).json({ message: 'Login successful', loginStatus: true, user: user, remember_me: true, token });
    } else {
      const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
      return res.status(200).json({ message: 'Login successful', loginStatus: true, user: user, token });
    }


  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

router.post('/tokens', async (req, res) => {
  try {
    const { token, userId } = req.body;

    // Save the token to the database
    await Token.create({ token, userId });

    return res.status(201).json({ message: 'Token created successfully' });
  } catch (error) {
    console.error('Error creating token:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

router.delete('/tokens/:token', async (req, res) => {
  try {
    const { token } = req.params;

    // Remove the token from the database
    await Token.deleteOne({ token });

    return res.status(200).json({ message: 'Token deleted successfully' });
  } catch (error) {
    console.error('Error deleting token:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

router.post('/check', async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, 'your-secret-key', (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    // req.user = user;
    // next();
    return res.status(200).json({ message: 'Login successful', loginStatus: true, user: user, token });

  });
})


module.exports = router;
