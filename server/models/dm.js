

const Sequelize = require('sequelize');

class Dm extends Sequelize.Model{
    static initiate(sequelize){
        Dm.init(
            {
            messages : {
                type: Sequelize.STRING,
                allowNull : false,
            },
            }, 
            {
                sequelize,
                    timestamps: true,
          
                    modelName : 'Dm',
                    tableName : 'dms',
                    charset : 'utf8',
                    collate : 'utf8_general_ci'
            }
        );

    }

    static associate(db){
        db.Dm.belongsTo(db.Dmroom, {foreignKey : 'dmId', targetKey : 'id'})
        db.Dm.belongsTo(db.User, {foreignKey : 'userId', targetKey : 'id'})
    };
}

module.exports= Dm;