const waitTime = new Promise((successHandle, failureHandle) => {
    setTimeout(() => {
        successHandle('Success Promise')
    }, 2000)
});

module.exports = {
    greeting: "hello world from module",
    delay: async () =>  {
        const message = await waitTime;
        console.log(message)
    }
};