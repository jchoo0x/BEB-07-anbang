// 필요 정보
// 이메일주소
// 비밀번호
// 닉네임
// 이름
// 전화번호
// 지갑정보(주소)
// 주민등록번호 - 본인인증 API 활용
// createdAt
// updatedAt


const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

class User extends Sequelize.Model{
    static initiate(sequelize){
        User.init(
            {
            email : {
                type: Sequelize.STRING(30),
                allowNull : false,
                unique : true,
            },
            password : {
                type : Sequelize.STRING,
                allowNull: false,
            },
            nickname : {
                type : Sequelize.STRING(10),
                allowNull:false,
            },
            name : {
                type : Sequelize.STRING(10),
                allowNull : false,
            },
            phoneNumber : {
                type : Sequelize.STRING(20),
                allowNull: false,
            },
            walletAddress:{
                type: Sequelize.STRING(50),
                unique : true,
            },
            idNumber:{
                type:Sequelize.STRING,
                allowNull:false,
            }
            }, 
            {
                sequelize,
                    timestamps: true,
                    modelName : 'User',
                    tableName : 'users',
                    charset : 'utf8',
                    collate : 'utf8_general_ci'
            }
        );
       
        User.beforeCreate(async (user, options) => {
     
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(user.password, salt);
            const hashedIdNumber = await bcrypt.hash(user.idNumber, salt);
            user.password = hashedPassword;
            user.idNumber = hashedIdNumber;
          })
    }

    
    
    static associate(db){
        db.User.hasMany(db.Estate, {foreignKey : "owner", sourceKey: 'id'})
        db.User.hasOne(db.Estate, {foreignKey :"contractor", sourceKey : 'id'})
        db.User.hasOne(db.Dmroom, {foreignkey : 'buyUserId', sourceKey : 'id'})
        db.User.hasOne(db.Dm, {foreignKey:'userId', sourceKey: 'id'})
        db.User.hasMany(db.Report, {foreignKey:'reporterId', sourceKey : 'id'})
        db.User.hasMany(db.OwnerAgreement, {foreignKey:'ownerId', sourceKey:'id'})
        db.User.hasOne(db.TenantAgreement, {foreignKey:'tenantId', sourceKey: 'id'})
    };
}


module.exports = User;