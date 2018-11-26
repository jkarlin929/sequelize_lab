const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'sequelize_lab',
  dialect: 'postgres',
});

const Museum = sequelize.define('museum', {
  name: Sequelize.STRING
})



module.exports = {
  Artist,
  Museum,
  Artwork
};
