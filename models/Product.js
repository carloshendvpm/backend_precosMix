const Sequelize = require('sequelize');
const db = require('./db')

const Product = db.define('products', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: Sequelize.STRING(45),
        allowNull: false,
    },
    descricao: {
        type: Sequelize.STRING(55),
        allowNull: false,
    }
});

Product.sync()

module.exports = Product;