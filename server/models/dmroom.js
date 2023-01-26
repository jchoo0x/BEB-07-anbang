// 1. 전세/월세
// 2.보증금
// 3. 관리비
// 4. 건물상태
// 5. 소유주


const Sequelize = require('sequelize');

class Dmroom extends Sequelize.Model{
    static initiate(sequelize){
        Dmroom.init(
            {
            lastChat : {
                type: Sequelize.STRING,
            },
            timeOfLastChat : {
                type : Sequelize.DATE,
            },
            }, 
            {
                sequelize,
                    timestamps: true,
                    underscored : false,
                    modelName : 'Dmroom',
                    tableName : 'dmrooms',
                    charset : 'utf8',
                    collate : 'utf8_general_ci'
            }
        );

    }

    static associate(db){
        db.Dmroom.belongsTo(db.User, {foreignKey:"owner", targetKey : 'id'})
    };
}

module.exports= Dmroom;