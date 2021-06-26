const Sequelize = require('sequelize');

const sequelize = new Sequelize('learning_outcome', 'root', 'Roniel061617', {
    dialect: 'mysql',
    host: 'localhost',
    logging: false
});


module.exports = sequelize;
