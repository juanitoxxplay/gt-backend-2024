import { DataTypes } from "sequelize";
const JournalModel = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    
    request_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    
    account_record_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    createdAt: {
        type: DataTypes.DATE,
    },

    updateAt: {
        type: DataTypes.DATE,
    },

    deletedAt: {
        type: DataTypes.DATE,
    },

};    

export {JournalModel}; 