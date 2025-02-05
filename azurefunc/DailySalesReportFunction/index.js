module.exports = async function (context, myTimer) {
    const sales = Math.floor(Math.random() * 100) + 1;
    context.log(`${sales} sales made today`);
};