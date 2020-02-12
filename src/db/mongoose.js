const mongoose = require('mongoose'); 

//Connection uri with database name
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
});

const me = new User({
    name: 'Sameer',
    age: 39
});

me.save().then((me) => {
    console.log(me);
}).catch((error) => {
    console.log('Error!',error);
});

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
});

const task = new Task({
    description: 'my first task',
    completed: false
});

task.save().then(()=>{
    console.log(task);
}).catch((error)=> {
    console.log(error);
});