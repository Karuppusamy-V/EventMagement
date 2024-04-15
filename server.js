const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Login route
app.post('/api/login', (req, res) => {
    console.log(req.body);
    res.redirect('http://localhost:4200/home');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
