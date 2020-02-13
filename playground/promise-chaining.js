require('../src/db/mongoose')
const User = require('../src/models/user');


//5e412dbd157f190fb378f683

User.findByIdAndUpdate('5e412dbd157f190fb378f683', {age: 1}).then((user) => {
    console.log(user);
    return User.countDocuments({age: 1});
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})