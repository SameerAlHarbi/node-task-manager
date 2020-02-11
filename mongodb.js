//CRUD creadte read update delete

const { MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id);
console.log(id.getTimestamp());

MongoClient.connect(connectionURL, {useUnifiedTopology: true}, (error, client) => {
    
    if(error) {
        return console.log('Unable to connect to database!');
    }

    console.log('Connected correctly');

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Sameer mohammed',
    //     age: 34
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user!');
    //     } 

    //     console.log(result.ops);
    // });

    // db.collection('users').insertMany([
    //     {
    //         name: 'osama',
    //         age: 29
    //     }, {
    //         name: 'mohammed',
    //         age: 39
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert documents!');
    //     }

    //     console.log(result.ops);
    // });

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'desc1',
    //         completed: true
    //     },
    //     {
    //         description: 'desc2',
    //         completed: false
    //     },
    //     {
    //         description: 'desc3',
    //         completed: false
    //     }
    // ], (error, response) => {
    //     if(error) {
    //         return console.log('Unable to insert documents!');
    //     }

    //     console.log(response.ops);
    // });

    // db.collection('users').find({ age: 32}).toArray((error, users) => {
    //     console.log(users);
    // });

    // db.collection('users').find({ age: 32}).count((error, count) => {
    //     console.log(count);
    // });

    // db.collection('tasks').findOne({ _id: new ObjectID('5e41cf334f351c0aae47c2bb')} ,(error, task) => {
    //     console.log(task);
    // });

    // db.collection('tasks').find({ completed: false}).toArray((error, tasks) => {
    //     console.log(tasks);
    // });

//    db.collection('tasks').updateOne({ 
//         _id: new ObjectID("5e41c2f7a57aca085dd2b833")
//     }, {
//         $set: {
//             name: 'Sameer Al Harbi'
//         }
//     }).then((result) => {
//         console.log(result);
//     }).catch((error) => {
//         console.log(error);
//     })

//     db.collection('tasks').updateMany({
//         completed: false
//     },{
//         $set: {
//             completed: true
//         }
//     }).then((result) => {
//         console.log(result.modifiedCount);
//     }).catch((error) => {
//         console.log(error);
//     })

// db.collection('users').deleteMany({
//             age: 27
//         }).then((result) => {
//             console.log(result);
//         }).catch((error) => {
//             console.log(error);
//         })
// });
})
