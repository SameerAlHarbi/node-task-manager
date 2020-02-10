//CRUD creadte read update delete

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, {useUnifiedTopology: true}, (error, client) => {
    
    if(error) {
        return console.log('Unable to connect to database!');
    }

    console.log('Connected correctly');

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'Sameer',
    //     age: 27
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

    db.collection('tasks').insertMany([
        {
            description: 'desc1',
            completed: true
        },
        {
            description: 'desc2',
            completed: false
        },
        {
            description: 'desc3',
            completed: false
        }
    ], (error, response) => {
        if(error) {
            return console.log('Unable to insert documents!');
        }

        console.log(response.ops);
    });
});