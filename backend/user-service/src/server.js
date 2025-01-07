const app = require('./app');

const PORT = process.env.PORT || 5004;

app.listen(PORT, () => {
  console.log(`User-Service running on port ${PORT}`);
});
