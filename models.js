const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'sequelize_lab',
  dialect: 'postgres',
});

const Museum = sequelize.define('museum', {
  name: Sequelize.STRING
});

const Artwork = sequelize.define('artwork', {
  title: Sequelize.STRING,
  year: Sequelize.INTEGER,
  medium: Sequelize.STRING,
});

const Artist = sequelize.define('artist', {
  name: Sequelize.STRING
});

Artist.hasMany('Artwork', {onDelete: 'cascade'});

Museum.hasMany('Artwork', {onDelete: 'cascade'});

Artwork.belongsTo(Museum);
Artwork.belongsTo(Artist);


module.exports = {
  Artist,
  Museum,
  Artwork,
  sequelize
};
