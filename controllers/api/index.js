const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
const dashboardRoutes = require('../dashboardRoutes');

router.use('/user', userRoutes);

router.use('/post', postRoutes);

router.use('/comment', commentRoutes);

router.use('/dashboard', dashboardRoutes);

module.exports = router;
