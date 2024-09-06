import express from 'express';
const app = express();
const PORT = 3000;

// Serve static files (your frontend code)
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
