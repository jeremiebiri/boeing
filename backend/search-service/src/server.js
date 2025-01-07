const app = require('./app');

// Start the server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Search Service running on port ${PORT}`);
});
