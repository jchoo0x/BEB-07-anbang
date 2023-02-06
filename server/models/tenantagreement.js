// id
// 특약사항(집주인)
// 해당NFT
// Owner
// createdAt
// updatedAt


const Sequelize = require('sequelize');

class TenantAgreement extends Sequelize.Model{
    static initiate(sequelize){
        TenantAgreement.init(
            {
            tenantAgreement : {
                type: Sequelize.STRING,
                allowNull : false,
            },
            }, 
            {
                sequelize,
                    timestamps: true,
                    modelName : 'TenantAgreement',
                    tableName : 'tenantagreements',
                    charset : 'utf8',
                    collate : 'utf8_general_ci'
            }
        );
       
    }

    
    
    static associate(db){
        db.TenantAgreement.belongsTo(db.User, {foreignKey : "tenantId", targetKey: 'id'})
        db.TenantAgreement.belongsTo(db.Estate, {foreignkey : 'tenantestateId', targetKey : 'tokenId'})

    };
}


module.exports = TenantAgreement;