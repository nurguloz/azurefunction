module.exports = async function (context, order) {
    const { orderId, items } = order;
    items.forEach(item => {
        context.log(`${item.name} order processing started`);
    });
};

