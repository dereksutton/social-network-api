const router = require('express').Router();

// Import routes
const userRoutes = require('./api/userRoutes');
const thoughtRoutes = require('./api/thoughtRoutes');

// Add routes to the router
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;