// Convierte la siguiente promesa para esperar a ejecutar el console usando async-await.


const runTimeOut = () => {
    const promise = new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })
    return promise
};

const timeOut = async () => {
        await runTimeOut();
        await console.log("Time out!")
    }



timeOut();
