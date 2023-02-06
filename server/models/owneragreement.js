// id
// 특약사항(집주인)
// 해당NFT
// Owner
// createdAt
// updatedAt


const Sequelize = require('sequelize');

class OwnerAgreement extends Sequelize.Model{
    static initiate(sequelize){
        OwnerAgreement.init(
            {
            ownerAgreement : {
                type: Sequelize.STRING,
                allowNull : false,
            },
            }, 
            {
                sequelize,
                    timestamps: true,
                    modelName : 'OwnerAgreement',
                    tableName : 'owneragreements',
                    charset : 'utf8',
                    collate : 'utf8_general_ci'
            }
        );
       
    }

    
    
    static associate(db){
        db.OwnerAgreement.belongsTo(db.User, {foreignKey : "ownerId", targetKey: 'id'})
        db.OwnerAgreement.belongsTo(db.Estate, {foreignkey : 'ownerestateId', targetKey : 'tokenId'})

    };
}


module.exports = OwnerAgreement;