const doWork = async () => {
    return 'Sameer';
};

// console.log(doWork());

doWork().then( result => {
    console.log(result);
}).catch(e => {
    console.log(e);
});

