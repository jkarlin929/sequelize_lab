const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'sequelize_lab',
  dialect: 'postgres',
});





module.exports = {
  Artist,
  Museum,
  Artwork
};
