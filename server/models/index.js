
const Sequelize = require('sequelize');
const User = require('./user')
const Estate = require('./estate')

const env = process.env.NODE_ENV || 'development';
const config = require('/../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User ;
db.Estate = Estate ; 

User.init(sequelize);
Estate.init(sequelize);

User.associate(sequelize);
Estate.associate(sequelize);

module.exports = db;
