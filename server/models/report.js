// 신고사유

const Sequelize = require('sequelize');

class Report extends Sequelize.Model{
    static initiate(sequelize){
        Report.init(
            {
            reason : {
                type: Sequelize.STRING,
                allowNull : false,
                },
            }, 
            {
                sequelize,
                    timestamps: true,
                    modelName : 'Report',
                    tableName : 'reports',
                    charset : 'utf8',
                    collate : 'utf8_general_ci'
            }
        );
    
    }

    
    
    static associate(db){
        db.Report.belongsTo(db.Estate, {foreignKey : "reportId", targetKey: 'id'})
        db.Report.belongsTo(db.User, {foreignKey : 'reporterId', targetKey : 'id'})
        
    };
}


module.exports = Report;