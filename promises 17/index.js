const a = new Promise((resolve, reject) => {
    let success = true;

    if (success) 
        resolve("Promise Fulfilled");
    else 
        reject("Some Technical Error");
});

a.then((parameter) => {
    console.log(parameter);
}).catch((error) => {
    console.log(error);
});
