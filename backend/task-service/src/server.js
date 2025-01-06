const app = require('./app');
const connectDB = require('./config/db');

// Connect to MongoDB
connectDB();

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Task Service running on port ${PORT}`);
});
