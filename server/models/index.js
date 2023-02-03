const Sequelize = require('sequelize');

const User = require('./user')
const Estate = require('./estate');
const Dmroom = require('./dmroom');
const Dm = require('./dm');
const Report = require('./report');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(
     config.database,
     config.username, 
     config.password, 
     config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User ;
db.Estate = Estate ; 
db.Dm = Dm;
db.Dmroom = Dmroom;
db.Report = Report;

User.initiate(sequelize);
Estate.initiate(sequelize);
Dm.initiate(sequelize);
Dmroom.initiate(sequelize);
Report.initiate(sequelize);

User.associate(db);
Estate.associate(db);
Dm.associate(db);
Dmroom.associate(db);
Report.associate(db);

module.exports = db;
