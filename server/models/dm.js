// 1. 전세/월세
// 2.보증금
// 3. 관리비
// 4. 건물상태
// 5. 소유주


const Sequelize = require('sequelize');

class DM extends Sequelize.Model{
    static initiate(sequelize){
        DM.init(
            {
            messages : {
                type: Sequelize.STRING,
                allowNull : false,
            },
            }, 
            {
                sequelize,
                    timestamps: true,
          
                    modelName : 'DM',
                    tableName : 'dms',
                    charset : 'utf8',
                    collate : 'utf8_general_ci'
            }
        );

    }

    static associate(db){
        
    };
}

module.exports= DM;