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
                allowNull:false
            },
            conditions : {
                type : Sequelize.STRING(10),
                allowNull : false
            },
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
    };
}

module.exports= Estate;