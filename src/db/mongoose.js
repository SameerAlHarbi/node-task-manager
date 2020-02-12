const mongoose = require('mongoose'); 
const validator = require('validator');

//Connection uri with database name
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true,

//     },
//     age: {
//         type: Number,
//         require: true,
//         default: 30,
//         validate(value) {
//             if(value <= 0) {
//                 throw new Error('Age not value!');
//             }
//         }
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         default: 'smrhrbi@gmail.com',
//         validate(value) {
//             if(!validator.isEmail(value)) {
//                 console.log('not email.')
//                 th
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 7,
//         validate(value) {
//             if(value.toLowerCase().includes('password')) {
//                 throw new Error('password cant contain "Password"');
//             }
//         }
//     }
// });

// const me = new User({
//     name: 'sameer',
//     email:'sa@ll.vv',
//     age: 37
// });

// me.save().then((me) => {
//     console.log(me);
// }).catch((error) => {
//     console.log('Error!',error);
// });

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
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