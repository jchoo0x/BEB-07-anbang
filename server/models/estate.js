// 1. 전세/월세
// 2. 보증금
// 3. 관리비
// 4. 건물상태
// 5. 소유주


const Sequelize = require('sequelize');

class Estate extends Sequelize.Model{
    static initiate(sequelize){
        Estate.init(
            {
            types : {
                type: Sequelize.STRING(30),
                allowNull : false,
            },
            deposit : {
                type : Sequelize.INTEGER,
                allowNull: false
            },
            rental : {
                type : Sequelize.INTEGER,
            },
            conditions : {
                type : Sequelize.STRING(10),
                allowNull : false
            },
            contractAddress : {
                type: Sequelize.STRING(50),
                allowNull : false
            }
            }, 
            {
                sequelize,
                    timestamps: true,
                    modelName : 'Estate',
                    tableName : 'estates',
                    charset : 'utf8',
                    collate : 'utf8_general_ci'
            }
        );

    }

    static associate(db){
        db.Estate.belongsTo(db.User, {foreignKey:"owner", targetKey : 'id'})
        db.Estate.hasOne(db.Dmroom, {foreignKey : 'estateId', sourceKey : 'id'})
        db.Estate.hasMany(db.Report, {foreignKey : 'reportId', sourceKey : 'id'})
    };
}

module.exports= Estate;