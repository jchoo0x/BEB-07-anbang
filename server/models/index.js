const Sequelize = require('sequelize');

const User = require('./user')
const Estate = require('./estate');
const Dmroom = require('./dmroom');
const Dm = require('./dm');
const Report = require('./report');
const TenantAgreement = require('./tenantagreement');
const OwnerAgreement = require('./owneragreement');

const env = process.env.NODE_ENV || 'development';
const config= require(__dirname + '/../config/config.js')[env]
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
db.OwnerAgreement = OwnerAgreement;
db.TenantAgreement = TenantAgreement;

User.initiate(sequelize);
Estate.initiate(sequelize);
Dm.initiate(sequelize);
Dmroom.initiate(sequelize);
Report.initiate(sequelize);
OwnerAgreement.initiate(sequelize);
TenantAgreement.initiate(sequelize);

User.associate(db);
Estate.associate(db);
Dm.associate(db);
Dmroom.associate(db);
Report.associate(db);
OwnerAgreement.associate(db);
TenantAgreement.associate(db);

module.exports = db;
