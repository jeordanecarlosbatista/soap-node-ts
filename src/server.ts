import express, { Express } from 'express';
require('dotenv').config();

const port = process.env.PORT || 3000;

const app: Express = express();

app.use('/', (req, res) => {
    res.json({ message: "Hello World" });
})

app.listen(port, () => console.log(`Server running at http://localhost:${port}`))