const express = require('express');
const chalk = require('chalk');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/users', (req, res) => {
    console.log(req.body);
    res.send('testing!');
})

app.listen(port, () => {
    console.log(chalk.green.inverse('Server is up on port ' + port));
});