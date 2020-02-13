const express = require('express');
const chalk = require('chalk');
require('./db/mongoose'); //just ensure the file will loaded and connect to db
const User = require('./models/user');
const Task = require('./models/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/users', (req, res) => {
    const user = new User(req.body);

    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(error);
    });
});

app.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.status(201).send(users);
    }).catch((error) => {
        res.status(5000).send();
    });
});

app.get('/users/:id', (req, res) => {
    const _id = req.params.id;

    User.findById(_id).then((user) => {
        if(!user) {
           return res.status(404).send();
        }

        res.send(user);
    }).then((error) => {
        res.status(500).send();
    });
});

app.post('/tasks', (req, res) => {
    const task = new Task(req.body);

    task.save().then(() => {
        res.status(201).send(task)
    }).catch((e) => {
        res.status(400).send(e);
    });
});

app.listen(port, () => {
    console.log(chalk.green.inverse('Server is up on port ' + port));
});