module.exports = (sequelize, Sequelize) => {
    const Coffee = sequelize.define("coffee", {
        type: {
            type: Sequelize.STRING
        },
        topping: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.INTEGER
        }
    });

    return Coffee;
}