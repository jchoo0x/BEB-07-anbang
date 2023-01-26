
const Sequelize = require('sequelize');
const User = require('./user')
const Estate = require('./estate');
const Dmroom = require('./dmroom');
const Dm = require('./dm');

const env = process.env.NODE_ENV || 'development';
const config = require('/../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User ;
db.Estate = Estate ; 
db.Dm = Dm;
db.Dmroom = Dmroom;

User.init(sequelize);
Estate.init(sequelize);
Dm.init(sequelize);
Dmroom.init(sequelize);

User.associate(sequelize);
Estate.associate(sequelize);
Dm.associate(sequelize);
Dmroom.associate(sequelize);

module.exports = db;
